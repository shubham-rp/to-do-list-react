import React from "react";
import { BsTrash } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";

function TodoItem({
  label,
  isCompleted,
  creationDate,
  creationTime,
  onToggleCompleted,
  onDeleteItem,
}) {
  return (
    <div className={isCompleted ? "todoItem-completed" : "todoItem"}>
      <div>
        <p className={isCompleted ? "label-completed" : "label"}>{label}</p>
        <p className="date-time">
          Created on {creationDate}
          <span> at {creationTime}</span>
        </p>
      </div>

      <button
        onClick={onToggleCompleted}
        className={
          isCompleted ? "checkmark-button-completed" : "checkmark-button"
        }
      >
        {isCompleted ? "Undo" : <FcCheckmark />}
      </button>
      <button className="delete-button" onClick={onDeleteItem}>
        <BsTrash />
      </button>
    </div>
  );
}

export default TodoItem;
