<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

/**
 * Class SettingController
 * @package App\Http\Controllers\Admin
 */
class SettingController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');  
    }     

    public function index()
    {  
        $settings = config('settings');  
        return Inertia::render('Admin/settings/Index',compact('settings')); 
    }
 
    public function update(Request $request)
    {  
        if($request->hasFile('site_logo')){             
            $OldSiteLogo =  config('settings.site_logo');        
            $NewPath = $request->file('site_logo')->store('public/setting');  
            if(Storage::exists($OldSiteLogo)){
                Storage::delete($OldSiteLogo);
            }    
            Setting::set('site_logo', $NewPath);             
        }
        
        if(empty($request->site_logo) && config('settings.site_logo')){
            
            if(Storage::exists(config('settings.site_logo'))){
                Storage::delete(config('settings.site_logo'));
            }
            Setting::set('site_logo', null);             
        }               
        
        if($request->hasFile('site_favicon')){             
            $OldSiteFavicon =  config('settings.site_favicon');      
            $NewPath = $request->file('site_favicon')->store('public/setting');  
            if(Storage::exists($OldSiteFavicon)){
                Storage::delete($OldSiteFavicon);
            }  
            Setting::set('site_favicon', $NewPath);             
        } 

        if(empty($request->site_favicon) && config('settings.site_favicon')){

            if(Storage::exists(config('settings.site_favicon'))){

                Storage::delete(config('settings.site_favicon'));
            }
            Setting::set('site_favicon', null);             
        }                 



        $settings = $request->except(['_method','site_favicon','site_logo']);

        foreach ($settings as $key => $setting)
        { 
            Setting::set($key, $setting);
        }
     
        return back()->with('success', 'Successfull ! settings updated');

    }
    
}
