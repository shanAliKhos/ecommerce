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
        
        try { 
            if (Storage::disk('s3')->exists($settings['site_logo'])) { 
                $settings['site_logo'] = Storage::disk('s3')->url($settings['site_logo']);
            }else{
                $settings['site_logo'] = 'https://ui-avatars.com/api/?name='.urlencode($settings['site_title']).'&color=7F9CF5&background=EBF4FF'; 
            }
        } catch (\Throwable $th) {
            $settings['site_logo'] = 'https://ui-avatars.com/api/?name='.urlencode($settings['site_title']).'&color=7F9CF5&background=EBF4FF';
        }   

        try { 
            if (Storage::disk('s3')->exists($settings['site_favicon'])) { 
                $settings['site_favicon'] = Storage::disk('s3')->url($settings['site_favicon']);
            }else{
                $settings['site_favicon'] = 'https://ui-avatars.com/api/?name='.urlencode($settings['site_title']).'&color=7F9CF5&background=EBF4FF'; 
            }
        } catch (\Throwable $th) {
            $settings['site_favicon'] = 'https://ui-avatars.com/api/?name='.urlencode($settings['site_title']).'&color=7F9CF5&background=EBF4FF';
        }   

         
        return Inertia::render('Admin/settings/Index',compact('settings')); 
    }
 
    public function update(Request $request)
    {  
        if($request->hasFile('site_logo')){             
            $OldSiteLogo =  config('settings.site_logo');        
            $NewPath = $request->file('site_logo')->store('setting','s3');  
            if(Storage::disk('s3')->exists($OldSiteLogo)){
                Storage::disk('s3')->delete($OldSiteLogo);
            }    
            Setting::set('site_logo', $NewPath);             
        }
        
        if(empty($request->site_logo) && config('settings.site_logo')){
            
            if(Storage::disk('s3')->exists(config('settings.site_logo'))){
                Storage::disk('s3')->delete(config('settings.site_logo'));
            }
            Setting::set('site_logo', null);             
        }               
        
        if($request->hasFile('site_favicon')){               
            if(Storage::disk('s3')->exists(config('settings.site_favicon'))){
                Storage::disk('s3')->delete(config('settings.site_favicon'));
            }  
            Setting::set('site_favicon', $request->file('site_favicon')->store('setting','s3'));             
        } 

        if(empty($request->site_favicon) && config('settings.site_favicon')){

            if(Storage::disk('s3')->exists(config('settings.site_favicon'))){

                Storage::disk('s3')->delete(config('settings.site_favicon'));
            }
            Setting::set('site_favicon', null);             
        }                 



        $settings = $request->except(['_method','site_favicon','site_logo']);

        foreach ($settings as $key => $setting)
        { 
            Setting::set($key, $setting);
        }
     
        return back()->with('success', 'settings updated');

    }
    
}
