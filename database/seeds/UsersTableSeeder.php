<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'name' => 'Oshi Okomilo',
            'description' => '420 enthousiast, Nature lover, Peace, Stonner and Traveler, #livin\' and many more',
            'email' => 'oshi@guestlist.net',
            'email_verified_at' => now(),
            'experience' => 0,
            'password' => Hash::make('password'),
            'userlevel' => 'owner',
            'level_id' => 1,
            'remember_token' => str_random(10)
        ]);
        App\User::create([
            'name' => 'Guus',
            'description' => 'Web dev, site creator and animal lover',
            'email' => 'guusurselmann@gmail.com',
            'email_verified_at' => now(),
            'experience' => 0,
            'password' => Hash::make('password'),
            'userlevel' => 'owner',
            'level_id' => 1,
            'remember_token' => str_random(10)
        ]);
    }
}
