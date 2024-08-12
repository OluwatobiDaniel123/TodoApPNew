import { React, useState } from "react";
import "./Login.css";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import { loginUsers } from "../../Redux/Action/authActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();

  // ////////////////////////////////////////////////
  const initialValues = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const { email, password } = userData;

  const dispatch = useDispatch();

  // const handleUserData = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/auth/login",
  //       userData
  //     );
  //     console.log(data);
  //     alert(data && data.msg);
  //     localStorage.setItem("user", JSON.stringify(data.user));
  //     localStorage.setItem("token", JSON.stringify(data.token));
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.response && error.response.data.msg);
  //   }
  // };

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
    dispatch(loginUsers(userData));
    // navigate("/todo");

    setUserData({
      email: "",
      password: "",
    });
  };
  // ////////////////////////////////////////////////////////

  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const CloseModal = () => {
    navigate("/");
    setShowModal(false);
  };

  ////////////////////////////////////////////////////////////////

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h4>Login to here </h4>

        <p className="p">Enter your personal details to start To-Do now!!!</p>

        <div className="input-fields">
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
            Login
          </button>

          <p>
            Not yet register
            <a href="/sign-up" onClick={toggleModal}>
              Sign in here
            </a>
          </p>
          <Modal show={showModal} onClose={CloseModal}>
            <Register />
          </Modal>
        </div>
      </form>
    </div>
  );
};
export default Login;
