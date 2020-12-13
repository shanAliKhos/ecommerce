<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

use App\Models\HeroSlider;
use Illuminate\Http\Request;

class HeroSliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/sliders/HeroSlider'); 

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HeroSlider  $heroSlider
     * @return \Illuminate\Http\Response
     */
    public function show(HeroSlider $heroSlider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HeroSlider  $heroSlider
     * @return \Illuminate\Http\Response
     */
    public function edit(HeroSlider $heroSlider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HeroSlider  $heroSlider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HeroSlider $heroSlider)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HeroSlider  $heroSlider
     * @return \Illuminate\Http\Response
     */
    public function destroy(HeroSlider $heroSlider)
    {
        //
    }
}
