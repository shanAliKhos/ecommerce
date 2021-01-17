<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'body','image','user_id','is_featured','is_active'
    ];

    protected $appends = [
        'photo_url',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class); 
    }

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

}
