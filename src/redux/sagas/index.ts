import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../services';

function* fetchUser(action: {payload: any, type: string}): any {
	try {
		const user = yield call(Api.fetchUser, {...action.payload, strategy: 'local'});
		yield put({type: "USER_FETCH_SUCCEEDED", user: user});
	} catch (e) {
		/* @ts-ignore */
		yield put({type: "USER_FETCH_FAILED", message: e.message});
	}
}

function* rootSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default rootSaga;