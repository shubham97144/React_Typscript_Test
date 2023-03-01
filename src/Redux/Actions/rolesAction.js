import * as types from '../ActionTypes/rolesActionTypes';


export const loadRolesStart = () => ({
    type: types.LOAD_ROLES_START,
});

export const loadRolesSuccess = (Roles) => ({
    type: types.LOAD_ROLES_SUCCESS,
    payload: Roles,
});
  
export const loadRolesError = (error) => ({
    type: types.LOAD_ROLES_ERROR,
    payload: error,
});

export const addNewRolestart = (newRole) => ({
    type: types.ADD_NEW_ROLE_START,
    payload: newRole,
});

export const addNewRolesuccess = () => ({
    type: types.ADD_NEW_ROLE_SUCCESS, 
});

export const addNewRoleError = (error) => ({
    type: types.ADD_NEW_ROLE_ERROR,
    payload: error,
});

export const updateRolestart = (updateRole) => ({
    type: types.UPDATE_ROLE_START,
    payload: updateRole,
});

export const updateRolesuccess = () => ({
    type: types.UPDATE_ROLE_SUCCESS,
});

export const updateRoleError = (error) => ({
    type: types.UPDATE_ROLE_ERROR,
    payload: error,
});

export const deleteRolestart = (userId) => ({
    type: types.DELETE_ROLE_START,
    payload: userId,
});

export const deleteRolesuccess = (userId) => ({
    type: types.DELETE_ROLE_SUCCESS,
    payload: userId,
});

export const deleteRoleError = (error) => ({
    type: types.DELETE_ROLE_ERROR,
    payload: error,
});

