<?php
 
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\User; 
use App\Models\Product; 
use App\Models\Order; 
use App\Models\OrderItem; 


class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');  
    }    

    public function index()
    { 
        $Order = new Order;
        $User = new User;

        $CompletedOrder = $Order->where('Status','completed')->get();
        $CompletedOrder = $CompletedOrder->map(function($order){
            return array_sum(array_column($order->items->toArray(),'Quantity')); 
        }); 

        $RecentPaidOrder = $Order->where('PaymentStatus',true)->latest()->take(5)->get();
        $RecentTransations = $RecentPaidOrder->map(function($paid){ 
            return [
                    'OrderId'=> $paid->id,
                    'CustomerName'=> $paid->user->name,
                    'OrderNumber'=> $paid->OrderNumber,
                    'TotalPrice'=> $paid->GrandTotal,
                    'Status'=> $paid->Status,
                ]; 
        }); 
        
        $ProductsSold = $CompletedOrder->sum();   
        $NewOrders = $Order->where('Status','!=','completed')->where('Status','!=','decline')->get()->count();
        
        $RegisteredCustomers = $User->where('is_admin',false)->get()->count(); 
        

        return Inertia::render('Admin/dashboard/index',compact('ProductsSold','NewOrders','RegisteredCustomers','RecentTransations'));
    }
}
