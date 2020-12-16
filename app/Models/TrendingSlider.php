<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrendingSlider extends Model
{
    use HasFactory;

    public function products()
    {
        return $this->belongsToMany(Product::class, 'sale_sliders','id','product_id');
    } 

}
