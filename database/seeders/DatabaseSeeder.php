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
        // $this->call(CategoriesTableSeeder::class);
        // $this->call(SettingsTableSeeder::class);
        // $this->call(AttributesTableSeeder::class);
        // $this->call(AttributeValuesTableSeeder::class); 
        // $this->call(UserSeeder::class);   
        $this->call(ProductSeeder::class);     
        // $this->call(ProductCategorySeeder::class);     
        // $this->call(ProductAttributSeeder::class); 
    }
}
