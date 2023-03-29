import { useState } from "react";
// import Modal from "react-modal";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h3>Hey, click on the button to open the modal</h3>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      <br />
      {openModal && <Modal closeModal={setOpenModal} />}
      {/* <button>Open Modal</button>
      <Modal isOpen={true}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
      </Modal> */}
    </div>
  );
}

export default App;
