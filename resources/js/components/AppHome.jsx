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
            user: ''
        };
    }
    componentDidMount() {
        Axios.post(url()+'/api/homeprofile', {
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        })
        .then(response => {
            this.setState({user: response.data.user});
        })
        .catch(error => {
            console.log(error);
       });
       this.setState({isLoading: false});
    }
    async getUser() {

    }
    render() {
        const user = this.state.user;
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
                            420 enthousiast!, Nature lover, Peace, Stonner and Traveler #Livin'
                        </div>
                    </div>
                </div>
                <div className="profile-level">
                    <div className="level-top">
                        <div className="level-level">
                            LEVEL 1
                        </div>
                        <div className="level-experience">
                            EXP 25/100
                        </div>
                    </div>
                    <div className="level-bar">
                        <div className="bar-outer">
                            <div className="bar-inner">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }
}

class TaskCard extends React.Component {
    render() {
        const element = (
            <div className="block taskcard">
                <div className="card">
                    <div className="card-top">
                        <div className="card-name">Current Task</div><div className="card-time">1min ago</div><div className="card-page">1/1</div>
                    </div>
                    <div className="card-body">
                        <div className="card-question">
                            Buy someone a drink to level up and unlock next stage.
                        </div>
                        <div className="card-description">
                            Upload an image to confirm you've completed the task.
                        </div>
                        <div className="card-action">
                            <div className="action-button theme-button-full" onClick={(e) => this.openUpload(e)}>
                                UPLOAD IMAGE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }

    openUpload() {
        alert('Upload image sample');
    }
}

class RecentActivity extends React.Component {
    render() {
        const element = (
            <div className="timeline">
                <div className="timeline-activity">
                    <div className="activity-header">
                        <div className="header-timestamp">
                            <i className="far fa-clock"></i> Thur 19 Apr 2018, 2 mins ago
                        </div>
                        <div className="header-options">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="activity-body">
                        <div className="activity-image background-cover" style={{backgroundImage: `url(${url()}/images/activity01.jpeg)`}}>
                        </div>
                    </div>
                </div>
                <div className="timeline-activity">
                    <div className="activity-header">
                        <div className="header-timestamp">
                            <i className="far fa-clock"></i> Thur 19 Apr 2018, 2 mins ago
                        </div>
                        <div className="header-options">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="activity-body">
                        <div className="activity-image background-cover" style={{backgroundImage: `url(${url()}/images/activity01.jpeg)`}}>
                        </div>
                    </div>
                </div>
                <div className="timeline-activity">
                    <div className="activity-header">
                        <div className="header-timestamp">
                            <i className="far fa-clock"></i> Thur 19 Apr 2018, 2 mins ago
                        </div>
                        <div className="header-options">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="activity-body">
                        <div className="activity-image background-cover" style={{backgroundImage: `url(${url()}/images/activity01.jpeg)`}}>
                        </div>
                    </div>
                </div>
                <div className="timeline-activity">
                    <div className="activity-header">
                        <div className="header-timestamp">
                            <i className="far fa-clock"></i> Thur 19 Apr 2018, 2 mins ago
                        </div>
                        <div className="header-options">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="activity-body">
                        <div className="activity-image background-cover" style={{backgroundImage: `url(${url()}/images/activity01.jpeg)`}}>
                        </div>
                    </div>
                </div>
                <div className="timeline-activity">
                    <div className="activity-header">
                        <div className="header-timestamp">
                            <i className="far fa-clock"></i> Thur 19 Apr 2018, 2 mins ago
                        </div>
                        <div className="header-options">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="activity-body">
                        <div className="activity-image background-cover" style={{backgroundImage: `url(${url()}/images/activity01.jpeg)`}}>
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }
}

class FriendActivity extends React.Component {
    render() {
        const element = (
            <div className="timeline">
                <div className="timeline-activity">
                    <div className="activity-header">
                        <div className="header-timestamp">
                            <i className="far fa-clock"></i> Thur 19 Apr 2018, 2 mins ago
                        </div>
                        <div className="header-options">
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="activity-body">
                        <div className="activity-image background-cover" style={{backgroundImage: `url(${url()}/images/activity01.jpeg)`}}>
                        </div>
                    </div>
                </div>
            </div>
        );
        return element;
    }
}

class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabCurrent: 0}
    }
    render() {
        const element = (
            <div className="block activityfeed">
                <div className="activityfeed-header">
                    <div className="header-tab" onClick={(e) => this.switchTab(e, 0)}>
                        RECENT ACTIVITY
                    </div>
                    <div className="header-tab" onClick={(e) => this.switchTab(e, 1)}>
                        TEST
                    </div>
                    <div className="header-tab" onClick={(e) => this.switchTab(e, 2)}>
                        FRIENDS
                    </div>
                    <div className="header-current" id="tabbar">
                    </div>
                </div>
                <div className="activity">
                    <div className="tabs" id="tabslider">
                        <div className="tab">
                            <RecentActivity />
                        </div>
                        <div className="tab">
                            test tab 2
                        </div>
                        <div className="tab">
                            <FriendActivity />
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
        tabBar.css({"margin-left": (this.state.tabCurrent * (100/3))+"%"});
        console.log(this.state.tabCurrent);
    }
}

export {Profile, TaskCard, ActivityFeed};
