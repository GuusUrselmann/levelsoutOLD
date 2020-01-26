import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useSwipeable, Swipeable } from 'react-swipeable';
import Axios from "axios";

class Submissions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submissions: []
        };
    }
    componentDidMount() {
        this.getSubmissions();
        setInterval(() => {this.getSubmissions()}, 10000);
        this.setState({isLoading: false});
    }
    getSubmissions() {
        Axios.post(url()+'/api/admindashboardsubmissions', {
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        })
        .then(response => {
            this.setState({submissions: response.data.submissions});
        })
        .catch(error => {
            console.log(error);
       });
    }
    render() {
        var submissions = this.state.submissions;
        const submissionCards = submissions.map((submission) =>
            <SubmissionCard key={submission.id} submission={submission} />
        );
        const element = (
            <div className="content-block" id="submissions">
                <div className="block-header">
                    <div className="block-title">task submissions</div>
                </div>
                <div className="block-body">
                    <div className="submissions">
                        <div className="submissions-container" id="submissions">
                            {submissionCards}
                        </div>
                        <div className="submission-view">
                            <div className="view-container">
                                <div className="container-header">
                                    Task submission view
                                </div>
                                <div className="submission-fields" id="submissionview">
                                    <div className="submission-image">
                                        <img className="image" />
                                    </div>
                                    <div className="submission-task">
                                        <div className="task-header">
                                            Task
                                        </div>
                                        <div className="task-title">
                                        </div>
                                        <div className="task-description">
                                        </div>
                                        <div className="submission-note-title">
                                            Notes:
                                        </div>
                                        <div className="submission-note">

                                        </div>
                                    </div>
                                    <div className="submission-user">
                                        <div className="user-header">
                                            User
                                        </div>
                                        <div className="user-name">
                                        </div>
                                        <div className="user-description">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }
}

class SubmissionCard extends React.Component {
    render() {
        const element = (
            <div className={'submission-card card-'+ this.props.submission.id}>
                <div className="submission-background background-cover" style={{backgroundImage: `url(${this.props.submission.image_path}`}}>
                    <div className="submission-header">
                        <div className="header-user">From: {this.props.submission.user.name}</div>
                        <div className="header-expand" onClick={(e) => this.fullImage(this.props.submission)}><i className="fas fa-expand"></i></div>
                    </div>
                    <div className="submission-body" onClick={(e) => this.viewSubmission(this.props.submission)}>
                    </div>
                    <div className="submission-footer">
                        <div className="submission-deny" onClick={(e)=>this.submitStatus(this.props.submission, 'denied')}><i className="fas fa-times"></i></div>
                        <div className="submission-accept"onClick={(e)=>this.submitStatus(this.props.submission, 'accepted')}><i className="fas fa-check"></i></div>
                    </div>
                </div>
            </div>
        );
        return element;
    }
    viewSubmission(submission) {
        var view = $("#submissionview");
        view.find(".submission-image img").attr('src', submission.image_path);
        view.find(".task-title").text(submission.task.title);
        view.find(".task-description").text(submission.task.description);
        view.find(".submission-note").text((submission.note!= ''? submission.note: 'No notes'));
        view.find(".user-name").text(submission.user.name);
        view.find(".user-description").text(submission.user.description);

    }
    fullImage(submission) {
        //add full image overlay to screen
    }
    submitStatus(submission, status) {
        //make api post to approve or deny (with message why if denied)
        //remove from list of submissions
        Axios.post(url()+'/api/admindashboardsubmissionssubmit', {
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
            submission_id: submission.id,
            status: status
        })
        .then(response => {
            $(".submission-card.card-"+submission.id).remove();
        })
        .catch(error => {
            console.log(error);
       });
    }
}

export {Submissions};
