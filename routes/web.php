<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
 

Route::get('/login', function(){
    return Inertia\Inertia::render('Auth/Login');
})->name('login')->middleware('guest');

Route::get('/forgot-password', function(){
    return Inertia\Inertia::render('Auth/ForgetPassword');
})->name('password.request')->middleware('guest');
 
Route::get('/register', function(){
    return Inertia\Inertia::render('Auth/NewRegister');
})->name('register')->middleware('guest');

///verification-notification starts

Route::get('/email/verify', function () {
    return Inertia\Inertia::render('Auth/VerifyEmail');
})->middleware(['auth'])->name('verification.notice'); 

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('status', 'verification-link-sent');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

///verification-notification ends



Route::get('/contact', function () {
    return Inertia\Inertia::render('Ecomerce/contact/Contact');
})->name('contact');

Route::get('/blog', function () {
    return Inertia\Inertia::render('Ecomerce/blog/Blog');
})->name('blog');

Route::get('/blog-details', function () {
    return Inertia\Inertia::render('Ecomerce/blog-details/BlogDetails');
})->name('blog.details');


Route::get('/','Shop\ShopController@Home')->name('welcome');

Route::get('/shop', 'Shop\ShopController@index')->name('shop.index');

Route::get('/category/{slug}/products','Shop\ShopController@GetCategoryProducts')->name('shop.category-products');

Route::get('/shop/product/{slug}','Shop\ShopController@GetProductsDetails')->name('shop.product');

Route::get('/featured/products','Shop\ShopController@GetFeaturedProducts')->name('shop.FeaturedProducts'); 

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

    Route::get('/home','HomeController@redirectTo')->name('home'); 

    Route::prefix('dashboard')->group(function () { 
 

        Route::get('/','Account\AccountController@index')->name('dashboard.index');
        Route::get('/orders','Account\AccountController@Orders')->name('dashboard.order');

        // Route::get('/orders',function(){
        //     return Inertia\Inertia::render('Ecomerce/dashboard/Order');
        // })->name('dashboard.order');

        Route::get('/wishList',function(){
            return Inertia\Inertia::render('Ecomerce/dashboard/WishList');
        })->name('dashboard.wishlist');

    });
    
    Route::Resource('/cart','Cart\CartController')->except('create'); 
    
    Route::prefix('/cart')->group(function () {
        
        Route::post('/flush','Cart\CartController@CartEmpty')->name('cart.flush');   
        
        Route::get('/checkout/customer-info','Cart\CheckOutController@CustomerInformation')->name('cart.CustomerInfomation');   
        Route::post('/checkout/customer-info','Cart\CheckOutController@CustomerInformStore')->name('cart.CustomerInfomationStore');   
        
        Route::get('/checkout/shippings','Cart\CheckOutController@ShippingMethod')->name('cart.ShippingMethod');   
        Route::post('/cart/shippings','Cart\CheckOutController@ShippingMethodStore')->name('cart.ShippingMethodStore');   
        
        Route::get('/checkout/payment','Cart\CheckOutController@PaymentMethod')->name('cart.PaymentMethod');   
        Route::post('/checkout/payment', 'Cart\CheckOutController@CheckOut')->name('cart.checkout');
        Route::get('/checkout/success', 'Cart\CheckOutController@CheckOutSuccess')->name('cart.success');
    });
     
    // Route::get('/checkout','Checkout\CheckOutController@index')->name('checkout.index');
    
});
 
 






Route::prefix('admin')->middleware(['auth:sanctum', 'verified','admin'])->group(function () {

    
        Route::name('admin.')->group(function() {
            
            Route::get('/', 'Admin\AdminController@index')->name('dashboard');

            Route::resource('/brand', 'Admin\BrandController'); 

            Route::resource('/order', 'Admin\OrderController')->only(['index','show','update','destroy']); 

            Route::resource('/category', 'Admin\CategoryController'); 

            Route::resource('/attribute', 'Admin\AttributeController'); 

            Route::resource('/product', 'Admin\ProductController'); 

            Route::resource('/product-attributes', 'Admin\ProductAttributeController');

            Route::get('/product/{product}/image', 'Admin\ProductImageController@index')->name('product.images.index');
            
            Route::delete('/image/{ProductImage}', 'Admin\ProductImageController@destroy')->name('product.images.destroy');            
            
            Route::post('/product/{product}/image/upload', 'Admin\ProductImageController@UploadProductImage')->name('product.images.upload');
            
            Route::get('/setting', 'Admin\SettingController@index')->name('setting');
            Route::put('/setting', 'Admin\SettingController@update')->name('setting.update');
            
            // Route::get('product/{product}/attributes', 'Admin\ProductAttributeController@ProductAttributes')->name('product.attribute.index');                        
        });
    
        Route::group(['prefix'  =>   '/attributes'], function() {

            Route::get('/', 'Admin\AttributeController@index')->name('admin.attributes.index');
  
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
   
 

 