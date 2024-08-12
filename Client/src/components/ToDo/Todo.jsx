import React, { useEffect, useState } from "react";
import "./Todo.css";
import TodoItem from "./TodoItem";
import token from "../../App";
import { listTodo } from "../../Redux/Action/todoAction";
import { useDispatch, useSelector } from "react-redux";
// import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(listTodo());
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  ///////////////////////////////////////////////////////////////

  const headers = {
    Authorization: "Bearer " + token,
    // "Accept-Language": language,
  };

  // useEffect(() => {
  //   fetch("http://localhost:5000/api/todos/")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTodos(data.todos);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const handleUserData = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/todos/",
  //       userData
  //     );

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // ////////////////////////////////////////////////

  const addTodo = () => {
    fetch("http://localhost:5000/api/todos/create", {
      method: "POST",
      body: JSON.stringify({
        todo: todo,
        isComplete: false,
      }),
      // headers: {
      //   "content-type": "application/json",
      //   " authorization": `Bearer ${token}`,
      // },
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos([...todos, data.newTodo]);
      });
  };

  ///////////////////////////////////////////////////

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/todos/delete/${id}`, {
      method: "DELETE",
      // headers: {
      //   "content-type": "application/json",
      //   authorization: `Bearer ${token}`,
      // },
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ///////////////////////////////////////////////////////////////////////////
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="con">
      <div className="container">
        <h2>Todo List</h2>
        <div className="input">
          <input
            type="text"
            placeholder="Enter your todo here"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="add-todo-btn" onClick={addTodo}>
            Add Todo
          </button>
        </div>
        <div className="todo-container">
          {todos?.map((todo) => {
            return (
              <TodoItem
                key={todo?._id}
                id={todo?._id}
                todo={todo?.todo}
                setTodos={setTodos}
                deleteTodo={deleteTodo}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
