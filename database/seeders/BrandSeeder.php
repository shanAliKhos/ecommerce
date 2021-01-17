<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Brand; 
use Illuminate\Support\Str;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        for ($i=0; $i < 5; $i++) { 
            Brand::create([
                'name'          =>  'Brand '.($i+1),
                'slug'          =>  Str::slug('Brand'.$i),  
            ]);    
        }        

    }
}
