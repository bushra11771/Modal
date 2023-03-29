import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer cross">
        <button onClick={() => closeModal()}>X</button>
        <div className="title">
          <h1>Are you Sure You Want To Continue?</h1>
        </div>

        <div className="body">
          <p>
            The next page is awesome! You should move forward, You will enjoy
            it.
          </p>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
