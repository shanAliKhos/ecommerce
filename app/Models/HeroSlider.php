<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class HeroSlider extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'image', 'button_title', 'button_url','slider_id'
    ];
    

    protected $appends = [
        'photo_url',
    ];    
    public function getPhotoUrlAttribute()
    { 
        try {
            if (Storage::disk('s3')->exists($this->image)) { 
                return Storage::disk('s3')->url($this->image);
            }
        } catch (\Throwable $th) {
            return $this->defaultPhotoUrl();
        }   
                 
    }

    protected function defaultPhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->title).'&color=7F9CF5&background=EBF4FF';
    }    

    public function slider()
    {
        return $this->belongsTo(Slider::class);
    }
 

}
