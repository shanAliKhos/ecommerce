<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\Slider;  
use App\Models\HeroSlider;
use Illuminate\Http\Request;

class HeroSliderController extends Controller
{
    public function __construct(Slider $slider)
    {
        $this->middleware('admin');  
        $this->Model = $slider; 

    }     
 
    public function index()
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
            "button_url" => $request->button_url,
            "button_title" => $request->button_title,
            "image" => $request->file('image')->store('HeroSlider','s3'),
        ]);  

        return back()->with('success','hero slide created');

    }    

    public function edit(HeroSlider $hero)
    {  
 
        return Inertia::render('Admin/sliders/HeroSlider',[
            'slider'=> $hero->slider->load('hero_slider'), 
            'hero_slide'=> $hero, 
        ]);                    
    }
 
    public function update(HeroSlider $hero,Request $request)
    {   
        $this->validate($request,[
            "title" => 'required|string|min:3|max:255',
            "button_url" => 'required|url',
            "button_title" => 'required|string|min:2|max:255',
        ]); 
        
        if($request->hasFile('image')){
            $this->validate($request,[ 
                "image" => 'required|mimes:jpg,jpeg,png|max:100',   
            ]);              
            
            try {
                if(Storage::disk('s3')->exists($hero->image)){
                    Storage::disk('s3')->delete($hero->image);
                }  
            } catch (\Throwable $th) {    }

            $hero->update([
                'image' => $request->file('image')->store('HeroSlider','public')
            ]);               

        } 

        if(empty($request->image) && $hero->image){
            try {                
                if(Storage::disk('public')->exists($hero->image)){                
                    Storage::disk('public')->delete($hero->image);
                }        
            } catch (\Throwable $th) {    }
            $hero->update(['image' => null]);
        }          
        $hero->update([ 
            "title" => $request->title,
            "button_url" => $request->button_url,
            "button_title" => $request->button_title, 
        ]);  
        return redirect()->route('admin.slider.hero.index')->with('success','Hero slide updated');
    }

    public function destroy(HeroSlider $hero)
    {  
        if(Storage::disk('public')->exists($hero->image)){
            Storage::disk('public')->delete($hero->image);
        } 

        try { 
             $hero->delete();
            return back()->with('success','hero slide removed');
        } catch (\Throwable $th) {
             
            return back()->with('error','OPP s could not delete ');
        } 
    }    
}
