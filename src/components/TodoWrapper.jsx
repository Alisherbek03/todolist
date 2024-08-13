import { useState } from "react";
import TodoFrom from "./TodoFrom";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoFrom from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo === "") {
      alert("Input bo'sh bo'lishi mumkin emas");
    } else {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todowrapper">
      <h1> Todo List</h1>
      <TodoFrom addTodo={addTodo} />
      {todos.map((todo, index) => {
        return todo.isEditing ? (
          <EditTodoFrom editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={() => editTodo(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
