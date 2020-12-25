<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Slider;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function Home(Slider $slider)
    {
        $Product = new Product;
 
        return Inertia::render('Ecomerce/welcome/Welcome',[
            'SaleSliders'=> $slider->where('name','sale')->with('sale_slider')->first(),
            'FeaturedSliders'=> $slider->where('name','trending')->with('trending_slider')->first(),
            'HeroSliders'=> $slider->where('name','hero')->with('hero_slider')->first(),
        ]);        
    }    
     
    public function index(Request $request, Product $Product)
    {        
        $Products = $Product->where('quantity','>',0)
                    ->where('regular_price','>',0.00)
                    ->orwhere('sale_price','>',0.00)
                    ->latest()->paginate(20);

        return Inertia::render('Ecomerce/shop/Index',compact('Products'));
    }

    public function show(Product $Product,$slug)
    {   
        $Product = $Product->where('slug',$slug)->with('images','categories','brand')->firstOrFail();
        
        $Product->Skus->map(function($sku){
            return $sku->skus_options->map(function($skudsOption){
                return $skudsOption->variant_option->attributes_option->attribute;
            });
        });
   
        $Product->variations->map(function($variation){
            return $variation->load('attribute_options')->Attribute;
        })->toArray();
        
 
        return Inertia::render('Ecomerce/shop/Show', [
            'Product'=> $Product,
            'RelatedProducts'=>$Product->get()->random(10),
        ]);
    }
  
    public function GetCategoryProducts(Category $category,Product $product,$slug)
    {   

        $CategorizedProducts = $category->where('slug',$slug)->firstOrFail()->products->toArray();

        $Products = $CategorizedProducts;
        $links = [];     

        return Inertia::render('Ecomerce/shop/Shop', compact('Products','links'));        

    }    
 
 

}
