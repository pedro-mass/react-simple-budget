import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function NumberModal({ title, onValueSelected = () => {} }) {
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

const AddButton = props => <NumberModal {...props} title="Add" />;

const ExpenseButton = props => <NumberModal {...props} title="Expense" />;

const ResetButton = props => <NumberModal {...props} title="Reset" />;

function App() {
  const [balance, setBalance] = useState(0);

  const increaseBalance = amount => setBalance(amount + balance);
  const decreaseBalance = amount => increaseBalance(-amount);

  return (
    <div className="App">
      <AddButton onValueSelected={increaseBalance} />
      <ResetButton onValueSelected={setBalance} />

      <p>Balance: {balance}</p>

      <ExpenseButton onValueSelected={decreaseBalance} />
    </div>
  );
}

export default App;
