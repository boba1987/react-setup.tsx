import { USER_FETCH_SUCCEEDED, USER_FETCH_FAILED } from '../actions/types';

export default function loginReducer(state = {}, action: any) {
	switch (action.type) {
		case USER_FETCH_SUCCEEDED:
			return {
				...state,
				user: action.user,
				error: null
			};

		case USER_FETCH_FAILED:
			return {
				...state,
				error: action.error,
				user: null
			};
		default:
			return state;
	}
}