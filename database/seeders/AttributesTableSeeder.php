<?php

namespace Database\Seeders;
use App\Models\Attribute;
use Illuminate\Database\Seeder;

class AttributesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        Attribute::create([ 
            'name'          =>  'Size',
            'frontend_type' =>  'select',
            'is_filterable' =>  1,
            'is_required'   =>  1,
        ]);
 
        Attribute::create([ 
            'name'          =>  'Color',
            'frontend_type' =>  'select',
            'is_filterable' =>  1,
            'is_required'   =>  1,
        ]);
    }
}
