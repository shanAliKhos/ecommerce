<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    use HasFactory;

    protected $fillable = [
         'name'
    ];
     
    public function hero_slider()
    {
        return $this->hasMany(HeroSlider::class,'slider_id');
    }
     
    public function sale_slider()
    {
        return $this->belongsToMany(Product::class, 'sale_sliders','slider_id','product_id');
    }

    public function trending_slider()
    {
        return $this->belongsToMany(Product::class, 'trending_sliders','slider_id','product_id');
    }    

}
