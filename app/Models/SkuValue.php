<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkuValue extends Model
{
    use HasFactory;

    protected $fillable = ['variant_id', 'variant_option_id','sku_id'];


    public function Variant()
    {
        return $this->belongsTo(Variant::class);
    }  

    public function variant_option()
    {
        return $this->belongsTo(VariantOption::class,'variant_option_id');
    }  
    
}
