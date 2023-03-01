import * as types from '../ActionTypes/usersActionTypes';


export const loadUsersStart = () => ({
    type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
});
  
export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error,
});

export const addNewUserStart = (newUser) => ({
    type: types.ADD_NEW_USER_START,
    payload: newUser,
});

export const addNewUserSuccess = () => ({
    type: types.ADD_NEW_USER_SUCCESS, 
});

export const addNewUserError = (error) => ({
    type: types.ADD_NEW_USER_ERROR,
    payload: error,
});

export const updateUserStart = (updateUser) => ({
    type: types.UPDATE_USER_START,
    payload: updateUser,
});

export const updateUserSuccess = () => ({
    type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
    type: types.UPDATE_USER_ERROR,
    payload: error,
});

export const deleteUserStart = (userId) => ({
    type: types.DELETE_USER_START,
    payload: userId,
});

export const deleteUserSuccess = (userId) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: userId,
});

export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
});

