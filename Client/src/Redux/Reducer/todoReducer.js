import { TODO_TYPE } from "../Type/type";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODO_TYPE.TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    case TODO_TYPE.TODO_CREATE:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case TODO_TYPE.TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TODO_TYPE.TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        ),
      };

    default: {
      return state;
    }
  }
};

export default todos;
