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
            $NewPath = $request->file('site_logo')->store('setting','public');  
            if(Storage::disk('public')->exists($OldSiteLogo)){
                Storage::disk('public')->delete($OldSiteLogo);
            }    
            Setting::set('site_logo', $NewPath);             
        }
        
        if(empty($request->site_logo) && config('settings.site_logo')){
            
            if(Storage::disk('public')->exists(config('settings.site_logo'))){
                Storage::disk('public')->delete(config('settings.site_logo'));
            }
            Setting::set('site_logo', null);             
        }               
        
        if($request->hasFile('site_favicon')){             
            $OldSiteFavicon =  config('settings.site_favicon');      
            $NewPath = $request->file('site_favicon')->store('setting','public');  
            if(Storage::disk('public')->exists($OldSiteFavicon)){
                Storage::disk('public')->delete($OldSiteFavicon);
            }  
            Setting::set('site_favicon', $NewPath);             
        } 

        if(empty($request->site_favicon) && config('settings.site_favicon')){

            if(Storage::disk('public')->exists(config('settings.site_favicon'))){

                Storage::disk('public')->delete(config('settings.site_favicon'));
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
