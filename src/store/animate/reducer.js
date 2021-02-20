import { animateActionTypes } from "./actions"

const initialState = {
    startAnimate: false
}

export const animatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case animateActionTypes.SET_START_ANIMATE:
            return { ...state, startAnimate: action.payload }

        default:
            return state
    }
}
