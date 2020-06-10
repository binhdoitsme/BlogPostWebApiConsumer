import React, { Component } from 'react';

class PostInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props, 
            title: "",
            content: ""
        };
        this.handleCreatePost = () => {
            this.props.handleCreatePost(this.state.title, this.state.content);
            this.setState({
                title: "",
                content: ""
            });
        };
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleContentChange = (e) => {
        this.setState({ content: e.target.value });
    }

    render() {
        return (
            <div className="post-create">
                <input type="text" placeholder="Enter an interesting title..." value={this.state.title} onChange={this.handleTitleChange} />
                <textarea placeholder="What's on your mind?..." value={this.state.content} onChange={this.handleContentChange}></textarea>
                <button onClick={this.handleCreatePost}>Post</button>
            </div>
        )
    }
}

export default PostInput;