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

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
    public function Oreder()
    {
        return $this->belongsTo(Order::class, 'product_id');
    }
}
