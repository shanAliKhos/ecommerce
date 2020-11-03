<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\Session;
use App\Models\Category;
use App\Models\Setting;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        // return array_merge(parent::share($request), [
        //     "SiteOptions" => [
        //         "Title" => Setting::get('site_title'),
        //         "Logo" => Setting::get('site_logo'),
        //         "Favicon" => Setting::get('site_favicon'),
        //         "Email" => Setting::get('default_email_address'),
        //         "Currency" => [  
        //             "Code" => Setting::get('currency_code'),
        //             "Symbol" => Setting::get('currency_symbol'),
        //         ],
        //         "Social" => [
        //             "Facebook"=> Setting::get('social_facebook'),
        //             "Twitter"=> Setting::get('social_twitter'),
        //             "Instagram"=> Setting::get('social_instagram'),
        //             "LinkedIn"=> Setting::get('social_linkedin'),
        //         ], 
        //         "FooterCopyRightText" => Setting::get('footer_copyright_text'),
        //     ],
        //     'Categories'=> Category::where(['is_active'=>true,'menu'=>true])->get(),
        //     'Cart' => function () {
        //         return [
        //             'Items' => Session::get('CartItems'),
        //         ];
        //     },
        //     'flash' => function () {
        //         return [
        //             'success' => Session::get('success'),
        //             'error' => Session::get('error'), 
        //             'info' => Session::get('info'),
        //         ];
        //     },
        // ]);
    }
}
