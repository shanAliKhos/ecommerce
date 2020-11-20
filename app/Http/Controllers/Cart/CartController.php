<?php
namespace App\Http\Controllers\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Setting;   
use Auth;
use Cartalyst\Stripe\Laravel\Facades\Stripe;


class CartController extends Controller
{ 
    public function __construct()
    {
        $this->middleware('auth');  
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
 
}
