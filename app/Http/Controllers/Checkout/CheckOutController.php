<?php

namespace App\Http\Controllers\Checkout;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;
use Cartalyst\Stripe\Exception\CardErrorException;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Setting;
use App\Models\Order;
use Illuminate\Support\Str;


class CheckOutController extends Controller
{
    public function index()
    {       
        $CartItems = session()->get('CartItems'); 
        $stripekey = Setting::get('stripe_key');
        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
        } 
 
        return Inertia::render('Ecomerce/checkout/Checkout',compact('stripekey'));        
    }

    public function checkout(Request $request)
    {          
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
        }
        
        $this->validate($request,[ 
            "email" => "required|email",
            "name_on_card" => "required",
            "address" => "required",
            "city" => "required",
            "postal_code" => "required",
            "country" => "required",
            "phone" => "required",
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
                $NewOrderItems[$key]['Price'] = $OrderdProduct->sale_price?$OrderdProduct->sale_price:$OrderdProduct->regular_price;

                $NewOrder['GrandTotal'] += $NewOrderItems[$key]['Price'] * $NewOrderItems[$key]['Quantity'];
                $NewOrder['ItemCount'] += $NewOrderItems[$key]['Quantity'];

            }else{

                return back()->with('error',$OrderdProduct->name.' is sold out only remaining '.$OrderdProduct->quantity);

            }
            


        }
        $NewOrder['OrderNumber'] = Str::random(4).Auth()->user()->id.(Order::all()->Count()+1).'-'.uniqid(Auth()->user()->id.(Order::all()->Count()+1));

        // create the payment charge
        try {
            $charge = Stripe::charges()->create([
                'amount' => $NewOrder['GrandTotal'],
                'currency' => 'USD',
                'source' => $request->stripeToken,
                'description' => 'Description goes here',
                'receipt_email' => $request->email,
                'metadata' => [
                    'OrderNumber' => $NewOrder['OrderNumber'], 
                    'TotalItems' => $NewOrder['ItemCount'], 
                    'CardHolderName' => $request->name_on_card, 
                    'GrandTotal' => $NewOrder['GrandTotal'], 
                ]
            ]); 
                      
            $Order = new Order;
            $CreatedOrder = $Order->create([
                'user_id'=>Auth()->user()->id,
                'OrderNumber'=>$NewOrder['OrderNumber'],
                'CardHolderName'=>$request->name_on_card,
                'Address' => $request->address,
                'PaymentToken' => $charge['payment_method'],
                'City' => $request->city,
                'Country' => $request->country,
                'PostalCode' => $request->postal_code,
                'PhoneNumber' => $request->phone,
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

            session()->forget('CartItems');
            return Inertia::render('Ecomerce/checkout/CheckOutSuccess',[
                'success' => 'Thank you! Your payment has been accepted.',
            ]);        
 
 
        } catch (CardErrorException $e) {

            // save info to database for failed
            
            // save info to database for failed
            return back()->withErrors('Error! ' . $e->getMessage());
        }
    }
     
}
