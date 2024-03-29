<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\ProductImage;
use App\Models\Attribute;
use App\Models\SkuValue;

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
        $Products = $Product->with('categories', 'brand', 'images')->OrderBy('updated_at','desc')->latest()->paginate(8);

        return Inertia::render('Admin/products/Index', compact('Products'));
    }

    public function create(Brand $brand, Category $category, Attribute $attribute)
    {
        $attributes = $attribute->with('attribute_values')->get();
        $brands = $brand->all(['*'], 'name', 'asc');
        $categories = $category->all(['*'], 'name', 'asc');
        return Inertia::render('Admin/products/Create', compact('categories', 'brands', 'attributes'));
    }

    public function store(Request $request, Product $Product)
    {
     
    
        $this->validate($request, [
            "name" => 'required|string|min:2|max:255',
            "sku" => ($request->is_variable>0)?'required':'|string|min:2|max:255',
            "regular_price" => 'required|numeric|min:0.1|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "sale_price" => 'numeric|min:0|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "quantity" => 'required|numeric|min:1|max:100',
            "weight" => 'numeric|max:100', 
            "is_active" => 'required|boolean',
            "is_variable" => 'required|boolean',
            "is_featured" => 'required|boolean',             
        ]);
 
 
        try {
           
            if ($request->hasFile('image')) {
                $this->validate($request, [
                    "image" => 'required|mimes:jpg,jpeg,png|max:100',
                ]);
                $NewImage = $request->file('image')->store('Products', 's3');
            }

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
 
            $Product->categories()->sync(data_get(json_decode($request->categories, true), '*.id'));

            $request->Attributes = json_decode($request->Attributes, true);
            if ($request->is_variable && !empty($request->Attributes)) {

                $Product->attributes()->sync(data_get($request->Attributes, '*.id'));

                $ProductAttributesValues = data_get($request->Attributes, '*.product_attribute_values');

                if (!empty(Arr::collapse($ProductAttributesValues))) {

                    foreach ($Product->variations as $attrkey => $variation) {
                        $variation->attribute_options()->sync(data_get($ProductAttributesValues[$attrkey], '*.id'));
                    }

                    $AttributeOptions = Arr::pluck($ProductAttributesValues, '*');
                    $AttributeOptionsStart = array_shift($AttributeOptions);

                    $SkudsOptions = collect($AttributeOptionsStart)->crossJoin(...$AttributeOptions);
                 
                    foreach ($SkudsOptions as $SkudsOptionkey => $SkudsOption) {
                        data_fill($SkudsOption, '*.skuName', preg_replace_array('/[&-=_]+/', ['#' . $SkudsOptionkey . $Product->id . ($SkudsOptionkey + 1) . '', '-'], Arr::query(data_get($SkudsOption, '*.name'))));
                        $SkudsOptions[$SkudsOptionkey] = $SkudsOption;
                    }
                    $Product->Skuds()->sync(data_get($SkudsOptions, '*.*.skuName'));

                    $vartionsOptions = data_get($Product->variations->load('variant_options')->toArray(), '*.variant_options');
                    $vartionsOptionsShift = array_shift($vartionsOptions);
                    $skuOptions = collect($vartionsOptionsShift)->crossJoin(...$vartionsOptions);
                    foreach ($Product->Skus as $Skukey => $Sku) {

                        $Sku->regular_price = $request->regular_price;
                        $Sku->sale_price = $request->sale_price;
                        $Sku->weight = $request->weight;
                        $Sku->quantity = $Product->quantity;

                        $Sku->save();

                        foreach ($skuOptions[$Skukey] as $skuOptionKey => $skuOption) {
                            $skuOptions_id_array[] = [
                                'sku_id' => $Sku->id,
                                'variant_id' => $skuOption['variant_id'],
                                'variant_option_id' => $skuOption['id'],
                            ];
                        }
                    }
                    $Product->skuds_options()->sync($skuOptions_id_array);
                }
            } 
            
                  
            return redirect()->route('admin.product.edit',$Product->id)->with('success', 'Product Created');
        } catch (\Throwable $th) {
            return back()->with('error', 'OPPS fail to store in database, Please contact support team ');
        }
    }

    public function show(Product $Product)
    {
        dd($Product);
    }

    public function edit(Product $Product, Brand $brand, Category $category, Attribute $attribute)
    {
        $Product->Skus->map(function ($sku) {
            return $sku->skus_options->map(function ($skudsOption) {
                return $skudsOption->variant_option->attributes_option->attribute;
            });
        });

        $Product->load('categories', 'brand', 'images');


        $product_attributes = $Product->variations->map(function ($variation) {
            return $variation->Attribute->load('attribute_values');
        })->toArray();

        $product_attribute_values = $Product->variations->map(function ($variation) {
            return $variation->attribute_options;
        })->toArray();

        foreach ($product_attributes as $key => $product_attribute) {
            $product_attributes[$key]['product_attribute_values'] = $product_attribute_values[$key];
        }


        $Product = $Product->toArray();

        $Product['variations'] = $product_attributes;

        $attributes = $attribute->with('attribute_values')->get();

        $brands = $brand->all(['*'], 'name', 'asc');
        $categories = $category->all(['*'], 'name', 'asc');
        $__csrf_token = csrf_token();

        return Inertia::render('Admin/products/Edit', compact('categories', 'brands', 'Product', 'attributes', '__csrf_token'));
    }

    public function update(Request $request, Product $Product)
    {
 
        
        $this->validate($request, [
            "name" => 'required|string|min:2|max:255',
            "sku" => ($request->is_variable>0)?'required':'|string|min:2|max:255',
            "regular_price" => 'required|numeric|min:0.1|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "sale_price" => 'numeric|min:0|max:99999999|regex:/^\d+(\.\d{1,2})?$/',
            "quantity" => 'required|numeric|min:1|max:100',
            "weight" => 'numeric|max:100',
            "is_active" => 'required|boolean',
            "is_featured" => 'required|boolean',
        ]);
        $NewFile = null;
        if ($request->hasFile('image')) {
            $this->validate($request, [
                "image" => 'required|mimes:jpg,jpeg,png|max:100',
            ]);
            $NewFile = $request->file('image')->store('Products', 's3');
            try {
                if (Storage::disk('s3')->exists($Product->image)) {
                    Storage::disk('s3')->delete($Product->image);
                }
            } catch (\Throwable $th) {
            } 
            $Product->update(['image' => $NewFile]);
        } 
        if (empty($request->image) && $Product->image) {
            try {
                if (Storage::disk('s3')->exists($Product->image)) {
                    Storage::disk('s3')->delete($Product->image);
                } 
            } catch (\Throwable $th) {

            }             
            $Product->update(['image' => null]);
        }

        $Product->update([ 
            'brand_id'=>$request->brand_id,
            'name'=>$request->name, 
            'brand_id' => $request->brand_id, 
            'name' => $request->name,
            'description' => $request->description,
            'is_featured' => $request->is_featured,
            'is_active' => $request->is_active,
            'sku'=>$request->sku,
            'quantity'=>$request->quantity,
            'weight'=>$request->weight,
            'regular_price'=>$request->regular_price,
            'sale_price'=>$request->sale_price,            
        ]);
        
        $Product->categories()->sync(data_get(json_decode($request->categories, true), '*.id')); // syncing Product categories
 
        $request->Attributes = json_decode($request->Attributes, true);
        if ($request->is_variable && !empty($request->Attributes)) {
            $Product->attributes()->sync(data_get($request->Attributes, '*.id')); // syncing variations table with product attributes 
            
            $ProductAttributesValues = data_get($request->Attributes, '*.product_attribute_values');

            if (!empty(Arr::collapse($ProductAttributesValues))) {

                foreach ($Product->variations as $attrkey => $variation) {
                    $variation->attribute_options()->sync(data_get($ProductAttributesValues[$attrkey], '*.id')); // syncing variations options table with attribute values 
                }
                $AttributeOptions = Arr::pluck($ProductAttributesValues, '*');
                $AttributeOptionsStart = array_shift($AttributeOptions);
                $SkudsOptions = collect($AttributeOptionsStart)->crossJoin(...$AttributeOptions);
 
                foreach ($SkudsOptions as $SkudsOptionkey => $SkudsOption) {
                    data_fill($SkudsOption, '*.skuName', preg_replace_array('/[&-=_]+/', ['#' . $SkudsOptionkey . $Product->id . ($SkudsOptionkey + 1) . '-', '-', '-'], Arr::query(data_get($SkudsOption, '*.name'))));
                    $SkudsOptions[$SkudsOptionkey] = $SkudsOption;
                }

                $Product->Skuds()->sync(data_get($SkudsOptions, '*.*.skuName'));
 
                $vartionsOptions = data_get($Product->variations->load('variant_options')->toArray(), '*.variant_options');
                $vartionsOptionsShift = array_shift($vartionsOptions);
                $skuOptions = collect($vartionsOptionsShift)->crossJoin(...$vartionsOptions);
                foreach ($Product->Skus as $Skukey => $Sku) {  
                    
                    $ProductSku = isset(json_decode($request->ProductSkus, true)[$Skukey])?json_decode($request->ProductSkus, true)[$Skukey]:null;  
                    $Sku->regular_price =  isset($ProductSku) ? empty($ProductSku['regular_price'])?0:$ProductSku['regular_price'] : $request->regular_price;
                    $Sku->sale_price =  isset($ProductSku) ? empty($ProductSku['sale_price'])?0:$ProductSku['sale_price']: $request->sale_price;
                    $Sku->weight =  isset($ProductSku) ? empty($ProductSku['weight'])?0:$ProductSku['weight'] : $request->weight;
                    $Sku->quantity = isset($ProductSku) ? empty($ProductSku['quantity'])?0:$ProductSku['quantity'] : $request->quantity;

                    $Sku->save();

                    foreach ($skuOptions[$Skukey] as $skuOptionKey => $skuOption) {
                        $skuOptions_id_array[] = [
                            'sku_id' => $Sku->id,
                            'variant_id' => $skuOption['variant_id'],
                            'variant_option_id' => $skuOption['id'],
                        ];
                    }
                }
                // dd($skuOptions_id_array);
                $Product->skuds_options()->sync($skuOptions_id_array);
            }
        } else {
            $Product->attributes()->sync([]);
            foreach ($Product->variations as $attrkey => $variation) {
                $variation->attribute_options()->sync([]);
            }
            $Product->Skuds()->sync([]); 
        }

        return back()->with('success', 'Product updated');
    }

    public function destroy(Product $Product)
    {
        return back()->with("can't delete");
    }
}
