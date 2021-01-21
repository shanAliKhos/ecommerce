<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'order_id', 'product_id', 'variation','Quantity', 'Price'
    ];
 
    
    public function Product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function Order()
    {
        return $this->belongsTo(Order::class, 'product_id');
    }
}
