import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader, PageAnimated } from '../../components'
import { postsActions } from '../../store/posts'

import './style.css'

export const DataList = () => {

    const dispatch = useDispatch()
    const { posts, loading } = useSelector((store) => store.posts)

    useEffect(() => {
        dispatch(postsActions.fetchPosts())
    }, [])

    return (
        <>{!loading
            ? <PageAnimated>
                <div className="data-list">
                    {posts.map((post, i) => (
                        <div
                            key={i}
                            className={`block ${(i % 2 === 0) ? 'block-right' : 'block-left'}`}
                        >
                            <span>
                                {post.title}
                            </span>
                        </div>
                    ))}
                </div>
            </PageAnimated>
            : <Loader />
        }
        </>
    )
}