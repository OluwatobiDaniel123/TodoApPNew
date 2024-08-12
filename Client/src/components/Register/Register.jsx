import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
// import axios from "axios";
import "./Register.css";
import { registerNewUser } from "../../Redux/Action/authActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const { firstName, lastName, email, password } = userData;
  //////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  // const handleUserData = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/auth/register",
  //       userData
  //     );
  //     console.log(data);
  //     alert(data && data.msg);
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.response && error.response.data.msg);
  //   }
  // };
  /////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // handleUserData(userData);
    dispatch(registerNewUser(userData));
    navigate("/login");

    setUserData({
      firstName: "",
      lastName,
      email: "",
      password: "",
    });
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  /////////////////////////////////////////////////////////

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h4>Sign-In here </h4>

        <h4>Create your account here </h4>
        <p className="p">Enter your personal details to start To-Do now!!!</p>
        <div className="input-fields">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={firstName}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={lastName}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <button type="submit" className="signin-button">
            Sign-up
          </button>
          <p>
            Already Registered?{" "}
            <a href="/login" onClick={toggleModal}>
              Login here
            </a>
          </p>
        </div>
      </form>
      <Modal show={showModal} onClose={closeModal}>
        <Login />
      </Modal>
    </div>
  );
};

export default Register;
