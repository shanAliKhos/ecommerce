<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkuValue extends Model
{
    use HasFactory;

    protected $fillable = ['variant_id', 'variant_option_id','sku_id'];


    public function Variants()
    {
        return $this->belongsTo(Variant::class);
    }  
    
}
