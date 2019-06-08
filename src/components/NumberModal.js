import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function NumberModal({ title, onValueSelected = () => {} }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [value, setValue] = useState(0);
  const handleInput = e => setValue(e.target.value);

  const addValue = () => {
    onValueSelected(Number(value));
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>{title}</button>
      {/* todo: style this modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="pedro"
      >
        <h1>{title}</h1>
        <input
          type="number"
          name="value"
          value={value}
          onChange={handleInput}
        />
        <div>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={addValue}>Ok</button>
        </div>
      </Modal>
    </>
  );
}
