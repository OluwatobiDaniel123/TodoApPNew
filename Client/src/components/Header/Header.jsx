import React from "react";
import "../Header/Header.css";
import { FcTodoList } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../Register/Register";
import Login from "../Login/Login";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [showModal1, setShowModal1] = useState(false);
  const toggleModal1 = () => {
    setShowModal1(true);
  };
  const CloseModal1 = () => {
    navigate("/");
    setShowModal1(false);
  };

  const [showModal2, setShowModal2] = useState(false);
  const toggleModal2 = () => {
    setShowModal2(true);
  };
  const CloseModal2 = () => {
    navigate("/");
    setShowModal2(false);
  };
  return (
    <div className="Header">
      <div className="logo">
        <h2 className="h2-logo">D</h2>
        <span>ANETECH</span>
        <FcTodoList />
      </div>
      <div className="btn-box">
        <Link to="/register">
          <button className="register-btn" onClick={toggleModal1}>
            Sign-in
          </button>
        </Link>
        <Link to="/login">
          <button className="register-btn" onClick={toggleModal2}>
            Login
          </button>
        </Link>
      </div>
      <Modal show={showModal2} onClose={CloseModal2}>
        <Login />
      </Modal>
      <Modal show={showModal1} onClose={CloseModal1}>
        <SignIn />
      </Modal>
    </div>
  );
};

export default Header;
