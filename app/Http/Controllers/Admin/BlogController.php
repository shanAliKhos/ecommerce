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
        $Categories = $Category->all();

        return Inertia::render('Admin/blog/Create',compact('Categories'));
    }

 
    public function store(Request $request)
    { 
        dd($request->all());
        $this->validate($request,[
            'title'=>'required',
            'body'=>'required',
            "image" => 'required|mimes:jpg,jpeg,png|max:100',   
        ]);
        
 
        $Blog = new Blog;
        
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('Blogs','public');  
            $Blog->image = $path ;
        }             
        
        $Blog->title = $request->title;
        $Blog->body = json_encode($request->body);
        $Blog->user_id = Auth()->user()->id;
        $Blog->save();

        return redirect()->route('admin.blog.index')->with('success','blog created');        
 
    }
 
    public function show(Blog $blog)
    { 

    }

 
    public function edit(Blog $blog)
    {  
        $blog->body =  json_decode($blog->body,true);
        return Inertia::render('Admin/blog/Edit',compact('blog'));        
    }

   
    public function update(Request $request, Blog $blog)
    {
        $this->validate($request, [
            'title'      =>  'required', 
            'body'=>'required', 
        ]);         
          
        if($request->hasFile('image')){

            $this->validate($request, [ 
                "image" => 'required|mimes:jpg,jpeg,png|max:100',   
            ]);                     
            if(Storage::exists($blog->image)){
                Storage::delete($blog->image);
            }  
            $blog->update([
                'image' => $request->file('image')->store('Blogs','public'), 
            ]);               
        } 

        if(empty($request->image) && $blog->image){

            if(Storage::exists($blog->image)){
                Storage::delete($blog->image);
            }          
            $blog->update(['image' => null]);

        }

        $blog->update([
            'title' => $request->title, 
            'body' => json_encode($request->body,true),
            'user_id' => Auth()->user()->id,
        ]);        
            
        return back()->with('success','success ! brand updated');
    }

 
    public function destroy(Blog $blog)
    {
        $blog->delete();

        return back()->with('success','blog deleted');
    }
}
