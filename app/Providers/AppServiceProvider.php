<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider; 
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Auth;
use Config;
use App\Models\Category;
use App\Models\Setting;



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
        if(Setting::get('stripe_payment_method') == 1){
            config(['services.stripe.key'=>Setting::get('stripe_key')]);
            config(['services.stripe.secret'=>Setting::get('stripe_secret_key')]);
        }
        
        Inertia::share([  
            "SiteOptions" => [
                "Title" => Setting::get('site_title'),
                "Logo" => Setting::get('site_logo'),
                "Favicon" => Setting::get('site_favicon'),
                "Email" => Setting::get('default_email_address'),
                "Currency" => [  
                    "Code" => Setting::get('currency_code'),
                    "Symbol" => Setting::get('currency_symbol'),
                ],
                "Social" => [
                    "Facebook"=> Setting::get('social_facebook'),
                    "Twitter"=> Setting::get('social_twitter'),
                    "Instagram"=> Setting::get('social_instagram'),
                    "LinkedIn"=> Setting::get('social_linkedin'),
                ], 
                "FooterCopyRightText" => Setting::get('footer_copyright_text'),
            ],
            'Categories'=> Category::where(['is_active'=>true,'menu'=>true])->get(),
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
