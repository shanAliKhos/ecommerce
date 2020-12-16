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
                "Title" => $dbSetting?Setting::get('site_title'):'',
                "Logo" => $dbSetting?Setting::get('site_logo'):'',
                "Favicon" => $dbSetting?Setting::get('site_favicon'):'',
                "Email" => $dbSetting?Setting::get('default_email_address'):'',
                "Phone" => $dbSetting?Setting::get('phone'):'',
                "Currency" => [  
                    "Code" => $dbSetting?Setting::get('currency_code'):'',
                    "Symbol" => $dbSetting?Setting::get('currency_symbol'):'',
                ],
                "Social" => [
                    "Facebook"=> $dbSetting?Setting::get('social_facebook'):'',
                    "Twitter"=> $dbSetting?Setting::get('social_twitter'):'',
                    "Instagram"=> $dbSetting?Setting::get('social_instagram'):'',
                    "LinkedIn"=> $dbSetting?Setting::get('social_linkedin'):'',
                ], 
                "FooterCopyRightText" => $dbSetting?Setting::get('footer_copyright_text'):'',
            ],
          
            'Cart' => function () {
                return [
                    'Items' => Session::get('CartItems'),
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
