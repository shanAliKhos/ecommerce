<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage; 

class Product extends Model
{
    use HasFactory;
 
    protected $fillable = [
        'brand_id', 'sku', 'name', 'slug', 'description', 'quantity','image',
        'weight', 'regular_price', 'sale_price', 'is_active', 'is_featured',
    ];
 
    protected $casts = [ 
        'rating'  =>  'integer',
        'quantity'  =>  'integer', 
        'brand_id'  =>  'integer',
        'is_active'    =>  'boolean',
        'is_featured'  =>  'boolean'
    ];
 
    protected $appends = [ 
        'mainphoto_url',
        'current_price',          
        'on_sale',          
        'label',
        'rating',
    ];
 
    public function getLabelAttribute()
    { 
 
        if($this->sale_price > 0){
            return  [
                'bg_color'=>'bg-red-500',
                'text_color'=>'text-red-500',
                'title'=>'Sale -'. (int) round(($this->regular_price - $this->sale_price)/ $this->regular_price * 100)  .'%', 
                'active'=>true,                
            ];               

        }else if($this->is_featured){                     
 
            return  [
                'bg_color'=>'bg-blue-500',
                'text_color'=>'text-green-500',
                'title'=>'Trend',
                'active'=>true,                
            ];               
            
        }else{
 
            return  [
                'bg_color'=>'bg-green-500',
                'text_color'=>'text-green-500',
                'title'=>'new',
                'active'=>true,                
            ];            

        }   
      
    }

    public function getRatingAttribute()
    { 
        return rand(1,5);
    }

    public function getOnSaleAttribute()
    { 
        return $this->sale_price > 0;
    }

    public function getMainphotoUrlAttribute()
    { 
        if (Storage::disk('s3')->exists($this->image)) {
            // dd( Storage::disk('s3')->url($this->image));
            return Storage::disk('s3')->url($this->image);
        }
        return $this->defaultPhotoUrl();
 
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
        return $this->belongsToMany(Sku::class,'skus','product_id','name');
    }    
    
    public function Skus()
    {
        return $this->hasMany(Sku::class,'product_id');
    }    
    
    public function skuds_options()
    {
        return $this->belongsToMany(SkuValue::class,'sku_values','product_id','sku_id');
    }    

    public function skus_options()
    {
        return $this->hasMany(SkuValue::class,'product_id');
    }    
  

}
