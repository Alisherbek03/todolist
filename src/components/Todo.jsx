const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      > {task.task}
      </p>
      <div className="todo-list-btn">
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => editTodo(task.id)}
        ></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteTodo(task.id)}
        ></i>
      </div>
    </div>
  );
};

export default Todo;


