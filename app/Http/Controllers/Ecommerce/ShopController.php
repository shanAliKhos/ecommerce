<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;

class ShopController extends Controller
{

    public function Home()
    {
        $Product = new Product;
        $SaleProducts = $Product->where('quantity','>',0)->where('sale_price','>',0)->take(10)->latest()->get()->toArray(); 
        $FeatureProducts = $Product->where('quantity','>',0)->where('regular_price','>',0)->where('sale_price','>',0)->where('is_featured',true)->take(12)->latest()->get()->toArray(); 
        return Inertia::render('Ecomerce/welcome/Welcome',compact('SaleProducts','FeatureProducts'));        
    }

    public function index(Request $request, Product $Product)
    {      
        // if(isset($request->MinPrice) && isset($request->MaxPrice)){
        //     $Product = $Product->whereBetween('regular_price', [$request->MinPrice, $request->MaxPrice]);
        //     $Product = $Product->orWhereBetween('sale_price', [$request->MinPrice, $request->MaxPrice]);
        // }
        $Products = $Product->where('quantity','>',0)->where('regular_price','>',0)->where('sale_price','>',0)->latest()->paginate(20)->toArray(); 

       
       
        // $SaleProducts = $Product->where('sale_price','>',0)->latest()->take(12)->get(); 
        return Inertia::render('Ecomerce/shop/Shop',compact('Products'));
    }

    public function GetFeaturedProducts(Product $product)
    {
        $FeatureProduct = $product->latest()->where('is_featured',true)->take(8)->get();
 
        return response()->json($FeatureProduct);
        
    }

    public function shop()
    {   
      
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
         
        $Product->load('images');
        
        // $ProductAttributes =  $Product->ProductAttributes
        //     ->map(function($ProductAttribute){

        //         return [
        //                 "id" => $ProductAttribute->id,
        //                 "AttributeName" => $ProductAttribute->AttributeValue->Attribute->name,
        //                 "AttributeValue" => $ProductAttribute->AttributeValue->name,
        //                 "value" => "null",
        //                 "quantity" =>  $ProductAttribute->quantity,
        //                 "sku" => $ProductAttribute->sku,
        //                 "price" => $ProductAttribute->price,
        //                 "sale_price" => $ProductAttribute->sale_price,
        //                 "weight" => $ProductAttribute->weight,
        //         ];
                
        // });   
        // $Product['Attributes'] = $ProductAttributes->groupBy('AttributeName')->toArray();

        return Inertia::render('Ecomerce/shop-details/ShopDetails', compact('Product'));        
 
    }     
    
}
