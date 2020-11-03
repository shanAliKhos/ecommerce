<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;

class ShopController extends Controller
{

    public function index()
    {      
        $Product = new Product;
        $SaleProducts = $Product->where('quantity','>',0)->where('sale_price','>',0)->take(10)->latest()->get()->toArray(); 
        $FeatureProducts = $Product->where('quantity','>',0)->where('is_featured',true)->take(12)->latest()->get()->toArray(); 
        
        return Inertia::render('Ecomerce/welcome/Welcome',compact('SaleProducts','FeatureProducts'));
    }

    public function GetFeaturedProducts(Product $product)
    {
        $FeatureProduct = $product->latest()->where('is_featured',true)->take(8)->get();
 
        return response()->json($FeatureProduct);
        
    }

    public function shop(Request $request, Product $Product)
    {   
        $SaleProducts = $Product->where('sale_price','>',0)->latest()->take(12)->get(); 
         
       

        if(isset($request->MinPrice) && isset($request->MaxPrice)){
            $Product = $Product->whereBetween('regular_price', [$request->MinPrice, $request->MaxPrice]);
            $Product = $Product->orWhereBetween('sale_price', [$request->MinPrice, $request->MaxPrice]);
        }
        
        $ProductsPagination = $Product->where('quantity','>',0)->latest()->paginate(20)->toArray(); 
        $Products = $ProductsPagination['data'];
        $links = $ProductsPagination['links'];  
        
        return Inertia::render('Ecomerce/shop/Shop',compact('Products','links','SaleProducts'));
    }

    public function GetCategoryProducts(Category $category,Product $product,$slug)
    {   

        $CategorizedProducts = $category->where('slug',$slug)->firstOrFail()->products->toArray();

        $Products = $CategorizedProducts;
        $links = [];     

        return Inertia::render('Ecomerce/shop/Shop', compact('Products','links'));        

    }    
    
    public function GetProductsDetails(Product $Product,$slug)
    {   
 
        $Product = $Product->where('slug',$slug)->firstOrFail();
         
        $ProductAttributes =  $Product->ProductAttributes
            ->map(function($ProductAttribute){

                return [
                        "id" => $ProductAttribute->id,
                        "AttributeName" => $ProductAttribute->AttributeValue->Attribute->name,
                        "AttributeValue" => $ProductAttribute->AttributeValue->name,
                        "value" => "null",
                        "quantity" =>  $ProductAttribute->quantity,
                        "sku" => $ProductAttribute->sku,
                        "price" => $ProductAttribute->price,
                        "sale_price" => $ProductAttribute->sale_price,
                        "weight" => $ProductAttribute->weight,
                ];
                
        });   
        $Product['Attributes'] = $ProductAttributes->groupBy('AttributeName')->toArray();

        return Inertia::render('Ecomerce/shop-details/ShopDetails', compact('Product'));        
 
    }     
    
}
