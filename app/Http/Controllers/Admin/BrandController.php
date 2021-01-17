<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request; 
use App\Models\Brand;  
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str; 

class BrandController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');  
    }    

    public function index()
    {
        $Brand = new Brand; 

        return Inertia::render('Admin/brand/Index',[
            'brands'=> $Brand->paginate(8),
        ]);
 
    }
 
    public function create()
    { 
        // return Inertia::render('Admin/brand/Create');
 
    }
 
    public function store(Brand $brand,Request $request)
    {  
 
 
        $this->validate($request, [
            'name' => 'required|unique:brands|min:2|max:255', 
            'logo '=> 'mimes:jpg,jpeg,png|max:1000'
        ]);        
        if ($request->hasFile('logo')) {

            $path = $request->file('logo')->store('Brands','s3');  
            $brand->logo = $path;
        }    
        $brand->name = $request->name; 
        $brand->slug = Str::slug($request->name); 
        $brand->save();
                
        return redirect()->route('admin.brand.index')->with('success', 'Brand created');
 
    }
 
    public function edit(Brand $brand)
    {  
        return Inertia::render('Admin/brand/Index',[
            'brands'=> $brand->paginate(8),
            'brand'=> $brand,
        ]);        
        // return Inertia::render('Admin/brand/Edit',compact('brand'));
 
    } 
 
    public function update(Brand $brand,Request $request)
    { 
 
        $this->validate($request, [
            'name'      =>  'required|unique:brands,name,' .$brand->id, 
            // 'logo'     =>  'mimes:jpg,jpeg,png|max:1000'
        ]);         
        
        if($request->hasFile('logo')){    
            
            try {
                if(Storage::disk('s3')->exists($brand->logo)){
                    Storage::disk('s3')->delete($brand->logo);
                }                  
            } catch (\Throwable $th) {}      

            $brand->update(['logo' => $request->file('logo')->store('Brands','public')]);               
        } 

        if(empty($request->logo) && $brand->logo){
            try {                
                if(Storage::disk('public')->exists($brand->logo)){
                    Storage::disk('public')->delete($brand->logo);
                }          
            } catch (\Throwable $th) {}      
            $brand->update(['logo' => null]);
        }


        $brand->update([
            'name' => $request->name, 
            'slug' => Str::slug($request->name),
        ]);        
            
        return redirect()->route('admin.brand.index')->with('success', 'brand updated');

        // return back()->with('success','success ! brand updated');

    } 

    public function destroy(Brand $brand)
    { 
        
        try { 
            $image = $brand->logo;
            if(Storage::disk('public')->exists($image)){
                Storage::disk('public')->delete($image);
            } 
            $brand = $brand->delete();
            return back()->with('success','brand removed');
        } catch (\Throwable $th) {
             
            return back()->with('error','OPP s could not delete ');
        }
 
        
    }
}
