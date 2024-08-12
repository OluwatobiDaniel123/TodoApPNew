import { React, useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    navigate("/");
    setShowModal(false);
  };
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <div className="home-wrapper">
          <h1>To-do App</h1>
          <p>Create Your Todo's For All Day Here</p>
          <div className="image">
            <img src="images\img2.png" alt="img" />
          </div>
        </div>

        <Link to="/register">
          <button className="home-btn" onClick={toggleModal}>
            GET STARTED
          </button>
        </Link>
        {showModal && (
          <Modal show={showModal} onClose={closeModal}>
            <Register />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Home;
