import React, { Component } from "react";
import { db } from "../api";

class CommentList extends Component {
    state = {
        comments: []
    }

    componentDidMount = async () => {
        const response = await db.get();
        this.setState({ comments: response.data })
    }

    onLikeClick = async (id) => {
        const response = await db.patch(`/like/${id}`);
        this.setState({ comments: response.data })
    }

    render() {
        console.log(this.state.comments)
        return (
            <div className="ui comments background-image" style={{ "maxWidth": "100%" }}>
                <h3 className="ui dividing header logo font">Comments</h3>
                {
                    this.state.comments.map(comment => {
                        return (
                            <div className="comment" style={{ "backgroundColor": "grey" }} key={`${comment._id}`}>
                                <div className="content">
                                    <a className="author font-size commentText comment-header">{comment.name}</a>
                                    <div className="text commentText comment-val">
                                        {comment.comment}
                                    </div>
                                    <div class="ui left labeled button" tabIndex="0" onClick={() => this.onLikeClick(comment._id)}>
                                        <a class="ui basic right pointing label">{comment.likes}</a>
                                        <div class="ui button"><i class="heart icon"></i> Like </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default CommentList
