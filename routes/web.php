<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/ 



Route::get('/login', function(){
    return Inertia\Inertia::render('Auth/Login');
    })->name('login')->middleware('guest');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Ecomerce/Dashboard');
})->name('dashboard');

Route::get('/home','HomeController@redirectTo')->name('home');

Route::get('/','Shop\ShopController@index')->name('welcome');

Route::get('/shop', 'Shop\ShopController@shop')->name('shop');

Route::get('/category/{slug}/products','Shop\ShopController@GetCategoryProducts')->name('shop.category-products');

Route::get('/shop/product/{slug}','Shop\ShopController@GetProductsDetails')->name('shop.product');

Route::get('/featured/products','Shop\ShopController@GetFeaturedProducts')->name('shop.FeaturedProducts');


Route::middleware(['auth:sanctum', 'verified'])->group(function () {

    Route::Resource('/cart','Cart\CartController')->except('create'); 
    Route::post('/cart/flush','Cart\CartController@CartEmpty')->name('cart.flush');  
    Route::get('/checkout','Checkout\CheckOutController@index')->name('checkout.index');
    Route::post('/checkout', 'Checkout\CheckOutController@checkout')->name('checkout.post');
    
});
 
 


Route::get('/contact', function () {
    return Inertia\Inertia::render('Ecomerce/contact/Contact');
})->name('contact');
Route::get('/blog', function () {
    return Inertia\Inertia::render('Ecomerce/blog/Blog');
})->name('blog');
Route::get('/blog-details', function () {
    return Inertia\Inertia::render('Ecomerce/blog-details/BlogDetails');
})->name('blog.details');



// Route::get('admin/login', 'Admin\LoginController@showLoginForm')->name('admin.login');
// Route::post('admin/login', 'Admin\LoginController@login')->name('admin.login.post');
// Route::get('admin/logout', 'Admin\LoginController@logout')->name('admin.logout');

Route::prefix('admin')->middleware(['auth:sanctum', 'verified','admin'])->group(function () {

    Route::get('/', 'Admin\AdminController@index')->name('admin.dashboard');
    
        Route::name('admin.')->group(function() {
            
            Route::resource('/brand', 'Admin\BrandController'); 
            Route::resource('/order', 'Admin\OrderController')->only(['index','show','update','destroy']); 
            Route::resource('/category', 'Admin\CategoryController'); 
            Route::resource('/attribute', 'Admin\AttributeController'); 

            Route::resource('/product', 'Admin\ProductController'); 
            Route::get('/product/{product}/image', 'Admin\ProductImageController@index')->name('product.images.index');
            Route::delete('/image/{ProductImage}', 'Admin\ProductImageController@destroy')->name('product.images.destroy');            
            Route::post('/product/{product}/image/upload', 'Admin\ProductImageController@UploadProductImage')->name('product.images.upload');

            Route::resource('/product-attributes', 'Admin\ProductAttributeController');

            // Route::get('product/{product}/attributes', 'Admin\ProductAttributeController@ProductAttributes')->name('product.attribute.index');                        
            
            Route::get('/setting', 'Admin\SettingController@index')->name('setting');
            Route::put('/setting', 'Admin\SettingController@update')->name('setting.update');
        });
   

            


        //    Route::get('/', function () { 
        //        return view('admin.dashboard.index');
        //    })->name('admin.dashboard');           
   
        //    Route::group(['prefix'  =>   'categories'], function() {
   
        //        Route::get('/', 'Admin\CategoryController@index')->name('admin.categories.index');
        //        Route::get('/create', 'Admin\CategoryController@create')->name('admin.categories.create');
        //        Route::post('/store', 'Admin\CategoryController@store')->name('admin.categories.store');
        //        Route::get('/{id}/edit', 'Admin\CategoryController@edit')->name('admin.categories.edit');
        //        Route::post('/update', 'Admin\CategoryController@update')->name('admin.categories.update');
        //        Route::get('/{id}/delete', 'Admin\CategoryController@delete')->name('admin.categories.delete');
   
        //    });
   
           Route::group(['prefix'  =>   '/attributes'], function() {
   
               Route::get('/', 'Admin\AttributeController@index')->name('admin.attributes.index');
            //    Route::get('/create', 'Admin\AttributeController@create')->name('admin.attributes.create');
            //    Route::post('/store', 'Admin\AttributeController@store')->name('admin.attributes.store');
            //    Route::get('/{id}/edit', 'Admin\AttributeController@edit')->name('admin.attributes.edit');
            //    Route::post('/update', 'Admin\AttributeController@update')->name('admin.attributes.update');
            //    Route::get('/{id}/delete', 'Admin\AttributeController@delete')->name('admin.attributes.delete');
   
            //    Route::post('/get-values', 'Admin\AttributeValueController@getValues');
            //    Route::post('/add-values', 'Admin\AttributeValueController@addValues');
            //    Route::post('/update-values', 'Admin\AttributeValueController@updateValues');
            //    Route::post('/delete-values', 'Admin\AttributeValueController@deleteValues');
           });
   

           Route::group(['prefix' => 'products'], function () {
   
            //   Route::get('/', 'Admin\ProductController@index')->name('admin.products.index');
            //   Route::get('/create', 'Admin\ProductController@create')->name('admin.products.create');
            //   Route::post('/store', 'Admin\ProductController@store')->name('admin.products.store');
            //   Route::get('/edit/{id}', 'Admin\ProductController@edit')->name('admin.products.edit');
            //   Route::post('/update', 'Admin\ProductController@update')->name('admin.products.update');
   
            //   Route::get('images/{id}/delete', 'Admin\ProductImageController@delete')->name('admin.products.images.delete');
   
            //   Route::get('attributes/load', 'Admin\ProductAttributeController@loadAttributes');
            //   Route::post('attributes', 'Admin\ProductAttributeController@productAttributes');
            //   Route::post('attributes/values', 'Admin\ProductAttributeController@loadValues');
            //   Route::post('attributes/add', 'Admin\ProductAttributeController@addAttribute');
            //   Route::post('attributes/delete', 'Admin\ProductAttributeController@deleteAttribute');
   
           });
   

     
});
   
 
