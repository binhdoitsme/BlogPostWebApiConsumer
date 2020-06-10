import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div className={'comment-container ' + (this.props.isHidden ? "hidden" : "")}>
                <div className='comment-author'>
                    <span>Someone commented:</span>
                    <button className='delete-button' 
                        onClick={() => this.props.handleDeleteComment(this.props.id)}>
                        <i className="fas fa-trash fa-sm fa-fw"></i>
                    </button>
                </div>
                <div className='comment-content'>
                    {this.props.comment}
                </div>
            </div>
        );
    }
}