import { createContext } from "react";

const TodosStateContext = createContext<TodosState | undefined>(undefined);

const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);
