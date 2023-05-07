import React from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "../context/TodosContext";

//todoItem들이 여러개 모여있는 목록 컴포넌트
function TodoList() {
  const todos = useTodoState();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
