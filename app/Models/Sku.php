<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sku extends Model
{
    protected $fillable = ['product_id', 'sku','price','qty'];

    use HasFactory;

    public function skud_options()
    {
        return $this->hasMany(SkuValue::class);
    }    
    public function product()
    {
        return $this->belongsToMany(Product::class);
    }  

}
