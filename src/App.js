import NumberModal from "./components/NumberModal";
import React, { useState } from "react";

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
