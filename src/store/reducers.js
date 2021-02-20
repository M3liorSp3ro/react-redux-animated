import {combineReducers} from 'redux'

import {profileReducer as profile} from './profile'
import { animatedReducer as animate } from "./animate";

export const reducers = combineReducers({
    profile,
    animate
})