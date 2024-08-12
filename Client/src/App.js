import React from "react";
import Todos from "./components/ToDo/Todos";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import { store } from "./Redux/Reducer/Store";
import { BrowserRouter as Router } from "react-router-dom";

export const user = JSON.parse(localStorage.getItem("user"));
export const token = localStorage.getItem("token");
console.log(token);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/users/todos" element={<Todos />} />
            <Route path="/users/todos/:todoId" element={<Todos />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
