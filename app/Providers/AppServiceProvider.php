<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider; 
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Auth;
use Config;
use App\Models\Category;
use App\Models\Setting;
use Illuminate\Support\Facades\Schema;



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
        $dbCategory = false;

        if (!\App::runningInConsole() && count(Schema::getColumnListing('settings'))) {
            $dbSetting = true;

            if(Setting::get('stripe_payment_method') == 1){
                config([
                    'services.stripe.key'=>Setting::get('stripe_key'),
                    'services.stripe.secret'=>Setting::get('stripe_secret_key'),
                ]);
            }            
        }
        if (!\App::runningInConsole() && count(Schema::getColumnListing('categories'))) {
            $dbCategory = true;
        }
        

    
        Inertia::share([  
            "SiteOptions" => [
                "Title" => $dbSetting?Setting::get('site_title'):'',
                "Logo" => $dbSetting?Setting::get('site_logo'):'',
                "Favicon" => $dbSetting?Setting::get('site_favicon'):'',
                "Email" => $dbSetting?Setting::get('default_email_address'):'',
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
            'Categories'=> $dbCategory?Category::where(['is_active'=>true,'menu'=>true])->get():[],
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
