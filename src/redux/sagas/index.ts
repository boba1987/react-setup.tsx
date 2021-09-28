import { takeLatest } from 'redux-saga/effects';
import fetchUser from './fetchUserSaga';
import { USER_FETCH_REQUESTED } from '../actions/types';

function* rootSaga() {
  yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}

export default rootSaga;