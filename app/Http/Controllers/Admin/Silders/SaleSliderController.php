<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Product; 
 
use App\Models\SaleSlider;
use Illuminate\Http\Request;

class SaleSliderController extends Controller
{
 
    public function index(Product $product)
    {
        $ProductsOnSale = $product->where('sale_price','>',0)->get(); 
        return Inertia::render('Admin/sliders/SaleSlider',compact('ProductsOnSale')); 
    }

 
    public function create()
    {
// 

    }
 
    public function store(Request $request)
    {
        
        $products = json_decode($request->SaleProducts,true);

        $SaleSlider= new SaleSlider;
 
        $SaleSlider->products()->sync(array_column($products,'id'));        
    }

 
    public function show(SaleSlider $saleSlider)
    {
        //
    }

 
    public function edit(SaleSlider $saleSlider)
    {
        //
    }
 
    public function update(Request $request, SaleSlider $saleSlider)
    {
        //
    }
 
    public function destroy(SaleSlider $saleSlider)
    {
        //
    }
}
