import axios from "axios";

export const baseURL = "http://localhost:5000/api";

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const registerUser = (userData) => API.post("/auth/register", userData);

export const loginUser = (userData) => API.post("/auth/login", userData);

export const listTodo = () => API.get("/todos/my-todos");

export const createTodo = (todoData) => API.post("/todos/create", todoData);

export const deleteTodo = (id) => API.delete(`/todos/delete/${id}`);

export const editTodo = (id, todoData) =>
  API.put(`/todos/update/${id}`, todoData);
