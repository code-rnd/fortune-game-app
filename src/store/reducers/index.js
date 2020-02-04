import {combineReducers} from 'redux'
import {cardsReducers} from "./cards";
import {timerReducers} from "./timer";
import {usersReducers} from "./users";

export const reducers = combineReducers({
    'content': cardsReducers,
    'timer': timerReducers,
    'users': usersReducers
})