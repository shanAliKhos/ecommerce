<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    { 
        $this->call(SettingsTableSeeder::class);
        $this->call(UserSeeder::class);  
        $this->call(CategoriesTableSeeder::class);
        // \App\Models\Brand::factory(20)->create();  
        // \App\Models\Product::factory(100)->create(); 
        // \App\Models\ProductCategory::factory(100)->create(); 
        $this->call(AttributesTableSeeder::class);
        $this->call(AttributeValuesTableSeeder::class); 
        // $this->call(ProductAttributSeeder::class); 
    }
}
