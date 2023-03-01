import * as types from '../ActionTypes/usersActionTypes';

const initialState = {
    users: [],
}

const usersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.ADD_NEW_USER_START:
        case types.UPDATE_USER_START:
        case types.DELETE_USER_START:
            return {
                ...state,
            };
            case types.LOAD_USERS_SUCCESS:
                return {
                  ...state,
                  users: action.payload,
                };
        case types.ADD_NEW_USER_SUCCESS:
        case types.UPDATE_USER_SUCCESS:
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,  
                users: action.payload,
            };
        case types.LOAD_USERS_ERROR:
        case types.ADD_NEW_USER_ERROR:
        case types.UPDATE_USER_ERROR:
        case types.DELETE_USER_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default usersReducer;