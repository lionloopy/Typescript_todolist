import React from "react";
import "./TodoItem.css";
import { useTodosDispatch } from "../context/TodosContext";

//todo에 대한 정보를 보여주는 컴포넌트

export type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  const onToggleHandler = () => {
    dispatch({
      type: "TOGGLE",
      id: todo.id,
    });
  };

  const onRemoveHandler = () => {
    dispatch({
      type: "REMOVE",
      id: todo.id,
    });
  };

  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text" onClick={onToggleHandler}>
        {todo.text}
      </span>
      <span className="remove" onClick={onRemoveHandler}>
        (x)
      </span>
    </li>
  );
}

export default TodoItem;
