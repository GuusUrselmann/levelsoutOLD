<?php

namespace App\Http\Controllers\App;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\TaskSubmission;
use App\Task;
use Validator;

class AppHomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function home()
    {
        return view('app/home/home');
    }

    public function taskSubmit(Request $request) {
        $validator = Validator::make($request->all(), [
            'task_id' => 'required',
            'task_image' => 'required|file|image',
            'task_note'=>'max:100'
        ]);
        if($validator->fails()) {
            return redirect(url('/app/home'));
        }
        $task = Task::find($request->input('task_id'));
        $nextId = TaskSubmission::max('id')+1;
        $task_image = $request->file('task_image');
        $image_file_name = $nextId.str_random(10);
        $image_file_extention = $task_image->extension() == 'jpeg' ? '.jpg' : '.'.$task_image->extension();
        $image_path = public_path('images/submissions/'.$task->id.'/');
        $task_image->move($image_path, $image_file_name.$image_file_extention);
        TaskSubmission::create([
            'status' => 'open',
            'note' => $request->input('task_note')?$request->input('task_note'):'',
            'image_path' => url('images/submissions/'.$task->id.'/'.$image_file_name.$image_file_extention),
            'task_id' => $task->id,
            'user_id' => Auth::user()->id
        ]);
        return redirect(url('/app/home'));
    }
}
