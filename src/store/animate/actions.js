export const animateActionTypes = {
    SET_START_ANIMATE: 'ANIMATE.SET_START_ANIMATE'
}

export const animateAction = {
    setStartAnimate: (isAnimate) => ({type: animateActionTypes.SET_START_ANIMATE, payload: isAnimate})
}