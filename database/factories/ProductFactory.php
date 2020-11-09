<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [ 
            'name'=>$this->faker->name,
            'brand_id'=>  rand(1,10),
            'slug'=>  $this->faker->unique()->slug,
            'description'=> $this->faker->realText(100),
            'image'=> 'img/product/product-'.rand(1,12).'.jpg',
            'is_featured'=> rand(0,1),
            'is_active'=> 1,
            'sku'=> $this->faker->unique()->realText(15).'-'.rand(1,5),
            'quantity'=> rand(30,50),
            'weight'=> rand(0.10,1.00),
            'regular_price'=> rand(1200.00,1500.00),
            'sale_price'=> rand(1000.00,1100.00),
        ];
    }
}
