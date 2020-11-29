<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variant extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'attribute_id' ];
 

    
    public function Attribute()
    {
        return $this->belongsTo(Attribute::class);
    }    

    public function variant_options()
    {
        return $this->belongsToMany(AttributeValue::class, 'variant_options','variant_id','attribute_value_id');
    }    

    public function Skuds()
    {
        return $this->belongsToMany(Sku::class, 'skus','variant_id','sku_id');
    }    
}
