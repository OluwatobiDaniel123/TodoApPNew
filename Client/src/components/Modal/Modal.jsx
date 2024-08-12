import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div>
          <span className="close" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
