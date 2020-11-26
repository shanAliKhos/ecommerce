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
        $Products = $Product->with('categories','brand','images')->latest()->paginate(20); 
        return Inertia::render('Admin/products/Index',compact('Products'));
    }

    public function create(Brand $brand ,Category $category,Attribute $attribute)
    {
        $Attributes = $attribute->with('AttributeValues')->get();
        
        $Brands = $brand->all(['*'],'name','asc');
        $Categories = $category->all(['*'],'name','asc'); 
        return Inertia::render('Admin/products/Create',compact('Categories', 'Brands','Attributes'));
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
            $NewImage = $request->file('image')->store('public/Products');  
            $Product->image = $NewImage;
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

            $NewProductAttributes = json_decode($request->Attributes,true);
            $NewProductAttributeValues = json_decode($request->AttributeValues,true);

            
             
            if(!empty($NewProductAttributes)){
                
                $Product->attributes()->sync(array_column($NewProductAttributes,'id'));

                 
                foreach ($Product->variations as $attrkey => $variation) { 

                    $variation->VariantOptions()->sync(array_column($NewProductAttributeValues[$attrkey],'id'));

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

        $Product->variations->load('VariantOptions');

        $Product->variations->map(function($variation){
            $variation->Attribute->load('AttributeValues');
        });
 
  
        $Attributes = $attribute->with('AttributeValues')->get();
 
        $Brands = $brand->all(['*'],'name','asc');
        $Categories = $category->all(['*'],'name','asc');  
        $__csrf_token = csrf_token();    

        return Inertia::render('Admin/products/Edit',compact('Categories', 'Brands','Product','Attributes','__csrf_token')); 
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
            
            $NewFile = $request->file('image')->store('public/Products');  
            
            if(Storage::exists($Product->image)){

                Storage::delete($Product->image);

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

            $UpdateProductAttributes = json_decode($request->Attributes,true);
            $UpdateProductAttributeValues = json_decode($request->AttributeValues,true);  

            if($UpdateProductAttributes){
                
                $Product->attributes()->sync(array_column($UpdateProductAttributes,'id'));
                
                if($UpdateProductAttributeValues){
                    
                    $this->validate($request,[
                        'AttributeValues.*' => 'required',
                    ]);
                    $CountSku = 0 ;    
                    foreach ($Product->variations as $attrkey => $variation) { 
                        $variation->VariantOptions()->sync(array_column($UpdateProductAttributeValues[$attrkey],'id'));
                        $CountSku += count($UpdateProductAttributeValues[$attrkey]);

                        // $Product->Skuds->create([
                        //     'product_id' => $Product->id,
                        //     'sku' => '',
                        //     'price' => '',
                        //     'qty' => '',
                        // ]);                        

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
