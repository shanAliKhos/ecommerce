<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Product; 
 
use App\Models\SaleSlider;
use Illuminate\Http\Request;

class SaleSliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
        $ProductsOnSale = $product->where('sale_price','>',0)->get(); 
        return Inertia::render('Admin/sliders/SaleSlider',compact('ProductsOnSale')); 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
// 

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $products = json_decode($request->SaleProducts,true);

        $SaleSlider= new SaleSlider;

   
 
        $SaleSlider->products()->sync(array_column($products,'id'));        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SaleSlider  $saleSlider
     * @return \Illuminate\Http\Response
     */
    public function show(SaleSlider $saleSlider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SaleSlider  $saleSlider
     * @return \Illuminate\Http\Response
     */
    public function edit(SaleSlider $saleSlider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SaleSlider  $saleSlider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SaleSlider $saleSlider)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SaleSlider  $saleSlider
     * @return \Illuminate\Http\Response
     */
    public function destroy(SaleSlider $saleSlider)
    {
        //
    }
}
