<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Task::create([
            'title' => 'Find a stranger and buy them a drink to begin the game!',
            'description' => 'Upload an image of you and a stranger sharing a drink to confirm you\'ve completed the task.',
            'type' => 'image',
            'level_min' => 1,
            'image_path' => '/images/Oshi.jpg'
        ]);
        App\Task::create([
            'title' => 'Donate a sandwich to a homeless person.',
            'description' => 'Upload an image of you giving a sandwich to a homeless person to confirm you\'ve completed the task.',
            'type' => 'image',
            'level_min' => 2,
            'image_path' => '/images/Oshi.jpg'
        ]);
    }
}
