import React from "react";
import TodoItem from "./TodoItem";

//todoItem들이 여러개 모여있는 목록 컴포넌트
function TodoList() {
  const todos = [
    {
      id: 1,
      text: "공부하기",
      done: true,
    },
    {
      id: 2,
      text: "청소하기",
      done: false,
    },
    {
      id: 3,
      text: "취업하기",
      done: true,
    },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
