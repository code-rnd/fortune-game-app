export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const addUser = name => ({
    type: ADD_USER,
    data: name
})

export const updateUser = user => ({
    type: UPDATE_USER,
    data: user
})

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    data: user
})