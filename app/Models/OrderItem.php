<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'order_id', 'product_id', 'Quantity', 'Price'
    ];

    protected function defaultPhotoUrl()
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->name).'&color=7F9CF5&background=EBF4FF';
    }
    
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
    public function Oreder()
    {
        return $this->belongsTo(Order::class, 'product_id');
    }
}
