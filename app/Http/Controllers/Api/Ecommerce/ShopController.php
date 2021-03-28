<?php

namespace App\Http\Controllers\Api\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserResourceCollection;

use App\Models\User;

class ShopController extends Controller
{
    
    public function index()
    {
        $users = User::simplepaginate(10);
        return (new UserResourceCollection($users))->response();
    }
    
}
