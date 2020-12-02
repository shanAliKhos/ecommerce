<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

        return Inertia::render('Admin/blog/Create');
  
    }

 
    public function store(Request $request)
    { 
        $this->validate($request,[
            'title'=>'required',
            'body'=>'required',
        ]);

        $Blog = new Blog;

        $Blog->create([
            'title'=>$request->title,
            'body'=> $request->body,
            'user_id'=>Auth()->user()->id,
        ]);

        return redirect()->route('admin.blog.index')->with('success','blog created');        
 
    }
 
    public function show(Blog $blog)
    { 

    }

 
    public function edit(Blog $blog)
    {
        $blog->load('user');
        return Inertia::render('Admin/blog/Edit',compact('blog'));        
    }

   
    public function update(Request $request, Blog $blog)
    {
        //
    }

 
    public function destroy(Blog $blog)
    {
        //
    }
}
