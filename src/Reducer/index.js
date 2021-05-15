import {combineReducers} from 'redux'
import authInfo from './auth'
import commentInfo from './comment'

export default combineReducers({
    auth: authInfo,
    comment: commentInfo
})