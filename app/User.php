<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Level;
use App\Question;
use App\UserInfo;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'email', 'experience', 'password', 'userlevel', 'dob', 'level_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function level() {
        return $this->belongsTo(Level::class)->first()->level;
    }

    public function getQuestions() {
        $ids = [];
        foreach(Question::all() as $question) {

            if(!UserInfo::where('user_id', $this->id)->where('question_id', $question->id)->count()) {
                $ids[] = $question->id;
            }
        }
        return Question::whereIn('id', $ids)->get();
    }
}
