import {combineReducers} from 'redux'

import {profileReducer as profile} from './profile'
import { animatedReducer as animate } from "./animate";
import {postsReducer as posts} from './posts'

export const reducers = combineReducers({
    profile,
    animate,
    posts
})