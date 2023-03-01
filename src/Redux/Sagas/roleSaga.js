import Swal from "sweetalert2";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import * as types from "../ActionTypes/rolesActionTypes";
import { addNewRoleError, addNewRolesuccess, deleteRoleError, deleteRolesuccess, loadRolesError, loadRolesSuccess, updateRoleError, updateRolesuccess } from "../Actions/rolesAction";
import { addRoleApi, deleteRoleApi, loadRolesApi, updateRoleApi } from "../APis/rolesApi";


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});
export function* onLoadrolesStartAsync() {
    try {
        const response = yield call(loadRolesApi);
        yield put(loadRolesSuccess(response.data));
        
    } catch (error) {
        yield put(loadRolesError(error.response));
    }
}


export function* onAddNewRoleStartAsync({ payload }) {
    try {
        const response = yield call(addRoleApi, payload);
        yield put(addNewRolesuccess(response.data));
        Toast.fire({
            icon: "success",
            title: "role created successfully",
        });
    } catch (error) {
        yield put(addNewRoleError(error.response));
        Toast.fire({
            icon: "error",
            title: "error",
        });
    }
}

export function* onUpdateRoleStartAsync({ payload }) {
    try {
        const response = yield call(updateRoleApi, payload);
        yield put(updateRolesuccess(response.data));
        Toast.fire({
            icon: "success",
            title: "role updated successfully.",
        });
    } catch (error) {
        yield put(updateRoleError(error.response));
        Toast.fire({
            icon: "error",
            title: error.response.data.errors.email,
        });
    }
}

export function* onDeleteRoleStartAsync(user) {
    try {
        const response = yield call(deleteRoleApi, user.payload);
        Toast.fire({
            icon: "success",
            title: "role deleted successfully.",
        });
            yield put(deleteRolesuccess(response.data));
           
    } catch (error) {
        yield put(deleteRoleError(error.response));
    }
}

export function* onLoadRoles() {
    yield takeLatest(types.LOAD_ROLES_START, onLoadrolesStartAsync);
}

export function* onAddNewRole() {
    yield takeLatest(types.ADD_NEW_ROLE_START, onAddNewRoleStartAsync);
}

export function* onUpdateRole() {
    yield takeLatest(types.UPDATE_ROLE_START, onUpdateRoleStartAsync);
}

export function* onDeleteRole() {
    yield takeLatest(types.DELETE_ROLE_START, onDeleteRoleStartAsync);
}


const roleSagas = [
    fork(onLoadRoles), 
    fork(onAddNewRole),
    fork(onUpdateRole),
    fork(onDeleteRole), 
]

export default function* roleSaga() {
    yield all([...roleSagas]);
}
