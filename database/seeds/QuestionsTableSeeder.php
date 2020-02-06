<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Question::create([
            'name' => 'alcohol',
            'title' => 'Do you drink alcohol?',
            'answers' => 'yes:yes,no:no',
            'answer_type' => 'select',
            'level_min' => 0,
            'background_image' => '/images/Oshi.jpg'
        ]);
        App\Question::create([
            'name' => 'gin beer',
            'title' => 'Gin or Beer?',
            'answers' => 'Gin:gin,Beer:beer',
            'answer_type' => 'multiple',
            'level_min' => 0,
            'background_image' => '/images/Oshi.jpg'
        ]);
    }
}
