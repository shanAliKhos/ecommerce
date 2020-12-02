<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\ProductVariation;
use Illuminate\Http\Request;

class ProductVariationController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');  
    }    

    public function index()
    {
        //
    }
 
    public function create()
    {
        //
    }
 
    public function store(Request $request)
    {
        //
    }

 
    public function show(ProductVariation $productVariation)
    {
        //
    }

 
    public function edit(ProductVariation $productVariation)
    {
        //
    }
 
    public function update(Request $request, ProductVariation $productVariation)
    {
        //
    }

    public function destroy(ProductVariation $productVariation)
    {
        //
    }
}
