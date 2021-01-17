<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sku extends Model
{
    use HasFactory;
    
    protected $fillable = ['product_id', 'image','name','regular_price','sale_price','quantity','weight','is_active'];

    protected $casts = [
        'quantity'  =>  'integer', 
        'is_active'    =>  'boolean', 
    ];
 
    protected $appends = [
        'mainphoto_url',
        'current_price',  
        'on_sale'
    ];


    public function getOnSaleAttribute()
    { 
        return $this->sale_price > 0;
    }
        
    public function getMainphotoUrlAttribute()
    { 
        try {
            if (Storage::disk('s3')->exists($this->image)) { 
                return Storage::disk('s3')->url($this->image);
            }
        } catch (\Throwable $th) {
            return $this->defaultPhotoUrl();
        }   
    }

    public function getCurrentPriceAttribute()
    { 
        return ($this->sale_price > 0)
        ? $this->sale_price 
        : $this->regular_price;
    } 
    
    protected function defaultPhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->name).'&color=7F9CF5&background=EBF4FF';
    }      

    public function skus_options()
    {
        return $this->hasMany(SkuValue::class);
    }    

    // public function skuds_options()
    // {
    //     return $this->belongsToMany(SkuValue::class,'sku_values','sku_id','product_id');
    // }    
    

 
}
