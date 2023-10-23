import "./App.css";
import React, { useState, useEffect } from "react";

import { Header, Form, TodoList } from "./components";

/*

Dummy input - for testing purpose

[
        { label: "Responsive Design", key: 1000, isCompleted: false },
        { label: "Delete Functionality", key: 1001, isCompleted: true },

        {
          label: "Toggle isCompleted Functionality",
          key: 1003,
          isCompleted: false,
        },
        {
          label: "Clear input field after adding new todo Item",
          key: 1004,
          isCompleted: false,
        },
        {
          label: "Add new item on pressing enter key",
          key: 1005,
          isCompleted: false,
        },
      ]

*/

function App() {
  const [todoList, setTodoList] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("todoList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleAddToDoItem = (todoItem) => {
    let date = new Date();
    setTodoList([
      {
        key: todoList.length + 1,
        label: todoItem,
        isCompleted: false,
        creationDate: date.toLocaleDateString(),
        creationTime: date.toLocaleTimeString("en-us", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      },
      ...todoList,
    ]);
  };
  const handleToggleCompleted = (index) => {
    let arr = [...todoList];
    if (arr[index].isCompleted) {
      arr[index].isCompleted = false;
    } else {
      arr[index].isCompleted = true;
    }
    setTodoList(arr);
  };

  const handleDeleteItem = (index) => {
    const arr = [...todoList];
    arr.splice(index, 1);
    setTodoList(arr);
  };

  return (
    <div className="App">
      <Header />
      <Form onAddToDoItem={handleAddToDoItem} />
      <TodoList
        todoList={todoList}
        onToggleCompleted={handleToggleCompleted}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
