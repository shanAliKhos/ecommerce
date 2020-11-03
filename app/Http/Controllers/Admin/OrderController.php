<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;  
use Illuminate\Http\Request; 

use App\Models\Product;
use App\Models\Order;
use App\Models\OrderItem;
use Inertia\Inertia;
use Carbon\Carbon;

class OrderController extends Controller
{
  

    public function index()
    {    
        $Order = new Order; 
        $Orders = $Order->with('user')->orderBy('Status', 'asc')->latest()->get()->toArray(); 
           
        return Inertia::render('Admin/orders/index',compact('Orders'));
        // return view('admin.orders.index', compact('orders'));
    }

    public function show(Order $Order)
    {  
        $Order->user;  
        $Order->items->map(function($item){
            return $item->product;
        });     
        return Inertia::render('Admin/orders/show',compact('Order')); 

    }

    public function update(Order $Order , Request $request)
    {   
        $this->validate($request,[
            'Status'=>'required'
        ]);  
        $Order->update($request->all());
        return back()->with('success','order is '.$request->Status);
    }

    public function destroy(Order $Order)
    {    
        $Order->Status = "decline";
        $Order->save();
        
        return back()->with('success','order is '.$Order->Status);
    }
    
}

