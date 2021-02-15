import React, { Component } from "react";
import { UPDATE_COMMENTS_LIST } from '../../Action'
import { connect } from "react-redux";
import { db } from "../api";

class CommentList extends Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        const response = await db.get();
        this.props.UPDATE_COMMENTS_LIST(response.data)
        this.setState({ comments: response.data })
    }

    componentDidUpdate = async (prevProp, prevState) => {
        console.log(this.props.commentList !== this.state.comments)
        // if (this.state.comments !== this.props.commentList) {
        if (this.props.commentList !== this.state.comments) {
            this.setState({ comments: this.props.commentList })
        }
    }

    onLikeClick = async (id) => {
        const response = await db.patch(`/like/${id}`);
        this.setState({ comments: response.data })
    }

    onDeleteClick = async (id) => {
        const response = await db.delete(`/${id}`);
        this.setState({ comments: response.data })
    }

    onDislikeClick = async (id) => {
        const response = await db.patch(`/dislike/${id}`);
        this.setState({ comments: response.data })
    }

    render() {
        return (
            <div className="ui comments background-image" style={{ "maxWidth": "100%" }}>
                <h3 className="ui dividing header logo font">Comments</h3>
                {
                    this.state.comments.map(comment => {
                        return (
                            <div className="commentBlock comment-background-image">
                                <div className="user-name">{comment.userName}<span className="user-comment-time">{comment.date}</span></div>
                                <div className="user-comment">{comment.comment}</div>
                                <button className="like-button" onClick={e => this.onLikeClick(comment.commentId)}>🤍 <span>{comment.likes}</span></button>
                                <button className="like-button" onClick={e => this.onDislikeClick(comment.commentId)}>💔 <span>{comment.dislike}</span></button>
                                {
                                    this.props.userId === comment.userId ?
                                        <button className="like-button dustbin-button"
                                            onClick={e => this.onDeleteClick(comment.commentId)}>🗑️</button>
                                        : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        commentList: state.comment.commentList
    }
}
export default connect(mapStateToProps, { UPDATE_COMMENTS_LIST })(CommentList)
