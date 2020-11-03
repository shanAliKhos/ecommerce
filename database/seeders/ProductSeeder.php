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
        for ($i=1; $i <= 50; $i++) {
            
            DB::table('products')->insert([
                'category_id'=>rand(1, 11),
                'subcategory_id'=>null,
                'Brand_id'=>null,
                'sku'=>null,
                'name'=> 'Product'.$i,
                'slug'=>'Product'.$i,
                'short_description'=>'this is short description of Product'.$i,
                'description'=>'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                'quantity'=>30,
                'weight'=>1,
                'price'=> rand(149999, 249999),
                'sale_price'=> rand(149999, 249999),
                'is_active'=>true,
                'is_featured'=>false,
                'image'=>'img/myproduct/product-'.$i.'.jpg',
                'images'=>null,
            ]);

        }
    }
}
