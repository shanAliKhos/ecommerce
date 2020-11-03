<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductAttributSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Product = new Product;
        
        foreach ($Product->all() as $Productkey => $Product) {

            DB::table('product_attributes')->insert([
                'attribute_val_id'=> rand(1, 7),
                'product_id'=>$Product->id,
                'value'=>'null',
                'quantity'=>rand(30, 50),
                'sku'=> $Productkey.'-'. rand(1010,1018),
                'price'=>rand(149999, 249999),
                'sale_price'=>rand(129999, 229999),
                'weight'=>rand(0.1 , 1)
            ]);

        }
    }
}
