type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

type Action =
  | { type: "CREATE"; text: string }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

type TodosDispatch = Dispatch<Action>;
