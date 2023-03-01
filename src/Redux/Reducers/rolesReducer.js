import * as types from '../ActionTypes/rolesActionTypes';

const initialState = {
    roles: [],
}

const rolesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.LOAD_ROLES_START:
        case types.ADD_NEW_ROLE_START:
        case types.UPDATE_ROLE_START:
        case types.DELETE_ROLE_START:
            return {
                ...state,
            };
            case types.LOAD_ROLES_SUCCESS:
                return {
                  ...state,
                  roles: action.payload,
                };
        case types.ADD_NEW_ROLE_SUCCESS:
        case types.UPDATE_ROLE_SUCCESS:
        case types.DELETE_ROLE_SUCCESS:
            return {
                ...state,  
                roles: action.payload,
            };
        case types.LOAD_ROLES_ERROR:
        case types.ADD_NEW_ROLE_ERROR:
        case types.UPDATE_ROLE_ERROR:
        case types.DELETE_ROLE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default rolesReducer;