import React from "react";
import TodoItem from "../todoitem";

function TodoList({ todoList = [], onToggleCompleted, onDeleteItem }) {
  return (
    <div className="todoList">
      {todoList
        .sort(
          (item1, item2) =>
            Number(item1.isCompleted) - Number(item2.isCompleted) // to sort todoList into completed & not completed items
        )
        .map((todoItem, index) => {
          return (
            <TodoItem
              {...todoItem}
              onToggleCompleted={() => {
                onToggleCompleted(index);
              }}
              onDeleteItem={() => {
                onDeleteItem(index);
              }}
            />
          );
        })}
    </div>
  );
}

export default TodoList;
