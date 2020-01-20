import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Profile, TaskCard, ActivityFeed} from './components/AppHome.jsx';

ReactDOM.render(
    <div>
        <Profile />
        <ActivityFeed />
        <TaskCard />
    </div>,
    document.getElementById('root')
);
