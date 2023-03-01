import Swal from "sweetalert2";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import * as types from "../ActionTypes/usersActionTypes";
import {  addNewUserError, addNewUserSuccess,  deleteUserError, deleteUserSuccess, loadUsersError, loadUsersSuccess, updateUserError, updateUserSuccess } from "../Actions/usersAction";
import { adduserApi, deleteUserApi, loadUsersApi, updateUserApi } from "../APis/usersApi";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});

export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        yield put(loadUsersSuccess(response.data));
        
    } catch (error) {
        yield put(loadUsersError(error.response));
    }
}


export function* onAddNewUserStartAsync({ payload }) {
    try {
        const response = yield call(adduserApi, payload);
        yield put(addNewUserSuccess(response.data));
        Toast.fire({
            icon: "success",
            title: "User created successfully",
        });
    } catch (error) {
        yield put(addNewUserError(error.response));
        Toast.fire({
            icon: "error",
            title: "error",
        });
    }
}

export function* onUpdateUserStartAsync({ payload }) {
    try {
        const response = yield call(updateUserApi, payload);
        yield put(updateUserSuccess(response.data));
        Toast.fire({
            icon: "success",
            title: "User updated successfully.",
        });
    } catch (error) {
        yield put(updateUserError(error.response));
        Toast.fire({
            icon: "error",
            title: error.response.data.errors.email,
        });
    }
}

export function* onDeleteUserStartAsync(user) {
    try {
        const response = yield call(deleteUserApi, user.payload);
            yield put(deleteUserSuccess(response.data));
            Toast.fire({
                icon: "success",
                title: "User deleted successfully.",
            });
    } catch (error) {
        yield put(deleteUserError(error.response));
    }
}

export function* onLoadUsers() {
    yield takeLatest(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onAddNewUser() {
    yield takeLatest(types.ADD_NEW_USER_START, onAddNewUserStartAsync);
}

export function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

export function* onDeleteUser() {
    yield takeLatest(types.DELETE_USER_START, onDeleteUserStartAsync);
}


const userSagas = [
    fork(onLoadUsers), 
    fork(onAddNewUser),
    fork(onUpdateUser),
    fork(onDeleteUser), 
]

export default function* userSaga() {
    yield all([...userSagas]);
}
