<?php

namespace App\Http\Controllers\Ecommerce;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;   

class AccountController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');  
    }

    public function index()
    {

        $Auth = Auth(); 
        $Orders = $Auth->user()->Orders->where('Status','completed')->values(); 
        $HistoryItems = $Orders->map(function($Order){ 
            return $Order->items->map(function($item) use($Order){
                return [
                    'id' => $item->id, 
                    "ProductSlug" => $item->Product->slug,
                    "ProductImage" => $item->Product->image,
                    "ProductID" => $item->Product->id,
                    "ProductName" => $item->Product->name,
                    "Quantity" => $item->Quantity,               
                    "Price" => $item->Price,               
                    "OrderStatus" => $Order->Status,               
                    "OrderNumber" => $Order->OrderNumber,               
                ];
            });
        })->collapse();         

        return Inertia::render('Ecomerce/dashboard/Dashboard',compact('HistoryItems'));
    }

    public function Orders()
    { 
        $Auth = Auth(); 
        $Orders = $Auth->user()->Orders->sortDesc();
        $OrderItems = $Orders->map(function($Order){ 
            return $Order->items->map(function($item) use($Order){
                return [
                    'id' => $item->id, 
                    "ProductSlug" => $item->Product->slug,
                    "ProductImage" => $item->Product->image,
                    "ProductID" => $item->Product->id,
                    "ProductName" => $item->Product->name,
                    "Quantity" => $item->Quantity,               
                    "Price" => $item->Price,               
                    "OrderStatus" => $Order->Status,               
                    "OrderNumber" => $Order->OrderNumber,               
                ];
            });
        })->collapse();  

        return Inertia::render('Ecomerce/dashboard/Order',compact('OrderItems'));
    }

  
}
