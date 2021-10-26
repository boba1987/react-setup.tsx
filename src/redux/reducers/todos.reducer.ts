import { TO_DO_FETCH_SUCCEEDED } from "../actions/types";
import ToDoInterface from "../../models/ToDo.interface";

const initialState: ToDoInterface[] = [];
export default (state = initialState, action: {type: string, todos: ToDoInterface[]})=> {
	switch (action.type) {
		case TO_DO_FETCH_SUCCEEDED:
			return action.todos;

		default:
			return state;
	}
}