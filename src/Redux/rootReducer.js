import { combineReducers } from "redux";
import rolesReducer from "./Reducers/rolesReducer";

import usersReducer from "./Reducers/usersReducer";


const rootReducer = combineReducers({
    users: usersReducer,
    roles: rolesReducer,
})

export default rootReducer;