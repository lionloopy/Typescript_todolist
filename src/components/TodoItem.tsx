import React from "react";
import "./TodoItem.css";

//todo에 대한 정보를 보여주는 컴포넌트

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(x)</span>
    </li>
  );
}

export default TodoItem;
