<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProductCategory;


class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        for ($i=1; $i <= 50; $i++) {

            ProductCategory::create([
                'category_id'=>rand(2,11),
                'product_id'=>rand(1,50),
            ]);

        }  

    }
}
