<?php

namespace App\Http\Controllers\Blog;
use App\Http\Controllers\Controller;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {  
        $blog = new Blog;
 
        $Blogs = $blog->latest()->paginate('5');
        $FeaturedBlogs = $Blogs->random(2); 
 
        return Inertia::render('Ecomerce/Blog/Index',compact('Blogs','FeaturedBlogs'));  
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return back();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
    
        // $this->validate([
        //     'title'=>'required',
        //     'body'=>'required',
        // ]);

        // $Blog = new Blog;

        // $Blog->create([
        //     'title'=>$request->title,
        //     'body'=>$request->body,
        //     'user_id'=>Auth()->user()->id,
        // ]);

        // return redirect()->route('admin.blog.index')->with('success','blog created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    { 
        $blog->load('user'); 
        $blog->body =  json_decode($blog->body,true);
        return Inertia::render('Ecomerce/Blog/Show',compact('blog'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    { 
        return back();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        return  back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        return back();
    }
}
