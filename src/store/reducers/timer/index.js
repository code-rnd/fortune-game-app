import {SET_TIMER} from "../../actions/timer";

export const initialState = {
    params: {
        status: false,
        name: 'name',
        count: 0
    }
}

export function timerReducers(state = initialState, action) {

    const timer = state.params;
    let newTimer = {}

    switch (action.type) {

        case SET_TIMER:

            newTimer = action.data;

            return {
                ...state,
                ...{
                    params: {...timer, ...newTimer}
                }
            }

        default:
            return state;
    }
}