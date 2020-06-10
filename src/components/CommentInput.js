import React, { Component } from 'react';

export default class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state  = { ...props, value: "" };
        this.handleAddComment = () => {
            this.props.handleAddComment(this.state.value);
            this.setState({ value: "" });
        };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className='add-comment'>
                <input className="comment-input" type="text" name="comment" placeholder="Leave a comment..." 
                        value={this.state.value} onChange={this.handleChange} />
                <button className='send-button' 
                        onClick={this.handleAddComment}>
                    <i className="far fa-paper-plane fa-sm fa-fw"></i>
                </button>
            </div>
        );
    }
}