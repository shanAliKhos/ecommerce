<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VariantOption extends Model
{
    use HasFactory;

    protected $fillable = ['variant_id', 'attribute_value_id'];

    // public function attributes_option()
    // {
    //     return $this->belongsToMany(AttributeValue::class, 'variant_options','id','attribute_value_id');
    // }        

    public function attributes_option()
    {
        return $this->belongsTo(AttributeValue::class,'attribute_value_id');
    }
     
 
}
