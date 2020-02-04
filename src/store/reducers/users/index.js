import {ADD_USER, UPDATE_USER, SET_CURRENT_USER} from "../../actions/users";
import {addUsersUtil, getNewRecordTimeUtil, setCurrentUserUtil, updateUsersUtil} from "../../../utils/users";

export const initialUsers = [
    {
        id: 0,
        name: 'Philip',
        recordTime: 43,
    },
    {
        id: 1,
        name: 'Tomas',
        recordTime: 59
    },
    {
        id: 2,
        name: 'Bob',
        recordTime: 34
    }
]

export const initialState = {
    users: [...initialUsers],
    currentUser: [...initialUsers][0]
};

export function usersReducers(state = initialState, action) {

    const users = state.users;

    const currentUser = state.currentUser;

    let newUser = {};
    let nameUser = '';
    let newUsers = [];

    switch (action.type) {

        case ADD_USER:

            nameUser = action.data;
            newUser = {name: nameUser, recordTime: undefined};
            newUsers = addUsersUtil(users, newUser);

            return {
                ...state,
                users: [...newUsers]
            }

        case UPDATE_USER:

            newUser = action.data;
            newUser = getNewRecordTimeUtil(currentUser, newUser);

            newUsers = updateUsersUtil(users, newUser);

            return {
                ...state,
                users: [...newUsers]
            }

        case SET_CURRENT_USER:

            newUser = action.data;

            return {
                ...state,
                currentUser: newUser
            }

        default:
            return state;
    }
}