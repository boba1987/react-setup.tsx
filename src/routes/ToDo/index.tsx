import React, {useContext, useEffect} from 'react';
import { TO_DO_FETCH_REQUESTED } from '../../redux/actions/types';
import { useDispatch, useSelector } from 'react-redux';
import ToDoInterface from '../../models/ToDo.interface';
import { AuthContext } from '../../context/authContext';

export default ()=> {
	const token = useContext(AuthContext);
	const dispatch = useDispatch();
	const todos = useSelector((state: {todos: ToDoInterface[]}) => state.todos);

	useEffect(() => {
		dispatch({type: TO_DO_FETCH_REQUESTED, accessToken: token?.authTokens?.accessToken})
	}, [dispatch, token]);

	return <>
		<h1>To do page</h1>
		<ul>
		{
			todos?.map((todo: ToDoInterface)=> 
				<li key={todo.id}>
					{todo.id} {todo.title}
				</li>)
		}
		</ul>
	</>
};
