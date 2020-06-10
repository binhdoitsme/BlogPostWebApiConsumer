import React from 'react';
import WindowBar from './components/WindowBar';
import Post from './components/Post';
import Pagination from './components/Pagination';
import PostInput from './components/PostInput';

const HOSTNAME = "https://localhost:5001";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props, postList: [], firstPage: '', lastPage: '' };

        this.handleNextClick = () => {
            const currentPage = this.state.currentPage;
            if (currentPage >= this.state.lastPage) {
                return;
            }
            const newCurrPage = currentPage + 1;
            this.updatePostList(newCurrPage);
        };

        this.handlePrevClick = () => {
            const currentPage = this.state.currentPage;
            if (currentPage <= 1) {
                return;
            }
            const newCurrPage = currentPage - 1;
            this.updatePostList(newCurrPage);
        };

        this.handleAddComment = (postId, comment) => {
            // handle POST fetch call
            fetch(`${HOSTNAME}/posts/${postId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    comment: comment
                })
            }).then(() => this.updatePostList(this.state.currentPage));
        };

        this.handleDeletePost = postId => {
            fetch(`${HOSTNAME}/posts/${postId}`, {
                method: "DELETE"
            }).then(() => this.updatePostList(this.state.currentPage,false));
        };

        this.handleDeleteComment = commentId => {
            fetch(`${HOSTNAME}/comments/${commentId}`, {
                method: "DELETE"
            }).then(() => this.updatePostList(this.state.currentPage, false));
        };

        this.handleCreatePost = (title, content) => {
            fetch(`${HOSTNAME}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    content: content
                })
            }).then(() => this.updatePostList(this.state.firstPage.replace(`${HOSTNAME}/posts?page=`, "")));
        };
    }

    updatePostList(newCurrPage, toTop=true) {
        fetch(`${HOSTNAME}/posts?page=${newCurrPage}`)
            .then(res => res.json())
            .then(json => {
                if (toTop)
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                this.setState({
                    postList: json.data,
                    firstPage: json.pagination.firstPage,
                    lastPage: json.pagination.lastPage,
                    currentPage: json.pagination.currentPage
                });
            });
    }

    componentDidMount() {
        fetch(`${HOSTNAME}/posts`)
            .then(res => res.json())
            .then(json => this.setState({
                postList: json.data,
                firstPage: json.pagination.firstPage,
                lastPage: json.pagination.lastPage,
                currentPage: json.pagination.currentPage
            }));
    }

    render() {
        return (
            <>
                <WindowBar />
                <PostInput handleCreatePost={this.handleCreatePost} />
                {this.state.postList.map(data => <Post title={data.post.title}
                    content={data.post.content}
                    comments={data.post.comments}
                    key={data.post.id}
                    id={data.post.id}
                    handleAddComment={this.handleAddComment}
                    handleDeleteComment={this.handleDeleteComment}
                    handleDeletePost={this.handleDeletePost} />)}
                <Pagination handlePrevClick={this.handlePrevClick} handleNextClick={this.handleNextClick}
                    isPrevDisabled={this.state.firstPage.replace(`${HOSTNAME}/posts?page=`, "") === "" + this.state.currentPage}
                    isNextDisabled={this.state.lastPage.replace(`${HOSTNAME}/posts?page=`, "") === "" + this.state.currentPage} />
            </>
        )
    }
}

export default App;
