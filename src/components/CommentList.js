import React, { Component } from 'react';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class CommentList extends Component {
    render() {
        return (
            <>
                <div className='comment-label' onClick={this.props.toggleHidden}>
                    <FontAwesomeIcon icon={this.props.isHidden ? faAngleDown : faAngleUp} />
                    <span>Comments ({this.props.comments.length})</span>
                </div>
                {this.props.comments.map(cmt => <Comment isHidden={this.props.isHidden} comment={cmt.comment} key={cmt.id} handleDeleteComment={this.props.handleDeleteComment} id={cmt.id} />)}
            </>
        );
    }
}