<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

use App\Models\Slider;
use App\Models\TrendingSlider;
use App\Models\Product;

use Illuminate\Http\Request;

class TrendingSliderController extends Controller
{
 
    public function __construct(Slider $slider)
    {
        $this->middleware('admin');  
        $this->Model = $slider; 

    }     
 
    public function edit(Product $product)
    {
        return Inertia::render('Admin/sliders/TrendingSlider',[
            'slider'=> $this->Model->where('name','trending')->with('trending_slider')->first(),
            'trending_products'=> $product->where('quantity','>',0)->where('regular_price','>',0)->where('is_featured',true)->get(),
        ]);                 
    }
 
    public function update(Request $request)
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
}
