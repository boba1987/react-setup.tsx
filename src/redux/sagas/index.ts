import { takeLatest } from 'redux-saga/effects';
import fetchUser from './fetchUserSaga';
import fetchToDos from './fetchToDoSaga';
import { USER_FETCH_REQUESTED, TO_DO_FETCH_REQUESTED } from '../actions/types';

function* rootSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
  yield takeLatest(TO_DO_FETCH_REQUESTED, fetchToDos);
}

export default rootSaga;