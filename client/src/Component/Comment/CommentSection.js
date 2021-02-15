import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ADD_COMMENT, UPDATE_COMMENTS_LIST } from '../../Action'
import CommentList from "./commentList";
import { db } from "../api";

class CommentSection extends Component {
    constructor() {
        super()
        this.state = {
            error: null,
            comment: null
        }
        this.commentInput = React.createRef()
        this.errorObj = {
            COMMENT_ERROR: 'Comment should never be blank',
            SIGNIN_ERROR: 'Sign in to add a comment'
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isSignedIn !== prevProps.isSignedIn) {
            if (this.props.isSignedIn)
                this.setState({ error: null })
        }
    }

    validateInput = () => {
        this.setState({
            comment: this.commentInput.current.value
        }, () => {
            this.props.ADD_COMMENT(this.state.comment)
        })
    }

    addCommentToDB = async () => {
        const { userName, userId } = this.props;
        const date = new Date().toDateString()

        await db.post(``, {
            userName,
            userId,
            date,
            comment: this.state.comment,
            time: new Date().getTime()
        }).then(async () => {
            const response = await db.get();
            console.log(response.data, `data`)
            this.props.UPDATE_COMMENTS_LIST(response.data)
            this.setState({ comment: null })
        })
    }

    onSubmit = e => {
        if (!this.state.comment) {
            this.setState({ error: 'COMMENT_ERROR' })
        } else {
            this.props.ADD_COMMENT(this.state.comment)
            this.addCommentToDB();
            this.setState({ error: null })
        }
        if (!this.props.isSignedIn) {
            this.setState({ error: 'SIGNIN_ERROR' })
        }
    }

    render() {
        return (
            <div>
                <div className="ui fluid action input">
                    <input type="text"
                        placeholder="tell us why you love marvel..."
                        ref={this.commentInput}
                        onChange={this.validateInput}
                    />
                    <div className="ui button" onClick={this.onSubmit}>Submit</div>
                </div>
                {
                    this.state.error ? <div className="ui negative message">
                        <div className="header">
                            {this.errorObj[this.state.error]}
                        </div>
                    </div> : null
                }
                < CommentList />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        userId: state.auth.userId,
        userName: state.auth.userName,
        isSignedIn: state.auth.isSignedIn,
        comment: state.comment
    }
}

export default connect(mapStateToProps, { ADD_COMMENT, UPDATE_COMMENTS_LIST })(CommentSection);