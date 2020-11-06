<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
 
use App\Models\ProductImage;
use App\Models\Product;
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Storage;

class ProductImageController extends Controller
{ 
     
    public function index(Product $Product)
    {
        return response()->json($Product->images);
    }

    public function UploadProductImage(Product $Product ,ProductImage $ProductImage,Request $request)
    {
        $path = $request->file('file')->store('public/Products');
        if(!$Product->image){
            $Product->image = $path;
            $Product->save();
        }
        
        $ProductImage->image = $path;
        $ProductImage->product_id = $Product->id; 
        $ProductImage->save();

        return back()->with('success', 'image uploaded successfully');
   
    }

    public function destroy(ProductImage $ProductImage)
    {
        
        $exists = Storage::exists($ProductImage->image);
        if($exists){
            Storage::delete($ProductImage->image);
        }
        $ProductImage->delete();
        $ProductImage->product->image = null ;
        $ProductImage->product->save();
        return back()->with('success', 'image removed successfully');

    }
}
