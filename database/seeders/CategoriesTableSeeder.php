<?php

namespace Database\Seeders;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name'          =>  'Root',
            'slug'          =>  'slug',
            'description'   =>  'This is the root category, don\'t delete this one',
            'parent_id'     =>  null,
            'menu'          =>  0,
        ]);   
        for ($i=0; $i < 9; $i++) { 
            Category::create([
                'name'          =>  'Category '.($i+1),
                'slug'          =>  Str::slug('Product'.$i),
                'description'   =>  'This is the category '.($i+1).', testing',
                'parent_id'     =>  0,
                'menu'          =>  1,
            ]);    
        }

    }
}
