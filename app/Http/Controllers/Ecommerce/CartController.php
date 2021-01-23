<?php
namespace App\Http\Controllers\Ecommerce;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Setting;   
use App\Models\Product;   
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
        return Inertia::render('Ecomerce/Cart/Index'); 
    }  
 
    public function store(Request $request,Product $product)
    {    
       
      
        $this->validate($request,[
            'quantity'=>'required|numeric|min:1',
            'product_id'=>'required|numeric',     
        ]);
        $SessionCartItem = session()->get('CartItems'); 
        $RequestProduct = $product->find($request->product_id);

        if ($request->sku_id) {
            $RequestProduct = $RequestProduct->skus()->find($request->sku_id);  
            if(( $RequestProduct->quantity >= $request->quantity) == false){ 
                return back()->with('error','product quantity left ' .$RequestProduct->quantity.' only');
            }
        }else{ 
            if(($RequestProduct->quantity >= $request->quantity)== false){
                return back()->with('error','product left' .$RequestProduct->quantity.' only');
            }            
        } 
        // dd($RequestProduct->load('skus_options')->toArray());
        
        $request->current_price = $RequestProduct->current_price;  
            
 
        if($SessionCartItem){  
            $UpdateCartItem = $SessionCartItem;

            $existsAtKey =  array_search($request->product_id, array_column($UpdateCartItem, 'product_id'));
            $SkuexistsAtKey =  array_search($request->sku_id, array_column($UpdateCartItem, 'sku_id'));
            
            if($existsAtKey !== false && $SkuexistsAtKey !== false){ 
                $UpdateCartItem[$SkuexistsAtKey?$SkuexistsAtKey:$existsAtKey]['quantity'] = $request->quantity; 
                $UpdateCartItem[$SkuexistsAtKey?$SkuexistsAtKey:$existsAtKey]['Instock'] = $RequestProduct->quantity;
            }else{ 

                $UpdateCartItem[] = $request->all();
            }   
 
            session()->put('CartItems', $UpdateCartItem);

        }else{
            session()->put('CartItems', [$request->all()]);
        } 

        return back()->with('success', ($request->quantity > 1)?$request->quantity.' Items added To cart' :$request->quantity.' Item added To cart');
 
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

            session()->put('CartItems', $request->all()); 
    
            return back()->with('success', 'cart updated ');
  
        }else{ 

            return back()->with('error', 'could not update cart');
 
        }  
    } 
 
    public function destroy($CartIndex)
    {  
        $CartItems = session()->get('CartItems');
        unset($CartItems[$CartIndex]);
        $UpdatedCartItems = array_values($CartItems);
        session()->put('CartItems', $UpdatedCartItems ); 
        return back()->with('success', 'cart item removed ');
    } 

    public function CartEmpty()
    {  
        $CartItems = session()->forget('CartItems'); 
        return back()->with('success', 'cart clear');
    } 
 
}
