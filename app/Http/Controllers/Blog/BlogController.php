<?php

namespace App\Http\Controllers\Blog;
use App\Http\Controllers\Controller;

use App\Models\Blog;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
 
    public function index()
    {  
        $blog = new Blog;  
        $Blogs = $blog->latest()->paginate('5')->load('user'); 
        $FeaturedBlogs = $blog->where('is_featured',true)->get()->load('user');  
 
        if($FeaturedBlogs->count()>1){ 
            $FeaturedBlogs = $FeaturedBlogs->random(2);
        }
 
        return Inertia::render('Ecomerce/Blog/Index',compact('Blogs','FeaturedBlogs'));  
    } 
 
    public function show(Blog $blog)
    { 
        
        $blog->load('user'); 
        $blog->body =  json_decode($blog->body,true);

        $RelatedBlogs = $blog->take(10)->get()->load('user'); 

        return Inertia::render('Ecomerce/Blog/Show',compact('blog','RelatedBlogs'));
    }
 
    public function showByCategory(Category $category,Blog $blog,$slug)
    { 
        $Blogs = $category->where('slug',$slug)->get()->map(function($cat){
            return $cat->blogs->load('user');
        })->collapse(); 
        
        $FeaturedBlogs = $blog->where('is_featured',true)->get()->load('user');  

        if($FeaturedBlogs->count()>1){ 
            $FeaturedBlogs = $FeaturedBlogs->random(2);
        }
 
        return Inertia::render('Ecomerce/Blog/Index',compact('Blogs','FeaturedBlogs'));  
    }
  
}
