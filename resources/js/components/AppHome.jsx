import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useSwipeable, Swipeable } from 'react-swipeable';
import Axios from "axios";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabCurrent: 0,
            user: '',
            levels: []
        };
    }
    componentDidMount() {
        Axios.post(url()+'/api/homeprofile', {
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        })
        .then(response => {
            this.setState({user: response.data.user, levels: response.data.levels});
        })
        .catch(error => {
            console.log(error);
       });
       this.setState({isLoading: false});
    }
    render() {
        const user = this.state.user;
        const levels = this.state.levels;
        const levelsBar = levels.map((level, i) =>
            <div className="level-container" key={level.id}>
                <div className="level-top">
                    {i==0?'LEVEL ':''}{level.level}
                </div>
                <div className={'level-bar '+(user.level>level.level?'complete':'')}>
                </div>
            </div>
        );
        const element = (
            <div className="block profile">
                <div className="profile-info">
                    <div className="info-image">
                        <div className="image-inner background-cover" style={{backgroundImage: `url(${url()}/images/Oshi.jpg)`}}>
                        </div>
                    </div>
                    <div className="info">
                        <div className="info-name">
                            {user.name}
                        </div>
                        <div className="info-description">
                            {user.description}
                        </div>
                    </div>
                </div>
                <div className="profile-levels">
                    {levelsBar}
                </div>
            </div>
        );
        return element;
    }
}

class TaskCard extends React.Component {
    render() {
        var action = '';
        if(this.props.task.submission) {
            if(this.props.type=='current') {
                action = (
                    <div className="action-button theme-button-full" onClick={(e) => this.openTaskViewOverlay(e, this.props.task)}>
                        <i className="fas fa-arrow-right"></i>
                    </div>

                );
            }
        }
        else if(this.props.type=='current') {
            action = (
                <div className="action-button theme-button-full" onClick={(e) => this.openTaskOverlay(e, this.props.task)}>
                    UPLOAD
                </div>
            );
        }
        else {
            action = (
                <div className="action-button theme-button-full disabled">
                    UNLOCK AT LEVEL {this.props.task.level_min}
                </div>
            );
        }

        const element = (
            <div className="block taskcard">
                <div className="card">
                    <div className="card-top">
                        <div className="card-name">{this.props.type == 'current' ? 'Current task' : 'Task '+this.props.task.level_min}</div><div className="card-time">1min ago</div><div className="card-page">1/1</div>
                    </div>
                    <div className="card-body">
                        <div className="card-question">
                            {this.props.task.title}
                        </div>
                        <div className="card-description">
                            {this.props.task.description}
                        </div>
                        <div className="card-action">
                            {action}
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }

    openTaskOverlay(e, task) {
        const element = (
            <TaskOverlay task={task} />
        );
        ReactDOM.render(element, document.getElementById('overlay'));
        $("body").css('overflow', 'hidden');
        setTimeout(() => {$("#taskoverlay .overlay-container").css({'margin-left': '0px'});},50);
    }
    openTaskViewOverlay(e, task) {
        const element = (
            <TaskViewOverlay task={task} />
        );
        ReactDOM.render(element, document.getElementById('overlay'));
        $("body").css('overflow', 'hidden');
        setTimeout(() => {$("#taskviewoverlay .overlay-container").css({'margin-left': '0px'});},50);
    }
}

class TaskActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabCurrent: 0,
            tasks: [],
            completed: []
        }
    }
    componentDidMount() {
        Axios.post(url()+'/api/hometasks', {
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        })
        .then(response => {
            this.setState({tasks: response.data.tasks,complete: response.data.completed});
        })
        .catch(error => {
            console.log(error);
       });
       this.setState({isLoading: false});
    }
    render() {
        const tasks = this.state.tasks;
        const completed = this.state.completed;
        const taskList = tasks.map((task, i) =>
            <TaskCard key={task.id} task={task} type={i==0?'current':'normal'} />
        );
        const completeList = completed.map((task) =>
            <TaskCard key={task.id} task={task} />
        );
        const element = (
            <div className="block activityfeed">
                <div className="activityfeed-header">
                    <div className="header-tab" onClick={(e) => this.switchTab(e, 0)}>
                        TASKS
                    </div>
                    <div className="header-tab" onClick={(e) => this.switchTab(e, 1)}>
                        COMPLETED
                    </div>
                    <div className="header-current" id="tabbar">
                    </div>
                </div>
                <div className="activity">
                    <div className="tabs" id="tabslider">
                        <div className="tab">
                            {taskList}
                        </div>
                        <div className="tab">
                            {completeList}
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }

    switchTab(e, tabTarget) {
        var slider = $("#tabslider");
        var tabBar = $("#tabbar");
        var tabHeader = $("#tabheader");
        this.state.tabCurrent = tabTarget;
        slider.css({"margin-left": -(this.state.tabCurrent * 100)+"%"});
        tabBar.css({"margin-left": (this.state.tabCurrent * (100/2))+"%"});
    }
}

class TaskOverlay extends React.Component {
    render() {
        const element = (
            <div className="overlay-cover task" id="taskoverlay">
                <div className="overlay-container">
                    <div className="overlay-top">
                        <div className="overlay-title">
                            Task {this.props.task.level_min}
                        </div>
                        <div className="overlay-exit" onClick={() => this.closeTaskOverlay()}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="overlay-body">
                        <div className="overlay-task">
                            <form method="POST" action={url()+'/app/tasksubmit'} encType="multipart/form-data">
                                <input type="hidden" name="_token" value={$('meta[name="csrf-token"]').attr('content')} />
                                <input type="hidden" name="task_id" value={this.props.task.id} />
                                <div className="task-content">
                                    <div className="task-title">
                                        {this.props.task.title}
                                    </div>
                                    <div className="task-thumbnail background-cover" style={{backgroundImage: `url(${url()+this.props.task.image_path}`}}>
                                    </div>
                                    <div className="task-description">
                                        {this.props.task.description}
                                    </div>
                                    <div className="task-image">
                                        <div className="image-upload">
                                            <button className="upload-button" value="loadXml" type="button" onClick={(e) => {document.getElementById('imagebutton').click();}}>
                                                Select image
                                            </button>
                                            <input type="file" name="task_image" className="upload-button-hidden" id="imagebutton" onChange={(e) => this.imagePreview(e)} />
                                        </div>
                                        <div className="image-preview">
                                            <div className="preview-inner" id="imagepreview">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="task-note">
                                        <textarea name="task_note" placeholder="Notes...">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="task-submit">
                                    <button className="submit-button" type="submit" name="task_submit" disabled id="tasksubmit">
                                        LET'S GO!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }
    closeTaskOverlay() {
        $("#taskoverlay .overlay-container").css({'margin-left': 'calc(100% + 40px)'});
        $("body").css('overflow', 'unset');
        setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('overlay'))},300);
    }
    imagePreview(e) {
        $("#imagepreview .preview-image").remove();
        if(e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $("#imagepreview").append(`<img class="preview-image" src="`+e.target.result+`" />`);
            };
            reader.readAsDataURL(e.target.files[0]);
            $("#tasksubmit").removeAttr('disabled')
        }
        else {
            $("#tasksubmit").addAttr('disabled')

        }
    }
}

class TaskViewOverlay extends React.Component {
    render() {
        const element = (
            <div className="overlay-cover task" id="taskviewoverlay">
                <div className="overlay-container">
                    <div className="overlay-top">
                        <div className="overlay-title">
                            Task {this.props.task.level_min} status: {this.props.task.submission.status}
                        </div>
                        <div className="overlay-exit" onClick={() => this.closeTaskOverlay()}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="overlay-body">
                        <div className="overlay-task">
                            <div className="task-content">
                                <div className="task-title">
                                    {this.props.task.title}
                                </div>
                                <div className="task-thumbnail background-cover" style={{backgroundImage: `url(${url()+this.props.task.image_path}`}}>
                                </div>
                                <div className="task-description">
                                    {this.props.task.description}
                                </div>
                                <div className="task-image">
                                    <div className="image-preview">
                                        <div className="preview-inner" >
                                            <img className="preview-image" src={this.props.task.submission.image_path} />
                                        </div>
                                    </div>
                                </div>
                                <div className="task-note">
                                    <textarea name="task_note" disabled>
                                        {this.props.task.submission.note!=''?this.props.task.submission.note:'No notes given'}
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }
    closeTaskOverlay() {
        $("#taskviewoverlay .overlay-container").css({'margin-left': 'calc(100% + 40px)'});
        $("body").css('overflow', 'unset');
        setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('overlay'))},300);
    }
}

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionCurrent: 0,
            questions: []
        };
    }
    componentDidMount() {
        Axios.post(url()+'/api/appquestions', {
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        })
        .then(response => {
            this.setState({questions: response.data.questions});
        })
        .catch(error => {
            console.log(error);
       });
       this.setState({isLoading: false});
    }
    render() {
        const questionsList = this.state.questions.map((question) =>
            <QuestionCard key={question.id} question={question} />
        );
        const element = (
            <div className="block questions">
                <div className="question-empty">
                    <div className="empty-message">
                        You currently don't have any open questions.
                    </div>
                </div>
                <div className="questions-overlay">
                    <div className="questions-container" id="questionscontainer" style={{width: (this.state.questions.length * 100)+"%"}}>
                        {questionsList}
                    </div>
                </div>
            </div>
        );
        return element;
    }
    switchQuestion() {
        var container = $('#questionscontainer');
    }
}

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        };
    }
    render() {
        var question = this.props.question;
        var answers = '';
        if(question.answer_type == 'select' || question.answer_type == 'multiple') {
            var a = [];
            var res = question.answers.split(',');
            $(res).each(function(i, ans) {
                a.push(ans.split(':'));
            });
            const answersList = a.map((answer) =>
                <div className="select-option" key={answer}>
                    <div className="select-option-inner" data-accessor={answer[1]} onClick={(e) => {this.compileResults(e, answer[1])}}>
                        {answer[0]}
                    </div>
                </div>
            );
            answers = (
                <form method="POST" action="" className="form">
                    <input type="hidden" name="question-answer" className="select-hidden" id="answerinput"/>
                    <div className="answers">
                        <div className="select-field">
                            {answersList}
                        </div>
                    </div>
                    <div className="answer-submit">
                        <button className="submit-button" type="submit" name="answer_submit" disabled id="answersubmit">
                            LET'S GO!
                        </button>
                    </div>
                </form>
            );
        }
        const element = (
            <div className="question-card">
                <div className="card-inner">
                    <div className="question-title">
                        {question.title}
                    </div>
                    <div className="question-image background-cover" style={{backgroundImage: `url(${url()+question.background_image}`}}>
                    </div>
                    <div className="question-answers">
                        {answers}
                    </div>
                </div>
            </div>
        );
        return element;
    }
    compileResults(e, answer) {
        var input = $("#answerinput");
        var question = this.props.question;
        if(question.answer_type == 'select') {
            var form = $(e.target.closest('.question-card'));
            form.find('.select-option-inner').removeClass('selected');
            $(e.target).addClass('selected');
            form.find('#answerinput').val(answer);
            if(form.find('#answerinput').val()) {
                form.find('#answersubmit').attr('disabled', false);
                return;
            }
            form.find('#answersubmit').attr('disabled', true);
        }
        else if(question.answer_type == 'multiple') {
            var form = $(e.target.closest('.question-card'));
            $(e.target).toggleClass('selected');
            console.log(form.find('.select-option-inner.selected'));
            var answer = '';
            form.find('.select-option-inner.selected').each((i, ans) => {
                answer += $(ans).data('accessor')+',';
            });
            answer = answer.slice(0, -1);
            form.find('#answerinput').val(answer);
            if(form.find('#answerinput').val()) {
                form.find('#answersubmit').attr('disabled', false);
                return;
            }
            form.find('#answersubmit').attr('disabled', true);
        }
        // TODO: create other question types
    }
}



export {Profile, TaskCard, TaskActivity, Questions};
