<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\Product; 

use App\Models\Slider;
use App\Models\SaleSlider;
use Illuminate\Http\Request;

class SaleSliderController extends Controller
{
    protected $Model;
    
    public function __construct(Slider $slider)
    {
        $this->middleware('admin');  
        $this->Model = $slider; 

    }     
 
    public function edit(Product $product)
    {
        return Inertia::render('Admin/sliders/SaleSlider',[
            'slider'=> $this->Model->where('name','sale')->with('sale_slider')->first(),
            'sale_products'=> $product->where('sale_price','>',0)->get(),
        ]);                 
    }
 
    public function update(Request $request)
    {  
        $SaleSlider = $this->Model->where('name','sale')->first();

        if(!$SaleSlider){
            $SaleSlider = $this->Model->create([
                'name' => 'sale',
            ]); 
        }
        $SaleSlider->sale_slider()->sync(array_column(json_decode($request->SaleProducts,true),'id'));

        return back()->with('success','Sale slider updated');

    }
 
 
}
