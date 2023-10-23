import React, { useState } from "react";

function Form({ onAddToDoItem }) {
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (event) => {
    setTodoValue(event?.target?.value);
  };

  const handleAddToDoItem = () => {
    if (todoValue !== "") {
      onAddToDoItem(todoValue);
      setTodoValue("");
    }
  };

  return (
    <div className="form">
      <input
        value={todoValue}
        className="input"
        placeholder="Add Task"
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddToDoItem();
          }
        }}
      />
      <button className="button" onClick={handleAddToDoItem}>
        Add
      </button>
    </div>
  );
}

export default Form;
