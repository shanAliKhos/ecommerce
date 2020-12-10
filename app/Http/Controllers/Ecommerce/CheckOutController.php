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



class CheckOutController extends Controller
{

    public function CustomerInformation()
    {  
        $CartItems = session()->get('CartItems'); 
        if(!$CartItems){
            return redirect()->route('shop.index')->with('info','Add some items to cart');
        }         

        $CustomerInformation = session()->get('CustomerInformation'); 
        return Inertia::render('Ecomerce/Cart/CustomerInformation',compact('CustomerInformation'));         
    }

    public function CustomerInformStore(Request $request)
    {   
      
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop.index')->with('info','Okay ! Add some items to cart');
        }        
        $this->validate($request,[ 
            "email" => "required|email:rfc,dns",
            "first_name" => "required",
            "last_name" => "required",
            "address" => "required",
            "city" => "required",
            "country" => "required",
            "postal_code" => "required",
            "mobile" => "required", 
        ]);  
  
        session()->put('CustomerInformation', $request->all()); 
        return redirect()->route('cart.ShippingMethod')->with('success','information saved');           
    }

    public function ShippingMethod()
    { 
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
        }        
        $CustomerInformation = session()->get('CustomerInformation'); 
        return Inertia::render('Ecomerce/Cart/ShippingMethod',compact('CustomerInformation'));         
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
        $stripekey = Setting::get('stripe_key');
        $CustomerInformation = session()->get('CustomerInformation'); 
        $ShipmentInformation = session()->get('ShipmentInformation');  
        return Inertia::render('Ecomerce/Cart/PaymentMethod',compact('CustomerInformation','ShipmentInformation','stripekey'));         
 
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


        $Product = new Product; 
        $NewOrder = []; 
        $NewOrder['GrandTotal']= 0;
        $NewOrder['ItemCount']= 0;
        $NewOrderItems = [];
 
        foreach($CartItems as $key => $CartItem){

            $OrderdProduct = $Product->findOrFail($CartItem['id']);
            $NewOrderItems[$key]['product_id'] = $OrderdProduct->id;
            $NewOrderItems[$key]['Quantity'] = $CartItem['Qty'];
            
            if($OrderdProduct->quantity >= $CartItem['Qty']){

                $OrderdProduct->quantity = $OrderdProduct->quantity - $CartItem['Qty']; 
                $NewOrderItems[$key]['Price'] = $OrderdProduct->current_price;

                $NewOrder['GrandTotal'] += $NewOrderItems[$key]['Price'] * $NewOrderItems[$key]['Quantity'];
                $NewOrder['ItemCount'] += $NewOrderItems[$key]['Quantity'];

            }else{

                return back()->with('error',$OrderdProduct->name.' is sold out only remaining '.$OrderdProduct->quantity);

            }
            


        }
        $NewOrder['OrderNumber'] = Str::random(4).Auth()->user()->id.(Order::all()->Count()+1).'-'.uniqid(Auth()->user()->id.(Order::all()->Count()+1));
        
  
        try {
            $charge = Stripe::charges()->create([
                'amount' => $NewOrder['GrandTotal'],
                'currency' => 'USD',
                'source' => $request->stripeToken,
                'description' => 'Description goes here',
                'receipt_email' => $request->CustomerInformation['email'],
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
                'Address' => $request->CustomerInformation['address'],
                'PaymentToken' => $charge['payment_method'],
                'City' => $request->CustomerInformation['city'],
                'Country' => $request->CustomerInformation['country'],
                'PostalCode' => $request->CustomerInformation['postal_code'],
                'CardHolderName'=>$request->NameOnCard,
                'PhoneNumber' => $request->CustomerInformation['mobile'],
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
                    'Price' => $OrderItem['Price'],
                ]);

            }       

            $notification = [
                'OrderNumber'=>$CreatedOrder->OrderNumber,
                'CustomerName'=>$CreatedOrder->CardHolderName,
                'CustomerEmail' => $request->CustomerInformation['email'],
                'Address' => $request->CustomerInformation['address'],
                'GrandTotal'=>$CreatedOrder->GrandTotal,
                'OderItems'=> $CreatedOrder->items,
            ];
 
            $request->user()->notify(new InvoicePaid($notification));

            return redirect()->route('cart.success')->with('success','Thank you! Your payment has been accepted.');
  

        } catch (CardErrorException $e) {

            // save info to database for failed
            
            // save info to database for failed
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
