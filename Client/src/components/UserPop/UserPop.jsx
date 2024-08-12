import React from "react";
import "./UserPop.css";
import { useNavigate } from "react-router-dom";

const Username = JSON.parse(localStorage.getItem("user"));

const UserPop = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <div className="cycle">
        <div className="h5pop">
          <h5> {Username.firstName}</h5>
          <h5>{Username.lastName}</h5>
        </div>
        <button onClick={handleLogout} type="button" className="logout-btn">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserPop;
