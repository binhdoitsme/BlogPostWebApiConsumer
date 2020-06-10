import React, { Component } from 'react';

export default class WindowBar extends Component {
    render() {
        return (
            <div className='window-decorator-container'>
            <div className='lbl'>A small blog</div>
            <div className='window-btn-group'>
                <button>―</button>
                <button>□</button>
                <button>×</button>
            </div>
        </div>
        );
    }
}