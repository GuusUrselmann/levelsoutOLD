<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Task;
use App\Level;
use App\TaskSubmission;
use App\Question;

class APIController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function homeProfile()
    {
        $user = Auth::user();
        $level_step = ceil($user->level()/4)*4-4;
        $levels = Level::where('level', '>', $level_step)->take(4)->get();
        $user->setAttribute('level', $user->level());
        $data = [
            'user' => $user,
            'levels' => $levels
        ];
        return $data;
    }

    public function homeTasks()
    {
        $user = Auth::user();
        //TODO: Change to check for completed tasks instead of level
        $tasks = Task::where('level_min', '>=', $user->level())->take(5)->get();
        $submission = TaskSubmission::where('user_id', $user->id)->where('task_id', $tasks[0]->id)->first();
        if($submission) {
            $tasks[0]->setAttribute('submission', $submission);
        }
        $complete = Task::where('level_min', '<', $user->level())->get();

        $data = [
            'tasks' => $tasks,
            'complete' => $complete
        ];
        return $data;
    }

    public function adminDashboardSubmissions() {
        $submissions = TaskSubmission::where('status', 'open')->with('user')->with('task')->get();
        $data = [
            'submissions' => $submissions
        ];
        return $data;
    }

    public function adminDashboardSubmissionsSubmit(Request $request) {
        $submission = TaskSubmission::find($request->submission_id);
        if($request->status == 'accepted') {
            $submission->update([
                'status' => $request->status
            ]);
        }
        else {
            $submission->update([
                'status' => 'denied',
                'status_report' => 'your submission was denied because: ...'
            ]);
        }
    }

    public function appQuestions(Request $request) {
        $questions = Auth::user()->getQuestions();
        $data = [
            'questions' => $questions
        ];
        return $data;
    }
}
