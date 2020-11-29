<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkuValue extends Model
{
    use HasFactory;

    public function Variants()
    {
        return $this->belongsTo(Variant::class);
    }  
    
}
