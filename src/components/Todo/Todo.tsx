import React, {memo} from 'react';
import styles from './Todo.module.scss';
import ToDoInterface from '../../models/ToDo.interface';

const Todo = ({id, done, title, description, createdAt, updatedAt}: ToDoInterface) => (
  <div className={styles.Todo}>
    <p>id: {id}</p>
    <p>title: {title}</p>
    <p>title: {description}</p>
    <p>createdAt: {createdAt}</p>
    <p>updatedAt: {updatedAt}</p>
    <p>done: {done}</p>
    
  </div>
);

export default memo(Todo);
