import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props, isCommentListHidden: true };
        this.toggleHidden = this.toggleHidden.bind(this);
        this.handleAddComment = (comment) => {
            this.props.handleAddComment(this.props.id, comment);
        };
    }
    
    toggleHidden() {
        this.setState({ isCommentListHidden: !this.state.isCommentListHidden });
    }

    render() {
        return (
            <div className='post-container'>
                <div className='author-portion'>
                    <div>
                        <div className='avatar'>

                        </div>
                        <div className='author-name'>
                            AnAwesomeAuthor
                        </div>
                    </div>
                    <button className='delete-button' 
                        onClick={() => this.props.handleDeletePost(this.props.id)}>
                        <i className="fas fa-trash fa-sm fa-fw"></i>
                    </button>
                </div>
                
                <div className='content-portion'>
                    <div className='post-title'>
                        {this.props.title}
                    </div>
                    <div className='post-content'>
                        {this.props.content}
                    </div>
                </div>
                <div className='comment-portion'>
                    <CommentList toggleHidden={this.toggleHidden} isHidden={this.state.isCommentListHidden} comments={this.props.comments} handleDeleteComment={this.props.handleDeleteComment} />
                    <CommentInput handleAddComment={this.handleAddComment} />
                </div>
            </div>
        );
    }
}