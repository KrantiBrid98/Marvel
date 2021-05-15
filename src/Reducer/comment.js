const INITIAL_STATE = { comment: '' }
export default (state = INITIAL_STATE, action) => {
    if (action.type === 'ADD_COMMENT') {
        return { ...state, comment: action.payload }
    }
    return state;
}