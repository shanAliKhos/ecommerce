<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected function defaultPhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->name).'&color=7F9CF5&background=EBF4FF';
    }

    protected $fillable = [
        'brand_id', 'sku', 'name', 'slug', 'description', 'quantity','image',
        'weight', 'regular_price', 'sale_price', 'is_active', 'is_featured',
    ];
 
    protected $casts = [
        'quantity'  =>  'integer',
        'brand_id'  =>  'integer',
        'is_active'    =>  'boolean',
        'is_featured'  =>  'boolean'
    ];
 
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
 
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories', 'product_id', 'category_id');
    }


    public function attributes()
    {
        return $this->belongsToMany(Attribute::class, 'variants','product_id','attribute_id');
    }
 
    public function variations()
    {
        return $this->hasMany(Variant::class,'product_id');
    }
 
 
 
    public function images()
    {
        return $this->hasMany(ProductImage::class);
    } 
    
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }   

    public function Skuds()
    {
        return $this->hasMany(Sku::class);
    }    
  

}
