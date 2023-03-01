import { all } from 'redux-saga/effects';
import roleSaga from './roleSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
   yield all([
        userSaga(),
        roleSaga(),
   
   ]);
}