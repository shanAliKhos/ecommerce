<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sku extends Model
{
    protected $fillable = ['product_id', 'sku','price','qty'];

    use HasFactory;

    public function skus_options()
    {
        return $this->hasMany(SkuValue::class);
    }    

    // public function skuds_options()
    // {
    //     return $this->belongsToMany(SkuValue::class,'sku_values','sku_id','product_id');
    // }    
    
 
}
