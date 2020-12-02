<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
            DB::table('users')->insert([
                'name' => 'admin',
                'email' => 'admin@shopping.com',
                'email_verified_at' => now(),
                'is_admin' => 1,
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ]); 

            DB::table('users')->insert([
                'name' => 'user',
                'email' => 'user@shopping.com',
                'email_verified_at' => now(),
                'is_admin' => 0,
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10),
            ]); 
    }
}
