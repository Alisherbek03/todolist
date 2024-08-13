import { useState } from "react";

const TodoFrom = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        className="todo-input"
        placeholder="Write todo"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoFrom;
