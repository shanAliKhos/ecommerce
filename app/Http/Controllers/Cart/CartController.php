<?php
namespace App\Http\Controllers\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Setting;
use App\Models\Product;
use App\Models\Order;
use Illuminate\Support\Str;
use Auth;
use Cartalyst\Stripe\Laravel\Facades\Stripe;


class CartController extends Controller
{ 
    public function __construct()
    {
        $this->middleware('auth')->except('index','create');  
    }
     
    public function index(Request $request)
    {  
        return Inertia::render('Ecomerce/shared/Partials/Cart/Cart'); 
    } 

    public function FetchCartItems()
    {
        $CartItems = session()->get('CartItems');
        return response()->json($CartItems);
    }    
 
    public function store(Request $request)
    {  
        $this->validate($request,[
            'id'=>'required|numeric',
            'name'=>'required',
            'slug'=>'required',
            'Instock'=>'required',
            'Qty'=>'required|numeric|min:1',
            'price'=>'required',
            'image'=>'required',
        ]);
  
        $SessionCartItem = session()->get('CartItems'); 
        if($SessionCartItem){  
            
            $UpdateCartItem = $SessionCartItem;
            $existsAtKey =  array_search($request->id, array_column($UpdateCartItem, 'id'));
            if($existsAtKey !== false ){
                $UpdateCartItem[$existsAtKey]['Qty']++; 
            }else{
                $UpdateCartItem[] = $request->all();
            }
            session()->put('CartItems', $UpdateCartItem );
        }else{
            $NewCartItem[] =  $request->all();
            session()->put('CartItems', $NewCartItem );
        }
        return back()->with('success', 'success ! Added to cart');
 
    } 
 
    public function show($text)
    {
        if($text==="show"){
            return Inertia::render('Ecomerce/shopping-cart/ShoppingCart');
        }else{
            abort('404');
        }

    } 
  
    public function update(Request $request,$Type)
    { 
        if($Type == "update"){

            session()->put('CartItems', $request->all() ); 
    
            return back()->with('success', 'success ! cart updated ');
  
        }else{ 

            return back()->with('error', 'OPPS ! could not update cart');
 
        }  
    } 
 
    public function destroy($CartIndex)
    {  
        $CartItems = session()->get('CartItems');
        unset($CartItems[$CartIndex]);
        $UpdatedCartItems = array_values($CartItems);
        session()->put('CartItems', $UpdatedCartItems ); 
        return back()->with('success', 'Success ! Removed item ');
    } 

    public function CartEmpty()
    {  
        $CartItems = session()->forget('CartItems'); 
        return back()->with('success', 'Success ! cart is clear ');
    } 

    public function CustomerInformation()
    { 
        $CustomerInformation = session()->get('CustomerInformation'); 
 
        $CartItems = session()->get('CartItems'); 
        if(!$CartItems){
            return redirect()->route('shop')->with('info','Add some items to cart');
        }         
        if(!$CartItems){
            return redirect()->route('shop')->with('info','Add some items to cart');
        } 

        return Inertia::render('Ecomerce/shared/Partials/Cart/CustomerInformation',compact('CustomerInformation'));         
    }

    public function CustomerInformStore(Request $request)
    {  
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
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
        return redirect()->back()->with('success','information saved');          
    }

    public function ShippingMethod()
    {
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
        }        
        $CustomerInformation = session()->get('CustomerInformation'); 
        return Inertia::render('Ecomerce/shared/Partials/Cart/ShippingMethod',compact('CustomerInformation'));         
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
        return redirect()->back()->with('success','information saved');
    }

    public function PaymentMethod()
    { 
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
        }            
        $stripekey = Setting::get('stripe_key');
        $CustomerInformation = session()->get('CustomerInformation'); 
        $ShipmentInformation = session()->get('ShipmentInformation');  
        return Inertia::render('Ecomerce/shared/Partials/Cart/PaymentMethod',compact('CustomerInformation','ShipmentInformation','stripekey'));         
 
    }

    public function CheckOut(Request $request)
    {          
        // dd($request->all());
        $CartItems = session()->get('CartItems'); 

        if(!$CartItems){
            return redirect()->route('shop')->with('info','Okay ! Add some items to cart');
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
                'CardHolderName'=>$request->NameOnCard,
                'Address' => $request->CustomerInformation['address'],
                'PaymentToken' => $charge['payment_method'],
                'City' => $request->CustomerInformation['city'],
                'Country' => $request->CustomerInformation['country'],
                'PostalCode' => $request->CustomerInformation['postal_code'],
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

            session()->forget('CartItems');
            return Inertia::render('Ecomerce/shared/Partials/Cart/CheckOutSuccess',[
                'success' => 'Thank you! Your payment has been accepted.',
            ]);        
 
 
        } catch (CardErrorException $e) {

            // save info to database for failed
            
            // save info to database for failed
            return back()->withErrors('Error! ' . $e->getMessage());
        }
    }
         
    
}
