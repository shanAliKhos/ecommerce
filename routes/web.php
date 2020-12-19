<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
 
 
//////////////////////////////////////// SLIDER //////////////////////////////////// 
    // Route::prefix('slider')->group(function () { 
        // Route::get('sale','Blog\BlogController@index')->name('blog.index');  
        // Route::get('/{blog}','Blog\BlogController@show')->name('blog.show');  
        // Route::get('/{blog}','Blog\BlogController@show')->name('blog.show');  
        // Route::get('/category/{slug}','Blog\BlogController@showByCategory')->name('blog.by-category');
    // }); 
//////////////////////////////////////// SLIDER //////////////////////////////////// 

//////////////////////////////////////// BLOG //////////////////////////////////// 
    Route::prefix('blog')->group(function () { 
        Route::get('/','Blog\BlogController@index')->name('blog.index');  
        Route::get('/{blog}','Blog\BlogController@show')->name('blog.show');  
        Route::get('/{blog}','Blog\BlogController@show')->name('blog.show');  
        Route::get('/category/{slug}','Blog\BlogController@showByCategory')->name('blog.by-category');
    }); 
//////////////////////////////////////// BLOG    ////////////////////////////////////
  
//////////////////////////////////////// SHOP ////////////////////////////////////
    Route::get('/','Ecommerce\ShopController@Home')->name('welcome');
    Route::get('/shop', 'Ecommerce\ShopController@index')->name('shop.index');
    Route::get('/shop/product/{slug}','Ecommerce\ShopController@show')->name('shop.show');
    Route::get('/featured/products','Ecommerce\ShopController@GetFeaturedProducts')->name('shop.FeaturedProducts'); 
    Route::get('/category/{slug}/products','Ecommerce\ShopController@GetCategoryProducts')->name('shop.category-products');

    // Route::get('sale-slider', 'Ecommerce\ShopController@SaleSlider')->name('slider.sale');
    // Route::get('trending-slider', 'Ecommerce\ShopController@TrendingSlider')->name('slider.trending');


//////////////////////////////////////// SHOP ////////////////////////////////////

//////////////////////////////////////// AUTHENTICATED USER ////////////////////////////////////
    Route::middleware(['auth:sanctum', 'verified'])->group(function () {

        Route::get('/home','HomeController@redirectTo')->name('home'); 

        Route::prefix('dashboard')->group(function () { 
    
            Route::get('/','Ecommerce\AccountController@index')->name('dashboard.index');
            Route::get('/orders','Ecommerce\AccountController@Orders')->name('dashboard.order');
            Route::get('/wishList',function(){return Inertia\Inertia::render('Ecomerce/dashboard/WishList');})->name('dashboard.wishlist');

        });
        
        Route::Resource('/cart','Ecommerce\CartController')->except('create'); 
        
        Route::prefix('/cart')->group(function () {
            
            Route::post('/flush','Ecommerce\CartController@CartEmpty')->name('cart.flush');   
            
            Route::get('/checkout/customer-info','Ecommerce\CheckOutController@CustomerInformation')->name('cart.CustomerInfomation');   
            Route::post('/checkout/customer-info','Ecommerce\CheckOutController@CustomerInformStore')->name('cart.CustomerInfomationStore');   
            
            Route::get('/checkout/shippings','Ecommerce\CheckOutController@ShippingMethod')->name('cart.ShippingMethod');   
            Route::post('/cart/shippings','Ecommerce\CheckOutController@ShippingMethodStore')->name('cart.ShippingMethodStore');   
            
            Route::get('/checkout/payment','Ecommerce\CheckOutController@PaymentMethod')->name('cart.PaymentMethod');   
            Route::post('/checkout/payment', 'Ecommerce\CheckOutController@CheckOut')->name('cart.checkout');
            Route::get('/checkout/success', 'Ecommerce\CheckOutController@CheckOutSuccess')->name('cart.success');
        });

        //////////////////////////////////////// MESSENGER ////////////////////////////////////////
        Route::get('/support', 'ContactsController@SupportMesseges')->name('support.index');
        Route::post('/support', 'ContactsController@SupportMessegesend')->name('support.store');
        
        
        Route::get('/messenger', 'ContactsController@index');
        Route::get('/contacts', 'ContactsController@get');
        Route::get('/conversation/{id}', 'ContactsController@getMessagesFor');
        Route::post('/conversation/send', 'ContactsController@send');
        //////////////////////////////////////// MESSENGER ////////////////////////////////////////        
        
    });
//////////////////////////////////////// AUTHENTICATED USER ////////////////////////////////////

//////////////////////////////////////// ADMINSTRATION /////////////////////////////////////////
    Route::prefix('admin')->middleware(['auth:sanctum', 'verified','admin'])->group(function () {
        
            Route::name('admin.')->group(function() {
                
                Route::get('/', 'Admin\AdminController@index')->name('dashboard');

                Route::resource('/brand', 'Admin\BrandController'); 

                Route::resource('/order', 'Admin\OrderController')->only(['index','show','update','destroy']); 

                Route::resource('/category', 'Admin\CategoryController'); 

                Route::resource('/attribute', 'Admin\AttributeController'); 

                Route::resource('/attribute-option', 'Admin\AttributeOptionController'); 

                Route::resource('/product', 'Admin\ProductController'); 
                
                Route::resource('/customer', 'Admin\CustomerController'); 

                Route::resource('/blog', 'Admin\BlogController'); 
 
                Route::resource('/product-attribute', 'Admin\ProductAttributeController');
                                
                Route::get('/setting', 'Admin\SettingController@index')->name('setting.index');
                Route::put('/setting', 'Admin\SettingController@update')->name('setting.update');
                

                Route::prefix('/slider')->name('slider.')->group(function () {           
                    
                    Route::resource('/hero', 'Admin\Silders\HeroSliderController');
                    // Route::post('/hero', 'Admin\Silders\HeroSliderController@store')->name('hero.store');
                    // Route::get('/hero/{heroslide}/edit', 'Admin\Silders\HeroSliderController@edit')->name('hero.edit');
                    // Route::post('/hero', 'Admin\Silders\HeroSliderController@update')->name('hero.store');

                    Route::get('/sale', 'Admin\Silders\SaleSliderController@edit')->name('sale.index');
                    Route::post('/sale', 'Admin\Silders\SaleSliderController@update')->name('sale.store');

                    Route::get('/trending', 'Admin\Silders\TrendingSliderController@edit')->name('trending.index');
                    Route::post('/trending', 'Admin\Silders\TrendingSliderController@update')->name('trending.store');
                    
                });                 
                
                // Route::get('/product/{product}/image', 'Admin\ProductImageController@index')->name('product.images.index');
                
                // Route::delete('/image/{ProductImage}', 'Admin\ProductImageController@destroy')->name('product.images.destroy');            
                
                // Route::post('/product/{product}/image/upload', 'Admin\ProductImageController@UploadProductImage')->name('product.images.upload');

                // Route::get('product/{product}/attributes', 'Admin\ProductAttributeController@ProductAttributes')->name('product.attribute.index');                        
                
            });
        
            // Route::group(['prefix'  =>   '/attributes'], function() {

                // Route::get('/', 'Admin\AttributeController@index')->name('admin.attributes.index');
    
                //    Route::post('/get-values', 'Admin\AttributeValueController@getValues');
                //    Route::post('/add-values', 'Admin\AttributeValueController@addValues');
                //    Route::post('/update-values', 'Admin\AttributeValueController@updateValues');
                //    Route::post('/delete-values', 'Admin\AttributeValueController@deleteValues');
            // }); 

            // Route::group(['prefix' => 'products'], function () {

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

            // });
    

        
    });
//////////////////////////////////////// ADMINSTRATION /////////////////////////////////////////
   
//////////////////////////////////////// AUTHENTICATION ////////////////////////////////////////

    Route::get('/login', function(){
        return Inertia\Inertia::render('Auth/Login');
    })->name('login')->middleware('guest');

    ///new registration
        Route::get('/register', function(){
            return Inertia\Inertia::render('Auth/NewRegister');
        })->name('register')->middleware('guest');
    ///new registration
  
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

    ///forget pass
        Route::get('/forgot-password', function () {
            return Inertia\Inertia::render('Auth/ForgetPassword'); 
        })->middleware(['guest'])->name('password.request');

        Route::post('/forgot-password', function (Request $request) {
            $request->validate(['email' => 'required|email']);

            $status = Password::sendResetLink(
                $request->only('email')
            );

            return $status === Password::RESET_LINK_SENT
                        ? back()->with(['success' => __($status)])
                        : back()->withErrors(['email' => __($status)]);
        })->middleware(['guest'])->name('password.email');

        Route::get('/reset-password/{token}', function ($token,Request $request) {
            return Inertia\Inertia::render('Auth/ResetPassword',[
                'ResetToken' => $token,
                'email' => old('email', $request->email),
            ]); 
        })->middleware(['guest'])->name('password.reset'); 
    ///forget pass

//////////////////////////////////////// AUTHENTICATION ////////////////////////////////////////

 

