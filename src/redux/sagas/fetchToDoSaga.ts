import { call, put } from 'redux-saga/effects'
import Api from '../../services';
import { TO_DO_FETCH_FAILED, TO_DO_FETCH_SUCCEEDED } from '../actions/types';

function* fetchToDos(action: {accessToken: string, type: string}): any {
	try {
		const todos = yield call(Api.fetchToDos, action.accessToken);
		yield put({type: TO_DO_FETCH_SUCCEEDED, todos: todos.data});
	} catch (error) {
		/* @ts-ignore */
		yield put({type: TO_DO_FETCH_FAILED, error});
	}
}

export default fetchToDos;