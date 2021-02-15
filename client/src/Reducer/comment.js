const INITIAL_STATE = { comment: '', commentList: [] }
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
    case `ADD_COMMENT`:
        return { ...state, comment: action.payload }

    case `COMMENTS_LIST`: 
        return { ...state, commentList: action.payload}
    }

    return state;
}   