<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

use App\Models\Slider; 
use App\Models\Product;
use App\Models\HeroSlider;
use Illuminate\Http\Request;

class HeroSliderController extends Controller
{
    public function __construct(Slider $slider)
    {
        $this->middleware('admin');  
        $this->Model = $slider; 

    }     
 
    public function index(Product $product)
    { 
        $HeroSlider = $this->Model->where('name','hero')->with('hero_slider')->first();
        
        if(!$HeroSlider){ 
            $HeroSlider = $this->Model->create([
                'name' => 'hero',
            ]);     
        } 

        return Inertia::render('Admin/sliders/HeroSlider',[
            'slider'=> $HeroSlider, 
        ]);                 
    }

    public function store(Request $request,HeroSlider $HeroSliderModel)
    {   
        $this->validate($request,[
            "title" => 'required|string|min:3|max:255',
            "image" => 'required|mimes:jpg,jpeg,png|max:100',            
            "button_url" => 'required|url',
            "button_title" => 'required|string|min:2|max:255',
        ]);
        $HeroSlider = $this->Model->where('name','hero')->first();
 
        $HeroSliderModel->create([ 
            "slider_id" => $HeroSlider->id,
            "title" => $request->title,
            "button_url" => $request->title,
            "button_title" => $request->title,
            "image" => 'sadasdasdasd',
        ]);  

        return back()->with('success','hero slide created');

    }    

    public function edit(Product $product)
    { 
        return Inertia::render('Admin/sliders/HeroSlider',[
            // 'slider'=> $this->Model->where('name','hero')->first(),
            // 'trending_products'=> $product->where('quantity','>',0)->where('regular_price','>',0)->where('is_featured',true)->get(),
        ]);                 
    }
 
    // public function update(Request $request)
    // {  
    //     $HeroSlider = $this->Model->where('name','hero')->first();
        
    //     if(!$HeroSlider){
    //         $HeroSlider = $this->Model->create([
    //             'name' => 'hero',
    //         ]); 
    //     }
                
    //     dd($request->all(),$HeroSlider->hero_slider);
    //     // $HeroSlider->hero_slider()->sync(array_column(json_decode($request->TrendingProducts,true),'id'));

    //     // return back()->with('success','Trending slider updated');

    // }
}
