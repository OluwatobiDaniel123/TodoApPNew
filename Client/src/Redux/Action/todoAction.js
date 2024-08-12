import { TODO_TYPE } from "../Type/type";
import * as api from "../Reducer/apis";

export const listTodo = () => async (dispatch) => {
  try {
    const { data } = await api.listTodo();
    console.log("list of todos", data.todos);
    dispatch({
      type: TODO_TYPE.TODO_LIST,
      payload: data.todos,
    });
  } catch (error) {
    if (error.response && error.response.data) alert(error.response.data.msg);
  }
};

export const createTodo = (todoData) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(todoData);
    console.log("New todo", data);
    dispatch({
      type: TODO_TYPE.TODO_CREATE,
      payload: data.newTodo,
    });
  } catch (error) {
    if (error.response && error.response.data) alert(error.response.data.msg);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodo(id);

    dispatch({
      type: TODO_TYPE.TODO_DELETE,
      payload: id,
    });
  } catch (error) {
    if (error.response && error.response.data) alert(error.response.data.msg);
  }
};

export const editTodo = (id, todoData) => async (dispatch) => {
  try {
    const { data } = await api.editTodo(id, todoData);
    console.log("edit todo", data);
    dispatch({
      type: TODO_TYPE.TODO_UPDATE,
      payload: data.updatedTodo,
    });
  } catch (error) {
    if (error.response && error.response.data) alert(error.response.data.msg);
  }
};
