import React, { useState } from "react";

//새 todo를 등록할 수 있는 컴포넌트
function TodoForm() {
  const [value, setValue] = useState("");

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setValue("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={value}
        placeholder="입력하세요"
        onChange={(event) => setValue(event.target.value)}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
