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
      
    public function index()
    {
        $Brand = new Brand;
        $Brands = $Brand->all(); 

        return Inertia::render('Admin/brand/Index',compact('Brands'));
 
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create()
    { 
        return Inertia::render('Admin/brand/Create');
 
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Brand $brand,Request $request)
    {  
        $this->validate($request, [
            'name' => 'required|unique:brands|min:2|max:255', 
            'logo '=> 'mimes:jpg,jpeg,png|max:1000'
        ]);        
        if ($request->hasFile('logo')) {
            $path = $request->file('logo')->store('public/Brands');  
       
            $brand->logo = $path;
        }    
        $brand->name = $request->name; 
        $brand->slug = Str::slug($request->name); 
        $brand->save();
                
        return back()->with('success', 'success ! brand created');
 
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(Brand $brand)
    {  
        return Inertia::render('Admin/brand/Edit',compact('brand'));
 
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Brand $brand,Request $request)
    { 
        $this->validate($request, [
            'name'      =>  'required|unique:brands,name,' .$brand->id, 
            // 'logo'     =>  'mimes:jpg,jpeg,png|max:1000'
        ]);        

        $OldPath = $brand->logo;
        
        if($request->hasFile('logo')){

            $NewPath = $request->file('logo')->store('public/Brands');  
            if(Storage::exists($OldPath)){
                Storage::delete($OldPath);
            }  
            $brand->update(['logo' => $NewPath]);               

        }else{
            
            if(empty($request->logo)){
                if(Storage::exists($brand->logo)){
                    Storage::delete($brand->logo);
                }                  
            }
        }

        $brand->update([
            'name' => $request->name, 
            'slug' => Str::slug($request->name),
        ]);        
            
        return back()->with('success','success ! brand updated');

    }

    /**
     * @param $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Brand $brand)
    { 
        $image = $brand->logo;
        if(Storage::exists($image)){
            Storage::delete($image);
        } 

        try { 
            $brand = $brand->delete();
            return back()->with('success','brand removed');
        } catch (\Throwable $th) {
             
            return back()->with('error','OPP s could not delete ');
        }
 
        
    }
}
