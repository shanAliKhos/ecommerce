<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\Blog;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class BlogController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');  
    }    

    public function index()
    {  
        $Blog = new Blog;

        $blogs = $Blog->with('user')->paginate(8);

        return Inertia::render('Admin/blog/Index',compact('blogs'));
    }
 
    public function create()
    {
        $Category = new Category;
        $categories = $Category->all();
        return Inertia::render('Admin/blog/Create',compact('categories'));
    }

    public function store(Request $request)
    { 
        $this->validate($request,[
            'title'=>'required',
            'body'=>'required',
            'category_id' => 'required',
            "image" => 'required|mimes:jpg,jpeg,png|max:100',   
            "is_active" => 'required|boolean',
            "is_featured" => 'required|boolean',                   
        ]);
         
        $Blog = new Blog;
        
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Blogs','public');  
            $Blog->image = $path ;
        }             
        
        $Blog->title = $request->title;
        $Blog->body = json_encode($request->body);
        $Blog->user_id = Auth()->user()->id;
        $Blog->is_featured = $request->is_featured;
        $Blog->is_active = $request->is_active;
        $Blog->category_id = $request->category_id;
        $Blog->save();
   
        

        return redirect()->route('admin.blog.index')->with('success','blog created');        
 
    }
 
    public function show(Blog $blog)
    { 
        //
    }
 
    public function edit(Blog $blog,Category $category)
    {   
        $categories = $category->all();        
        $blog->load('category');
        $blog->body =  json_decode($blog->body,true); 
        return Inertia::render('Admin/blog/Edit',compact('blog','categories'));        
    }
   
    public function update(Request $request, Blog $blog)
    {   
    
        $this->validate($request, [ 
            'title' => 'required', 
            'body'=>'required',  
            "is_active" => 'required|boolean',
            "is_featured" => 'required|boolean',                
        ]);         

         
        if($request->hasFile('image')){

            $this->validate($request, [ 
                "image" => 'required|mimes:jpg,jpeg,png|max:100',   
            ]);                     
            if(Storage::disk('public')->exists($blog->image)){
                Storage::disk('public')->delete($blog->image);
            }  
            $blog->image = $request->file('image')->store('Blogs','public');   
        } 

        if(empty($request->image) && $blog->image){

            if(Storage::disk('public')->exists($blog->image)){
                Storage::disk('public')->delete($blog->image);
            }          

            $blog->image = null;   
        }

        $blog->title = $request->title;
        $blog->body = json_encode($request->body);
        $blog->user_id = Auth()->user()->id;
        $blog->is_featured = $request->is_featured;
        $blog->is_active = $request->is_active;
        $blog->category_id = $request->category_id;
        $blog->save();           

        return back()->with('success','success ! brand updated');
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();

        return back()->with('success','blog deleted');
    }
}
