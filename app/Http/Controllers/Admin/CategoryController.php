<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;

use Illuminate\Http\Request; 

use Illuminate\Support\Facades\Storage;
use App\Models\Category; 
use Inertia\Inertia;

 
class CategoryController extends Controller
{ 
    public function __construct()
    {
        $this->middleware('admin');  
    }    

 
    public function index()
    {
        $Category = new Category; 
        return Inertia::render('Admin/category/Index',[
            'categories'=>$Category->paginate(8),
            'CategoriesOptions'=>$Category->where(['is_active'=>true,'menu'=>true])->get(),
        ]);
 
        // return Inertia::render('Admin/category/Index',compact('categories'));
    }
 
    public function create()
    {
        // $Category = new Category;
        // $Categories = $Category->where(['is_active'=>true,'menu'=>true])->get();   
        // return Inertia::render('Admin/category/Create',compact('Categories'));
    }
 
    public function store(Request $request)
    {

        $this->validate($request,['name'=>'required|unique:categories|min:2|max:255']); 
        // $this->validate($request,['image'=>'mimes:jpg,jpeg,png|max:100']);  
        
        $Category = new Category; 
        if ($request->hasFile('image')) {
            $this->validate($request,['image'=>'mimes:jpg,jpeg,png|max:100']);  
            $path = $request->file('image')->store('public/Categories');
            $Category->image = $path;
        }    

        $Category->name = $request->name; 
        $Category->slug = Str::slug($request->name);
        $Category->description = $request->description;
        $Category->parent_id = $request->parent_id; 
        $Category->is_featured = $request->is_featured?1:0; 
        $Category->menu = $request->menu?1:0; 
        $Category->is_active = $request->is_active?1:0; 
        $Category->save();

        return redirect()->route('admin.category.index')->with('success','success ! Category Created');
        
    }
 
    public function edit(Category $Category)
    {     
        // $Categories = $Category->where(['is_active'=>true,'menu'=>true])->where('id',!$Category->id)->with('parent')->get();      
        // return Inertia::render('Admin/category/Edit',compact('Categories', 'Category'));
        return Inertia::render('Admin/category/Index',[
            'category'=>$Category->load('parent'),
            'CategoriesOptions'=>$Category->where(['is_active'=>true,'menu'=>true])->where('id', '!=' ,$Category->id)->get(),
            'categories'=>$Category->paginate(8),
        ]);        
    }  

    public function update(Category $category, Request $request)
    {      
        $this->validate($request,[
            'name'=> 'required|min:2|max:255|unique:categories,name,' .$category->id
        ]); 
        if($request->hasFile('image')){
            $this->validate($request,['image'=>'mimes:jpg,jpeg,png|max:1000']); 
            $OldPath = $category->image;        
            $NewPath = $request->file('image')->store('public/Categories');  
            if(Storage::disk('public')->exists($OldPath)){
                Storage::disk('public')->delete($OldPath);
            }  
            $category->update(['image' => $NewPath]);               

        }
            
        if(empty($request->image && $category->image)){
            if(Storage::disk('public')->exists($category->image)){
                Storage::disk('public')->delete($category->image);
            }                  
            $category->update(['image' => null]);               

        }
    
 
        $category->update([
            'name' => $request->name, 
            'slug' => Str::slug($request->name),
            'description' => $request->description, 
            'parent_id' => $request->parent_id, 
            'is_featured' => $request->is_featured?1:0, 
            'is_active' => $request->is_active?1:0, 
            'menu' => $request->menu?1:0, 
        ]);                

        return redirect()->route('admin.category.index')->with('success','success ! Category updated'); 

    }
 
    public function destroy(Category $category)
    {
        $image = $category->logo;
        if(Storage::disk('public')->exists($image)){
            Storage::disk('public')->delete($image);
        } 

        try { 
            $category->delete();
            return back()->with('success','category deleted');
        } catch (\Throwable $th) {
             
            return back()->with('error','OPP s could not delete ');
        }
         
    }
}
