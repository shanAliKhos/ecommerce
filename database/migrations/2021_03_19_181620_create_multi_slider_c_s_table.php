<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMultiSliderCSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('multi_slider_c_s', function (Blueprint $table) {
            $table->id();
            $table->string('photo');
            $table->string('title');
            $table->string('type');  
            $table->unsignedBigInteger('slider_id')->index();
            $table->foreign('slider_id')->references('id')->on('sliders')->onDelete('cascade');            
            $table->unsignedBigInteger('product_id')->index()->nullable();  
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
        Schema::dropIfExists('multi_slider_c_s');
    }
}
