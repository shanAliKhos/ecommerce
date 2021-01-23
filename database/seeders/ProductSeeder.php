<?php

namespace Database\Seeders;
 
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;



class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        for ($i=1; $i <= 6; $i++) {
            
            $extension = "jpg"; 
            
            DB::table('products')->insert([
                'name'=> 'Product'.$i,
                'brand_id'=>  null,
                'slug'=>  Str::slug('Product'.$i),
                'description'=> 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis suscipit aliquet. Etiam non ligula convallis mi bibendum sollicitudin iaculis vel sem. Nulla faucibus porta eleifend. Integer quis enim ante. Duis sit amet placerat urna. Suspendisse potenti. Etiam volutpat aliquam orci id euismod. Quisque at neque est. Ut placerat consectetur blandit. Fusce volutpat urna non libero imperdiet, sed volutpat libero maximus. Nullam ex justo, dictum eu varius mollis, convallis ac velit. Donec finibus tellus eget lacinia ultricies. Curabitur dolor magna, pharetra sed ornare nec, fermentum a risus. Aliquam sit amet sapien id elit mollis aliquam. Maecenas cursus enim id dictum pretium. Aliquam facilisis pellentesque lectus at commodo. Vestibulum vestibulum massa eget porttitor hendrerit. Proin efficitur erat vel erat finibus tincidunt non vel ipsum. Curabitur facilisis ligula sed volutpat pharetra. Praesent varius porta mauris id dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt faucibus velit non rhoncus. Vivamus a magna lectus. Maecenas turpis ex, fermentum et facilisis eget, luctus a mi. In in placerat eros. Fusce convallis massa mollis dictum interdum. Pellentesque ac est volutpat purus consectetur tempus ac sed metus. Maecenas venenatis gravida lacus, tempor hendrerit ligula. Donec ut massa bibendum, posuere magna ac, fringilla justo. Sed eleifend lacus sagittis, aliquet neque in, vehicula tortor. Nullam eget velit lacinia, rhoncus quam et, molestie purus. Sed felis tellus, ullamcorper a finibus vel, auctor sit amet urna. Praesent nisi eros, semper vel lacus in, aliquet faucibus dolor. Quisque rutrum massa quam, eu pulvinar dolor lobortis vel. Pellentesque et leo non nisi placerat consectetur quis quis nibh. Pellentesque vehicula quam ac imperdiet laoreet. Pellentesque placerat bibendum dolor vel vulputate. Fusce accumsan et augue aliquam fringilla. Vivamus fermentum, enim eget accumsan varius, ipsum quam varius mauris, sed vulputate mauris purus eu ante. Donec dolor erat, commodo sed mattis at, semper ac tellus. Nullam pulvinar non odio consectetur lobortis. Pellentesque gravida feugiat laoreet.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nunc in metus venenatis, mattis lorem sit amet, pellentesque purus. Praesent eget vestibulum turpis. Praesent pulvinar ultricies turpis, eget rutrum ex semper ut. Integer non eleifend magna. Nam magna arcu, posuere ac arcu ut, eleifend pellentesque mi. Maecenas vitae purus at ex dapibus euismod.',
                'is_featured'=> rand(0,1),
                'is_active'=> 1,
                'image'=> './../img/product/product ('.$i.').'.$extension,
                'sku'=> 'Product'.$i.'-'.rand(1,5),
                'quantity'=> rand(30,50),
                'weight'=> rand(0.10,1.00),
                'regular_price'=> rand(12000.00,15000.00),
                'sale_price'=> rand(1000.00,1100.00),                
            ]);

        }
    }
}
