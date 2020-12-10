<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Product; 
use App\Models\Brand; 
use App\Models\Category; 
use App\Models\ProductImage; 
use App\Models\Attribute; 

use App\Models\Variant; 

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

 
class ProductController extends Controller
{
   

    public function index()
    {
        $Product = new Product;
        $Products = $Product->with('categories','brand','images')->latest()->paginate(8); 
    
        return Inertia::render('Admin/products/Index',compact('Products'));
    }

    public function create(Brand $brand ,Category $category,Attribute $attribute)
    {
        $attributes = $attribute->with('attribute_values')->get();
        $brands = $brand->all(['*'],'name','asc');
        $categories = $category->all(['*'],'name','asc');  
        return Inertia::render('Admin/products/Create',compact('categories', 'brands','attributes'));
    }

    public function store(Request $request,Product $Product)
    {       
 
        $this->validate($request,[ 
            "name" => 'required|string|min:2|max:255',
            "sku" => 'required|string|min:2|max:255',
            // "brand" => null
            // "categories" => []
            "regular_price" => 'required|numeric|min:0.1|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "sale_price" => 'numeric|min:0|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "quantity" => 'required|numeric|min:1|max:100',
            "weight" => 'numeric|max:100', 
            "is_active" => 'required|boolean',
            "is_variable" => 'required|boolean',
            "is_featured" => 'required|boolean', 
        ]);  
 
        if ($request->hasFile('image')) {
            $this->validate($request,[  
                "image" => 'required|mimes:jpg,jpeg,png|max:100',   
            ]);              
            
            $NewImage = $request->file('image')->store('Products','public');   

        }    
              
        try {

            $Product = $Product->create([
                'brand_id'=>$request->brand_id,
                'name'=>$request->name,
                'slug'=>Str::slug($request->name),
                'description'=>$request->description,
                'image'=> isset($NewImage)?$NewImage:null,
                'is_featured'=>$request->is_featured,
                'is_active'=>$request->is_active,
                'sku'=>$request->sku,
                'quantity'=>$request->quantity,
                'weight'=>$request->weight,
                'regular_price'=>$request->regular_price,
                'sale_price'=>$request->sale_price,
            ]);

        } catch (\Throwable $th) {
             
            return back()->with('error','OPPS fail to store in database, Please contact support team ');
        }       

        $ProductCategories = json_decode($request->categories,true);
    
        if(!empty($ProductCategories)){
            $Product->categories()->sync(array_column($ProductCategories,'id'));
        }
        
        if($request->is_variable){ 
 
            $ProductAttributes = json_decode($request->Attributes,true); 
            
            if(!empty($ProductAttributes)){
                
                $Product->attributes()->sync(array_column($ProductAttributes,'id'));
                 
                $AttributeValues = array_column($ProductAttributes,'product_attribute_values');
                 
                if($AttributeValues){
                 
                    $CountSku = 0 ;    
                    foreach ($Product->variations as $attrkey => $variation) { 

                        $variation->variant_options()->sync(array_column($AttributeValues[$attrkey],'id'));
                        $CountSku += count($AttributeValues[$attrkey]);
            
                    }
                    
                    
                }                  
 
 
                 
            }  
        } 
      
        return redirect()->route('admin.product.index')->with('success', 'Successfull ! Product Created');
  
    }

    public function show(Product $Product)
    {
        dd($Product);
    }

    public function edit(Product $Product,Brand $brand ,Category $category, Attribute $attribute)
    {     
        $Product->load('categories','brand','images'); 
        
        $Skuds = $Product->Skuds->map(function($sku){

                    return $sku->skud_options->load('Variants');

                });
 
        $product_attributes = $Product->variations->map(function($variation){
            return $variation->Attribute->load('attribute_values');
        })->toArray();
        
        $product_attribute_values = $Product->variations->map(function($variation){
            return $variation->variant_options;
        })->toArray(); 
  
        foreach ($product_attributes as $key => $product_attribute) {
            $product_attributes[$key]['product_attribute_values'] = $product_attribute_values[$key]; 
        }
        $Product = $Product->toArray();
        $Product['variations'] = $product_attributes;
    
   
        $attributes = $attribute->with('attribute_values')->get();
 
        $Brands = $brand->all(['*'],'name','asc');
        $Categories = $category->all(['*'],'name','asc');  
        $__csrf_token = csrf_token();    
        

        return Inertia::render('Admin/products/Edit',compact('Categories', 'Brands','Product','attributes','__csrf_token')); 
    }

    public function update(Request $request, Product $Product)
    { 
          
        $this->validate($request,[ 
            "name" => 'required|string|min:2|max:255',
            "sku" => 'required|string|min:2|max:255',
            // "brand" => null
            // "categories" => []
            "regular_price" => 'required|numeric|min:0.1|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "sale_price" => 'numeric|min:0|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "quantity" => 'required|numeric|min:1|max:100',
            "weight" => 'numeric|max:100', 
            "is_active" => 'required|boolean',
            "is_featured" => 'required|boolean',             
        ]);  
 
        

        if($request->hasFile('image')){

            $this->validate($request,[ 
                "image" => 'required|mimes:jpg,jpeg,png|max:100',   
            ]);              
            
            $NewFile = $request->file('image')->store('Products','public');  
            try {

                if(Storage::exists($Product->image)){
                    Storage::delete($Product->image);
                }  

            } catch (\Throwable $th) {
                 

            }       
    
            

            $Product->update(['image' => $NewFile]);               
        } 

        if(empty($request->image) && $Product->image){

            if(Storage::exists($Product->image)){
            
                Storage::delete($Product->image);
            
            }          
            
            $Product->update(['image' => null]);
        }        

        $Product->update([
            'brand_id'=>$request->brand_id,
            'name'=>$request->name,
            'description'=>$request->description,
            'is_featured'=>$request->is_featured,
            'is_active'=>$request->is_active,
            'sku'=>$request->sku,
            'quantity'=>$request->quantity,
            'weight'=>$request->weight,
            'regular_price'=>$request->regular_price,
            'sale_price'=>$request->sale_price,
        ]);

        
        $ProductCategories = json_decode($request->categories,true);
        
        if(!empty($ProductCategories)){

            $Product->categories()->sync(array_column($ProductCategories,'id'));

        }else{

            if($Product->categories()){ 

                $Product->categories()->sync([]);

            }
        }


        if($request->is_variable){ 

       
            $ProductAttributes = json_decode($request->Attributes,true);
             
            if($ProductAttributes){
                
                $Product->attributes()->sync(array_column($ProductAttributes,'id'));
                
                $ProductAttributesValues = array_column($ProductAttributes,'product_attribute_values');
                if($ProductAttributesValues){
                     
                    $CountSku = 0 ;    
                    foreach ($Product->variations as $attrkey => $variation) { 
                        $variation->variant_options()->sync(array_column($ProductAttributesValues[$attrkey],'id'));
                        $CountSku += count($ProductAttributesValues[$attrkey]);   

                    }
                    
                    
                } 
 

                

            }else{

                $Product->attributes()->sync([]);

            }
       
        }else{
            $Product->attributes()->sync([]);
        }
 

              
        return back()->with('success', 'Successfull ! Product updated');


    } 

    public function destroy(Product $Product)
    {
        //
    }    
}
