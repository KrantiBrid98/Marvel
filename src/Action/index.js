export const SIGN_IN = (userId, userName) => {
    return {
        type: 'SIGN_IN',
        payload: { userId, userName }
    }
}

export const SIGN_OUT = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const ADD_COMMENT = comment => {
    return {
        type: 'ADD_COMMENT',
        payload: comment
    }
}