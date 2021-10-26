interface ToDoInterface {
  id: number,
  done: boolean,
  title: string,
  description: string,
  createdAt?: Date,
  updatedAt?: Date
};

export default ToDoInterface;