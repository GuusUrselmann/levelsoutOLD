import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Profile, TaskCard, TaskActivity} from './components/AppHome.jsx';

ReactDOM.render(
    <div>
        <Profile />
        <TaskActivity />
    </div>,
    document.getElementById('root')
);
