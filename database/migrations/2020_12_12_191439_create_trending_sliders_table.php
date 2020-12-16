<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrendingSlidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trending_sliders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('slider_id')->index();
            $table->foreign('slider_id')->references('id')->on('sliders')->onDelete('cascade');                 
            $table->unsignedBigInteger('product_id')->nullable();  
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');                   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trending_sliders');
    }
}
