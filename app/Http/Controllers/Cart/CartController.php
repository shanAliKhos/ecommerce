<?php
namespace App\Http\Controllers\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Setting;
use Auth;

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
        $CustomerInformation = session()->get('CustomerInformation'); 
        return Inertia::render('Ecomerce/shared/Partials/Cart/ShippingMethod',compact('CustomerInformation'));         
    }

    public function ShippingMethodStore(Request $request)
    { 
        $this->validate($request,[ 
            "shipment_type" => "required", 
        ]);   
        session()->put('ShipmentInformation', $request->all()); 
        return redirect()->back()->with('success','information saved');
    }

    public function PaymentMethod()
    { 
        $stripekey = Setting::get('stripe_key');
        $CustomerInformation = session()->get('CustomerInformation'); 
        $ShipmentInformation = session()->get('ShipmentInformation');  
        return Inertia::render('Ecomerce/shared/Partials/Cart/PaymentMethod',compact('CustomerInformation','ShipmentInformation','stripekey'));         
 
    }
    
}
