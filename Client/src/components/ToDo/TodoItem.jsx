import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
const TodoItem = ({ id, todos, todo, handleDeleteTodo, handleUpdateTodo }) => {
  return (
    <div>
      <ul className="todolist-container">
        <li className="todolist">
          <span>{todo}</span>
          <div className="btn-box">
            <button
              className="delete-todo-btn"
              onClick={() => handleDeleteTodo(id)}
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
    </div>
  );
};

export default TodoItem;
