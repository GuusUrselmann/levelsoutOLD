<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Level::create([
            'level' => 1,
            'experience' => 100
        ]);
        App\Level::create([
            'level' => 2,
            'experience' => 100
        ]);
        App\Level::create([
            'level' => 3,
            'experience' => 100
        ]);
        App\Level::create([
            'level' => 4,
            'experience' => 100
        ]);
        App\Level::create([
            'level' => 5,
            'experience' => 100
        ]);
    }
}
