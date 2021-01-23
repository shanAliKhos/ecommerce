<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider; 
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
// use Auth;
// use Config; 
// use App\Models\User;
// use App\Models\Message;
use App\Models\Setting;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Arr;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


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
        $Settings = [];
        if (!\App::runningInConsole() && count(Schema::getColumnListing('settings'))) {
            $dbSetting = true;
            $Settings = Arr::pluck(Setting::all(), 'value','key'); 
        } 
        
        Inertia::share([  
            "SiteOptions" =>  [
                "Title" => isset($Settings['site_title'])?$Settings['site_title']:'',
                "Logo" => isset($Settings['site_logo'])?Storage::disk('s3')->url($Settings['site_logo']):'https://ui-avatars.com/api/?name=logo&color=7F9CF5&background=EBF4FF',
                "Favicon" => isset($Settings['site_favicon'])?Storage::disk('s3')->url($Settings['site_favicon']):'https://ui-avatars.com/api/?name=FI&color=7F9CF5&background=EBF4FF',
                "Email" => isset($Settings['default_email_address'])?$Settings['default_email_address']:'',
                "Phone" => isset($Settings['phone'])?$Settings['phone']:'',
                "Currency" => [  
                    "Code" => isset($Settings['currency_code'])?$Settings['currency_code']:'',
                    "Symbol" => isset($Settings['currency_symbol'])?$Settings['currency_symbol']:'',
                ],
                "Social" => [
                    "Facebook"=> isset($Settings['social_facebook'])?$Settings['social_facebook']:'',
                    "Twitter"=> isset($Settings['social_twitter'])?$Settings['social_twitter']:'',
                    "Instagram"=> isset($Settings['social_instagram'])?$Settings['social_instagram']:'',
                    "LinkedIn"=> isset($Settings['social_linkedin'])?$Settings['social_linkedin']:'',
                ], 
                "FooterCopyRightText" => isset($Settings['footer_copyright_text'])?$Settings['footer_copyright_text']:'',
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
