<?php
namespace App\Http\Controllers\Admin\Silders;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

use App\Models\TrendingSlider;
use Illuminate\Http\Request;

class TrendingSliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/sliders/TrendingSlider'); 
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
     * @param  \App\Models\TrendingSlider  $trendingSlider
     * @return \Illuminate\Http\Response
     */
    public function show(TrendingSlider $trendingSlider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TrendingSlider  $trendingSlider
     * @return \Illuminate\Http\Response
     */
    public function edit(TrendingSlider $trendingSlider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrendingSlider  $trendingSlider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TrendingSlider $trendingSlider)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrendingSlider  $trendingSlider
     * @return \Illuminate\Http\Response
     */
    public function destroy(TrendingSlider $trendingSlider)
    {
        //
    }
}
