<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class Category extends Model
{
    use HasFactory;
 

    protected $fillable = [
        'name', 'slug', 'description', 'parent_id', 'featured', 'menu', 'image','is_active'
    ];
 
    protected $casts = [
        'parent_id' =>  'integer',
        'featured'  =>  'boolean',
        'menu'      =>  'boolean',
        'is_active' => 'boolean',
    ];

    protected $appends = [
        'photo_url',
    ];
    public function getPhotoUrlAttribute()
    { 
        return asset($this->image
        ? Storage::disk('local')->url($this->image)
        : $this->defaultPhotoUrl());
    }

    protected function defaultPhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->title).'&color=7F9CF5&background=EBF4FF';
    }

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
 
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    } 

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }
 
    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_categories', 'category_id', 'product_id');
    }
 
    public function blogs()
    {
        return $this->hasMany(Blog::class); 

    }

  
      
}
