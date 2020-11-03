<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'user_id', 
        'OrderNumber', 
        'Status', 
        'GrandTotal', 
        'ItemCount', 
        'PaymentStatus', 
        'PaymentToken', 
        'PaymentMethod',
        'CardHolderName',
        'Address',
        'City',
        'Country',
        'PostalCode', 
        'PhoneNumber',
        'Notes',
    ];

    public function ListOrders(string $order = 'id', string $sort = 'desc', array $columns = ['*'])
    {
        return $this->with('user')->get();
    }

    public function findOrderByNumber($orderNumber)
    {
        return $this->where('order_number', $orderNumber)->first();
    }    

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }


}
