<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;  
use Illuminate\Http\Request; 
use Inertia\Inertia; 
 
use App\Models\Order; 

class OrderController extends Controller
{
  
    public function __construct()
    {
        $this->middleware('admin');  
    }    

    public function index(Order $Order)
    {       
        return Inertia::render('Admin/orders/index',[
            'Orders' =>$Order->with('user')->orderBy('Status', 'asc')->latest()->paginate(8),
        ]); 
    }

    public function show(Order $Order)
    {   
        $Order->load('user')->items->map(function($item){
            return $item->product;
        });     
        return Inertia::render('Admin/orders/show',[
            'Order'=> $Order,
        ]); 

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

