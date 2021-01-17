<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider; 
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Auth;
use Config; 
use App\Models\User;
use App\Models\Message;
use App\Models\Setting;
use Illuminate\Support\Facades\Schema;
  
use Illuminate\Http\Request;

class AppServiceProvider extends ServiceProvider
{
 
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    { 
        $dbSetting = false; 

        if (!\App::runningInConsole() && count(Schema::getColumnListing('settings'))) {
            $dbSetting = true;
   
        } 
       
        Inertia::share([  
          
            "SiteOptions" =>  [
                "Title" => 'title',
                "Logo" => '',
                "Favicon" => '',
                "Email" => '',
                "Phone" => '',
                "Currency" => [  
                    "Code" => '',
                    "Symbol" => '',
                ],
                "Social" => [
                    "Facebook"=> '',
                    "Twitter"=> '',
                    "Instagram"=> '',
                    "LinkedIn"=> '',
                ], 
                "FooterCopyRightText" => '',
            ],
          
            'Cart' => function () {
                return [
                    'Items' => '',
                ];
            },
           
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'), 
                    'info' => Session::get('info'),
                ];
            },

        ]);        

    }
}
