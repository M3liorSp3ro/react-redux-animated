export const postsActionsTypes = {
    SET_POSTS: 'POSTS.SET_POSTS',
    CLEAR: 'POSTS.CLEAR',
    SET_LOADING: 'POSTS.SET_LOADING'
}

export const postsActions = {
    setPosts: (posts) => ({ type: postsActionsTypes.SET_POSTS, payload: posts }),
    setLoadind: (loading) => ({ type: postsActionsTypes.SET_LOADING, payload: loading }),
    clear: () => ({ type: postsActionsTypes.CLEAR }),

    fetchPosts: () => async (dispatch) => {
        dispatch(postsActions.setLoadind(true))
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
            const posts = await res.json()

            dispatch(postsActions.setPosts(posts))
        } catch (e) {
            console.log(e.message)
        } finally {
            dispatch(postsActions.setLoadind(false))
        }
    }
}