<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttributeValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'attribute_id', 'name','code'
    ];
 
    protected $casts = [
        'attribute_id'  =>  'integer',
    ];
 
  
    public function attribute()
    {
        return $this->belongsTo(Attribute::class,'attribute_id');
    }
   

}
