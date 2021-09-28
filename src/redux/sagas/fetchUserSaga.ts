import { call, put } from 'redux-saga/effects'
import Api from '../../services';
import { USER_FETCH_FAILED, USER_FETCH_SUCCEEDED } from '../actions/types';

function* fetchUser(action: {payload: { email: string, password: string }, type: string}): any {
	try {
		const user = yield call(Api.fetchUser, {...action.payload, strategy: 'local'});
		yield put({type: USER_FETCH_SUCCEEDED, user});
	} catch (error) {
		/* @ts-ignore */
		yield put({type: USER_FETCH_FAILED, error});
	}
}

export default fetchUser;