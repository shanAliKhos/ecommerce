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
use Illuminate\Support\Arr;
 
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
                'slug'=>Str::slug($request->name).'-'.Str::limit(Str::random(40), 5,rand(1,10000)),
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

        $Product->categories()->sync(data_get(json_decode($request->categories,true), '*.id'));  

        $request->Attributes = json_decode($request->Attributes,true);

        if($request->is_variable && !empty($request->Attributes)){ 
            
            $Product->attributes()->sync(data_get($request->Attributes, '*.id'));
        
            $ProductAttributesValues = data_get($request->Attributes, '*.product_attribute_values');      

            if(!empty(Arr::collapse($ProductAttributesValues))){
                
                $SkuNames = Arr::pluck($ProductAttributesValues, '*.name'); 
                $SkuNamesStart = array_shift($SkuNames);
                $Skuds = collect($SkuNamesStart)->crossJoin(...$SkuNames);
                $SkuString=[];

                foreach ($Skuds as $Skudkey => $Skud) {
                    $SkuString[] = preg_replace_array('/[&-=_]+/', ['#'.$Skudkey.$Product->id.($Skudkey+1).'','-'], Arr::query($Skud));
                }    
                $Product->Skuds()->sync($SkuString);                 

                foreach ($Product->variations as $attrkey => $variation) { 
                    $variation->variant_options()->sync(data_get($ProductAttributesValues[$attrkey],'*.id'));
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
        
        // $Skuds = $Product->Skuds->map(function($sku){

        //             return $sku->skud_options->load('Variants');

        //         });
 
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

                if(Storage::disk('public')->exists($Product->image)){
                    Storage::disk('public')->delete($Product->image);
                }  

            } catch (\Throwable $th) {
                 

            }       
    
            

            $Product->update(['image' => $NewFile]);               
        }

        if(empty($request->image) && $Product->image){

            if(Storage::disk('public')->exists($Product->image)){
            
                Storage::disk('public')->delete($Product->image);
            
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

        $Product->categories()->sync(data_get(json_decode($request->categories,true), '*.id'));

        $request->Attributes = json_decode($request->Attributes,true);
  
        if($request->is_variable && !empty($request->Attributes)){
            
            $Product->attributes()->sync(data_get($request->Attributes, '*.id'));
            $ProductAttributesValues = data_get($request->Attributes, '*.product_attribute_values');
   
            if(!empty(Arr::collapse($ProductAttributesValues))){
                                
                foreach ($Product->variations as $attrkey => $variation) {
                    $variation->variant_options()->sync(data_get($ProductAttributesValues[$attrkey],'*.id'));
                }
 
                $AttributeOptions = Arr::pluck($ProductAttributesValues, '*'); 
                $AttributeOptionsStart = array_shift($AttributeOptions);
                $SkudsOptions = collect($AttributeOptionsStart)->crossJoin(...$AttributeOptions);
 

                $SkuNames=[];
                foreach ($SkudsOptions as $SkudsOptionkey => $SkudsOption) { 
                    // $SkuNames[$SkudsOptionkey] = preg_replace_array('/[&-=_]+/', ['#'.$SkudsOptionkey.$Product->id.($SkudsOptionkey+1).'','-'], Arr::query(data_get($SkudsOption, '*.name'))); 
                    data_fill($SkudsOption, '*.skuName', preg_replace_array('/[&-=_]+/', ['#'.$SkudsOptionkey.$Product->id.($SkudsOptionkey+1).'','-'], Arr::query(data_get($SkudsOption, '*.name'))));
                    $SkudsOptions[$SkudsOptionkey] = $SkudsOption; 
                } 
                $ProductSkus = $Product->Skuds()->sync(data_get($SkudsOptions, '*.*.skuName'));
            } 
            
            foreach ($Product->Skus as $Skukey => $Sku) {
            
                foreach ($SkudsOptions[$Skukey] as $SkudsOptionkey => $SkudsOption) {
                    
                    $Sku->skus_options()->sku_id = $Sku->id;
                    $Sku->skus_options()->variant_id = $Sku->id;
                    $Sku->skus_options()->attribute_id = $SkudsOption->$SkudsOption;

                    dd($SkudsOption);
                }
 
            } 
            
            dd($SkudsOptions);



        } 

        return back()->with('success', 'Successfull ! Product updated');
    } 

    public function destroy(Product $Product)
    {
        return back()->with("can't delete");
    }    
}
