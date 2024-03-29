<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'logo'];

    protected $appends = [
        'photo_url',
    ];    

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }
    

    public function getPhotoUrlAttribute()
    { 
        try {
            if (Storage::disk('s3')->exists($this->logo)) { 
                return Storage::disk('s3')->url($this->logo);
            }
        } catch (\Throwable $th) {
            return $this->defaultPhotoUrl();
        }            
    }

    protected function defaultPhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->name).'&color=7F9CF5&background=EBF4FF';
    }


}
