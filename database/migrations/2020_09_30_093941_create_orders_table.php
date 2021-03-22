<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('OrderNumber')->unique();
            $table->enum('Status', ['pending', 'processing', 'completed', 'decline'])->default('pending');
            $table->decimal('GrandTotal', 8, 2);
            $table->unsignedInteger('ItemCount');
            $table->boolean('PaymentStatus')->default(1);
            $table->string('PaymentToken');
            $table->string('PaymentMethod')->nullable();
            $table->string('CardHolderName'); 
            $table->text('Address');
            $table->string('City');
            $table->string('Country');
            $table->string('PostalCode');
            $table->string('PhoneNumber');
            $table->text('Notes')->nullable();            
            $table->longText('api_response');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
