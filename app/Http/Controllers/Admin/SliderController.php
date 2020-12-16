<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use App\Models\SaleSlider;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;


class SliderController extends Controller
{ 
    protected $Model;
    
    public function __construct(Slider $slider)
    {
        $this->Model = $slider; 

        $this->middleware('admin');  
    }     

    public function TrendingSlider(Slider $slider,Product $product)
    {   
        return Inertia::render('Admin/sliders/TrendingSlider',[
            'slider'=> $this->Model->where('name','trending')->with('trending_slider')->first(),
            'trending_products'=>$product->where('quantity','>',0)->where('regular_price','>',0)->where('is_featured',true)->get(),
        ]); 
    }
 
    public function TrendingSliderStore(Request $request,Slider $slider)
    { 
        $TrendingSlider = $this->Model->where('name','trending')->first();

        if(!$TrendingSlider){
            $TrendingSlider = $this->Model->create([
                'name' => 'trending',
            ]); 
        }
        $TrendingSlider->trending_slider()->sync(array_column(json_decode($request->TrendingProducts,true),'id'));

        return back()->with('success','Trending slider updated');
    }
 
    public function SaleSlider(Product $product)
    {   
        return Inertia::render('Admin/sliders/SaleSlider',[
            'slider'=> $this->Model->where('name','sale')->with('sale_slider')->first(),
            'sale_products'=> $product->where('sale_price','>',0)->get(),
        ]); 
    }
 
    public function SaleSliderStore(Request $request,Slider $slider)
    {    

        $SaleSlider = $slider->where('name','sale')->first();

        if(!$SaleSlider){

            $SaleSlider = $slider->create([
                'name' => 'sale',
            ]); 

        }
        
        $SaleSlider->sale_slider()->sync(array_column(json_decode($request->SaleProducts,true),'id'));

        return back()->with('success','Sale slider updated');
 
    }
 
    public function HeroSlider()
    { 
        return Inertia::render('Admin/sliders/HeroSlider'); 
    }
 
    public function HeroSliderStore(Request $request,Slider $slider)
    { 
        dd($request->all());
    }
 
  
    public function store(Request $request)
    {
        //
    }

 
    public function show(Slider $slider)
    {
        //
    }
 
    public function edit(Slider $slider)
    {
        //
    }

 
    public function update(Request $request, Slider $slider)
    {
        //
    }
 
    public function destroy(Slider $slider)
    {
        //
    }
}
