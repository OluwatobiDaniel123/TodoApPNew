import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  listTodo,
  createTodo,
  deleteTodo,
  editTodo,
} from "../../Redux/Action/todoAction";
import "./Todo.css";
import UserPop from "../UserPop/UserPop";
import { FaUser } from "react-icons/fa";
const Todos = () => {
  const [showPop, setShowPop] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { todoId } = useParams();
  console.log(todoId);

  const { todos } = useSelector((state) => state.todos);
  console.log(todos);

  let edit = useSelector((state) =>
    todoId !== null
      ? state.todos.todos.find((item) => item._id === todoId)
      : null
  );
  console.log(todos);

  useEffect(() => {
    if (edit) setTodo(edit.todo);
  }, [edit]);

  const [todo, setTodo] = useState("");

  useEffect(() => {
    dispatch(listTodo());
  }, [dispatch]);

  const handleCreateTodo = () => {
    const newTodo = {
      todo: todo,
      isComplete: false,
    };

    if (todoId && edit !== undefined) {
      const updatedTodo = {
        todo: todo,
        isComplete: todos.isComplete,
      };
      dispatch(editTodo(todoId, updatedTodo));
    } else {
      dispatch(createTodo(newTodo));
    }
    setTodo("");
    navigate("/users/todos");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="container_1">
      <button className="btn-6" onClick={() => setShowPop(!showPop)}>
        <FaUser />
      </button>

      <div className="container_2">
        <div>{showPop && <UserPop />}</div>

        <h2>Manage Your Daily Activities </h2>
        <div className="input">
          <input
            type="text"
            placeholder="Enter your todo here"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className="add-todo-btn" onClick={handleCreateTodo}>
            Add Todo
          </button>
        </div>
        <div className="todo-container">
          {todos?.map((todo) => {
            return (
              <ul key={todo._id} className="todolist-container">
                <li className="todolist">
                  <span>{todo.todo}</span>
                  <div className="btn-box">
                    <button
                      className="delete-todo-btn"
                      onClick={() => handleDeleteTodo(todo._id)}
                    >
                      <MdDeleteForever />
                    </button>
                    <Link to={`/users/todos/${todo?._id}`}>
                      <button className="edit-todo-btn">
                        <FaRegPenToSquare />
                      </button>
                    </Link>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
