<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Auth;

class HomeController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth');  
    }    


    protected function redirectTo(Request $request){
        $Auth = Auth();  
        
        if($Auth->check()){

            if($Auth->user()->is_admin){
            
                return redirect(RouteServiceProvider::ADMIN);
            } 

            return redirect(RouteServiceProvider::USER); 
        } 

    }
}
