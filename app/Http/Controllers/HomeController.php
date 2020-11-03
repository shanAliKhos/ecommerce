<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Auth;

class HomeController extends Controller
{
    protected function redirectTo(Request $request){
        $User = Auth()->User();
        if($User->is_admin){
            return redirect(RouteServiceProvider::ADMIN);
        }else{
            return redirect(RouteServiceProvider::USER); 
        }
    }
}
