<?php
namespace App\Http\Controllers\Ecommerce;
use App\Http\Controllers\Controller;
 

use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Cartalyst\Stripe\Exception\CardErrorException;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Setting;
use App\Models\Order;
use Illuminate\Support\Str;
use App\Notifications\InvoicePaid;
use Config;
use Auth;
use App\Jobs\SendCheckoutEmail;
use Carbon\Carbon;


class CheckOutController extends Controller
{ 
    public function CustomerInformation()
    {  
        $CartItems = session()->get('CartItems'); 
        if(!$CartItems){
            return redirect()->route('shop.index')->with('info','Add some items to cart');
        }          
        return Inertia::render('Ecomerce/Cart/CustomerInformation');         
    }

    public function CustomerInformStore(Request $request)
    {    
        $CartItems = session()->get('CartItems'); 
        if(!$CartItems){
            return redirect()->route('shop.index')->with('info','Okay ! Add some items to cart');
        }        
        $this->validate($request,[ 
            "email" => "required|email:rfc,dns",
            "full_name" => "required", 
            "address" => "required",
            "city" => "required",
            "country" => "required",
            "zipcode" => "required",
            "phone" => "required", 
        ]);  
        
        Auth()->user()->address = $request->address;
        Auth()->user()->city = $request->city;
        Auth()->user()->phone = $request->phone;
        Auth()->user()->country = $request->country;
        Auth()->user()->zipcode = $request->zipcode;
        Auth()->user()->save();
         
 
        return redirect()->route('cart.ShippingMethod')->with('success','information saved');           
    }

    public function ShippingMethod()
    { 
        $CartItems = session()->get('CartItems'); 
        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
        }         
        return Inertia::render('Ecomerce/Cart/ShippingMethod' );         
    }

    public function ShippingMethodStore(Request $request)
    {  
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
        }        
        $this->validate($request,[ 
            "shipment_type" => "required", 
        ]);   
        session()->put('ShipmentInformation', $request->all()); 

         return redirect()->route('cart.PaymentMethod')->with('success','information saved');
    }

    public function PaymentMethod()
    { 
    
        $CartItems = session()->get('CartItems'); 
        if(!$CartItems){
            return redirect()->route('shop.index')->with('info','Okay ! Add some items to cart');
        }             
        $ShipmentInformation = session()->get('ShipmentInformation');  
        return Inertia::render('Ecomerce/Cart/PaymentMethod',compact('ShipmentInformation'));         
 
    }

    public function CheckOut(Request $request)
    {           
        $CartItems = session()->get('CartItems'); 
        if(!$CartItems){
            return redirect()->route('shop.index')->with('info','Okay ! Add some items to cart');
        }
        $this->validate($request,[ 
            "NameOnCard" => "required",
            "stripeToken" => "required",
        ]); 
        if(Setting::get('stripe_payment_method') == 1){
            config([
                'services.stripe.key'=>Setting::get('stripe_key'),
                'services.stripe.secret'=>Setting::get('stripe_secret_key'),
            ]);
        }else{
            return back()->with('error','OPPs ! something went wrong contact support. Thanks!');
        }         
         
        $Product = new Product; 
        $NewOrder = []; 
        $NewOrder['GrandTotal']= 0;
        $NewOrder['ItemCount']= 0;
        $NewOrderItems = [];
 
        foreach($CartItems as $key => $CartItem){
            
            $OrderdProduct = $Product->findOrFail($CartItem['product_id']);
            $NewOrderItems[$key]['product_id'] = $OrderdProduct->id;

            if ($CartItem['sku_id']) {
   
            // dd($OrderdProduct->variations->load('attribute_options'),data_get($OrderdProduct->variations->load('attribute_options'),'*.attribute_options.*.name'));

                $OrderdProduct = $OrderdProduct->skus()->find($CartItem['sku_id']);  
                if(( $OrderdProduct->quantity >= $CartItem['quantity']) == false){ 
                    return back()->with('error','product quantity left ' .$OrderdProduct->quantity.' only');
                }

            }else{ 
                if(($OrderdProduct->quantity >= $CartItem['quantity'])== false){
                    return back()->with('error','product left' .$OrderdProduct->quantity.' only');
                }            
            }             
 
             
            $OrderdProduct->quantity = $OrderdProduct->quantity - $CartItem['quantity'];
            $NewOrderItems[$key]['Quantity'] = $CartItem['quantity'];
            $NewOrderItems[$key]['Quantity'] = $CartItem['quantity'];
            $NewOrderItems[$key]['Price'] = $OrderdProduct->current_price;
            $NewOrderItems[$key]['variation_options'] = $CartItem['variation_options'];
            
            $NewOrder['GrandTotal'] += $NewOrderItems[$key]['Price'] * $NewOrderItems[$key]['Quantity'];
            $NewOrder['ItemCount'] += $NewOrderItems[$key]['Quantity'];
            
            $OrderdProduct->save();
         
        }
        $NewOrder['OrderNumber'] = Str::random(4).Auth()->user()->id.(Order::all()->Count()+1).'-'.uniqid(Auth()->user()->id.(Order::all()->Count()+1));
         
        try {
            $charge = Stripe::charges()->create([
                'amount' => $NewOrder['GrandTotal'],
                'currency' => 'USD',
                'source' => $request->stripeToken,
                'description' => 'Description goes here',
                'receipt_email' => Auth()->user()->email,
                'metadata' => [
                    'OrderNumber' => $NewOrder['OrderNumber'], 
                    'TotalItems' => $NewOrder['ItemCount'], 
                    'CardHolderName' => $request->NameOnCard, 
                    'GrandTotal' => $NewOrder['GrandTotal'], 
                ]
            ]); 
                      
            $Order = new Order;
            $CreatedOrder = $Order->create([
                'user_id'=>Auth()->user()->id,
                'OrderNumber'=>$NewOrder['OrderNumber'],
                'Address' => Auth()->user()->address,
                'PaymentToken' => $charge['payment_method'],
                'City' => Auth()->user()->city,
                'Country' => Auth()->user()->country,
                'PostalCode' => Auth()->user()->zipcode,
                'CardHolderName'=>$request->NameOnCard,
                'PhoneNumber' => Auth()->user()->phone,
                'Notes' => null,
                'PaymentMethod' => "stripe",
                'PaymentStatus' => 1,                
                'GrandTotal'=>$NewOrder['GrandTotal'],
                'ItemCount'=>$NewOrder['ItemCount'],                
            ]);
            foreach ($NewOrderItems as $key => $OrderItem) { 
  
                $CreatedOrder->items()->create([
                    'order_id' => $CreatedOrder->id,
                    'product_id' => $OrderItem['product_id'],
                    'Quantity' => $OrderItem['Quantity'],
                    'variation' => json_encode($OrderItem['variation_options']),
                    'Price' => $OrderItem['Price'],
                ]);

            }       
             
            $notification = [ 
                'OrderNumber'=>$CreatedOrder->OrderNumber,
                'CustomerName'=>$CreatedOrder->CardHolderName,
                'CustomerEmail' => Auth()->user()->email,
                'Address' => Auth()->user()->address,
                'GrandTotal'=>$CreatedOrder->GrandTotal,
                'OderItems'=> $CreatedOrder->items,
            ];
            
            try { 
 
                SendCheckoutEmail::dispatch($notification);  

            } catch (\Throwable $th) {
                 
            }

            return redirect()->route('cart.success')->with('success','Thank you! Your payment has been accepted.');
  

        } catch (CardErrorException $e) { 
            return back()->withErrors('Error! ' . $e->getMessage());
        }
    }    

    public function CheckOutSuccess()
    {
        if(session()->get('CartItems')){
            session()->forget('ShipmentInformation');        
            // session()->forget('CustomerInformation');        
            session()->forget('CartItems');
            return Inertia::render('Ecomerce/Cart/CheckOutSuccess');
        }
        return redirect()->route('shop.index')->with('success','Continue shoping.');


    }
 
}
