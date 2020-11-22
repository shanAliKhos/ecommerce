<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Laravel\Jetstream\Contracts\DeletesUsers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller implements DeletesUsers
{
    public function __construct()
    {
        $this->middleware('admin');  
    }    

 
    public function index()
    {
        $customer = new User;
        $Customers = $customer->where('is_admin',false)->latest()->paginate(10);  
        return Inertia::render('Admin/customers/index',compact('Customers'));
    }
 
    public function create()
    {
 

    }

 
    public function store(Request $request)
    {
       

    }

 
    public function show(User $customer)
    {
        dd($customer);

    }

 
    public function edit(User $customer)
    {
        dd($customer);

    }
 
    public function update(Request $request, User $customer)
    {
        dd($customer);

    }

  
    public function destroy(User $customer)
    {
        try { 
            $customer->deleteProfilePhoto();
            $customer->tokens->each->delete();
            $customer->delete();         
            return back()->with('success','user deleted');
        } catch (\Throwable $th) {
             
            
            return back()->with('error','before deleteting user delete other related records   ');
            
        }        
       
        return back()->with('error','before deleteting user delete other related records   ');
    }

    public function delete($user)
    {
        // $user->deleteProfilePhoto();
        // $user->tokens->each->delete();
        // $user->delete();
        return back();
    }    
}
