<?php
namespace App\Http\Controllers\Ecommerce;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia; 
use App\Models\Product;   
use App\Models\AttributeValue;    
 
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
 
    public function store(Request $request)
    {    
        $this->validate($request,[
            'quantity'=>'required|numeric|min:1',
            'product_id'=>'required|numeric',     
        ]);
        
        $SessionCartItem = session()->get('CartItems'); 
        $Product = Product::find($request->product_id);
        $NewItem = $request->all();
        $NewItem['variation_options'] = null;

        if ($request->sku_id) {
            $Product = $Product->skus()->find($request->sku_id);  
            if( ( $Product->quantity >= $request->quantity) == false ){ 
                return back()->with('error','product quantity left ' .$Product->quantity.' only');
            }

            $AttributeValue = new AttributeValue;
            $NewItem['variation_options'] = $AttributeValue->with('attribute')->find($request->attribute_options_ids)->pluck('name','attribute.name')->toArray();
            $NewItem['sku_name'] = $Product->name; 
            
        }else{ 

            if(($Product->quantity >= $request->quantity) == false){
                return back()->with('error','product left' .$Product->quantity.' only');
            }            
 
            $NewItem['sku_name'] = $Product->sku; 
        }

        $NewItem['current_price'] = $Product->current_price;

        $NewItem['Instock'] = $Product->quantity;
 
         
        if($SessionCartItem){
            
            $UpdateCartItem = $SessionCartItem;

            $existsAtKey =  array_search($request->product_id, array_column($UpdateCartItem, 'product_id'));

            $SkuexistsAtKey =  array_search($request->sku_id, array_column($UpdateCartItem, 'sku_id'));
           
            if($existsAtKey !== false && $SkuexistsAtKey !== false){ 
 
                $UpdateCartItem[$SkuexistsAtKey?$SkuexistsAtKey:$existsAtKey]['quantity'] = $request->quantity; 

            }else{ 

                $UpdateCartItem[] = $NewItem;

            }   
 
            session()->put('CartItems', $UpdateCartItem);

        }else{
            session()->put('CartItems', [$NewItem]);
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
