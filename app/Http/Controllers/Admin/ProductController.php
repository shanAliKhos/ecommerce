<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Product; 
use App\Models\Brand; 
use App\Models\Category; 
use App\Models\ProductImage; 
use App\Models\Attribute; 
use Inertia\Inertia;
use Illuminate\Support\Str;

 
class ProductController extends Controller
{
   

    public function index()
    {
        $Product = new Product;
        $ProductsPaginate = $Product->with('categories','brand','images')->latest()->paginate(20)->toArray();
        $Products = $ProductsPaginate['data'];
        $Links = $ProductsPaginate['links'];  
        return Inertia::render('Admin/products/Index',compact('Products','Links'));
    }

    public function create(Brand $brand ,Category $category)
    {
        $Brands = $brand->listBrands('name', 'asc');
        $Categories = $category->listCategories('name', 'asc'); 
        return Inertia::render('Admin/products/Create',compact('Categories', 'Brands'));
    }

    public function store(Request $request)
    {   
        $this->validate($request,[ 
            'name'      =>  'required|max:255',
            'sku'       =>  'required',
            'brand'  =>  'required',
            'regular_price'     =>  'required|regex:/^\d+(\.\d{1,2})?$/', 
            'quantity'  =>  'required|numeric',            
        ]);  

        $Product = new Product;
 
        $Product = $Product->create([
            'brand_id'=>$request->brand['id'],
            'name'=>$request->name,
            'slug'=>Str::slug($request->name),
            'description'=>$request->description,
            'image'=>null,
            'is_featured'=>$request->is_featured,
            'is_active'=>$request->is_active,
            'sku'=>$request->sku,
            'quantity'=>$request->quantity,
            'weight'=>$request->weight,
            'regular_price'=>$request->regular_price,
            'sale_price'=>$request->sale_price,
        ]);

        if ($request->has('categories')) {
            $Product->categories()->sync(array_column($request->categories,'id'));
        }     
      
        return back()->with('success', 'Successfull ! Product Created');
  
    }

    public function show(Product $Product)
    {
        dd($Product);
    }

    public function edit(Product $Product,Brand $brand ,Category $category, Attribute $attribute)
    {   
        $Product->categories;
        $Product->brand; 
        $Product->images; 
        // $Product->ProductAttributes->load('ProductAttributeValues'); 
        $Product->ProductAttributes->map(function($ProductAttribute){
            $ProductAttribute->attribute->load('values');
            $ProductAttribute->ProductAttributeValues->map(function($ProductAttributeValue){
                $ProductAttributeValue->AttributeValues;
            });
        });         
        
         
        $Attributes = $attribute->with('values')->get();

        $Brands = $brand->listBrands('name', 'asc');
        $Categories = $category->listCategories('name', 'asc');                 
        $__csrf_token = csrf_token();                 

        return Inertia::render('Admin/products/Edit',compact('Categories', 'Brands','Product','Attributes','__csrf_token')); 
    }

    public function update(Request $request, Product $Product)
    {
        
        $this->validate($request,[ 
            'name'      =>  'required|max:255',
            'sku'       =>  'required',
            'brand'  =>  'required',
            'regular_price'     =>  'required|regex:/^\d+(\.\d{1,2})?$/|min:1', 
            'quantity'  =>  'required|numeric|min:1',            
        ]);  
            
     

        $Product->update([
            'brand_id'=>$request->brand['id'],
            'name'=>$request->name,
            'description'=>$request->description,
            'image'=>null,
            'is_featured'=>$request->is_featured,
            'is_active'=>$request->is_active,
            'sku'=>$request->sku,
            'quantity'=>$request->quantity,
            'weight'=>$request->weight,
            'regular_price'=>$request->regular_price,
            'sale_price'=>$request->sale_price,
        ]);

        if ($request->has('categories')) {
            $Product->categories()->sync(array_column($request->categories,'id'));
        }     
              
        return back()->with('success', 'Successfull ! Product updated');


    } 
    public function destroy(Product $Product)
    {
        //
    }    
}
