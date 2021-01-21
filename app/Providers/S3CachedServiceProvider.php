<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Storage;
use League\Flysystem\Filesystem;
use League\Flysystem\Cached\CachedAdapter;
use League\Flysystem\Cached\Storage\Memory;

class S3CachedServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    public function boot()
    {
        Storage::extend('s3', function ($app, $config) {
            $adapter = $app['filesystem']->createS3Driver($config);
            $store = new Memory();
            return new Filesystem(
                new CachedAdapter(
                    $adapter->getDriver()->getAdapter(),
                    $store
                )
            );
        });
    }
}
