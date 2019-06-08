import React from "react";
import NumberModal from "./components/NumberModal";
import useLocalStorage from "react-use-localstorage";
import { ButtonGroup } from "semantic-ui-react";

import "./App.scss";

const AddButton = props => <NumberModal {...props} title="Add" positive />;

const ResetButton = props => <NumberModal {...props} title="Reset" secondary />;

const ExpenseButton = props => (
  <NumberModal {...props} title="Expense" negative fluid />
);

function App() {
  const [balance, setBalance] = useLocalStorage("balance", 0);

  const increaseBalance = amount => setBalance(amount + balance);
  const decreaseBalance = amount => increaseBalance(-amount);

  return (
    <div className="App flex-container">
      <ButtonGroup className="flex-item">
        <AddButton onValueSelected={increaseBalance} className="max-height" />
        <ResetButton onValueSelected={setBalance} className="max-height" />
      </ButtonGroup>

      <div fluid className="flex-item">
        {/* todo: style this better */}
        <p>Balance:</p>
        {/* This should be the highlight */}
        <p>{balance}</p>
      </div>

      <div className="flex-item">
        <ExpenseButton
          onValueSelected={decreaseBalance}
          fluid
          className="max-height"
        />
      </div>
    </div>
  );
}

export default App;
