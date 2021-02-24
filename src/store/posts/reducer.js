import { postsActionsTypes } from './actions'

const initialState = {
    posts: [],
    loading: false
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case postsActionsTypes.SET_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        case postsActionsTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case postsActionsTypes.CLEAR:
            return {
                ...state, posts: []
            }

        default:
            return state
    }
}