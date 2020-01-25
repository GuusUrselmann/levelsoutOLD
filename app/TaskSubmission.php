<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaskSubmission extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'status', 'note', 'image_path', 'task_id', 'user_id'
    ];
}
