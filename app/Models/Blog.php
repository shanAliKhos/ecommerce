<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'body', 'user_id','is_featured','is_active'
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }


}
