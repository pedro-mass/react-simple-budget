import React, { useMemo } from "react";
import NumberModal from "./components/NumberModal";
import useLocalStorage from "react-use-localstorage";
import { ButtonGroup } from "semantic-ui-react";
import classnames from "classnames";
import ScaleText from "react-scale-text";
import formatNumber from "comma-number";

import "./App.scss";

const AddButtonModal = props => <NumberModal {...props} title="Add" positive />;

const ResetButtonModal = props => (
  <NumberModal {...props} title="Reset" secondary initialValue={0} />
);

const ExpenseButtonModal = props => (
  <NumberModal {...props} title="Expense" negative fluid />
);

function App() {
  const [rawBalance, setBalance] = useLocalStorage("balance", 0);
  const balance = useMemo(() => Number(rawBalance), [rawBalance]);

  const increaseBalance = amount => setBalance(amount + Number(balance));
  const decreaseBalance = amount => increaseBalance(-amount);

  return (
    <div className="App flex-container">
      <ButtonGroup className="flex-item">
        <AddButtonModal
          onValueSelected={increaseBalance}
          className="max-height"
        />
        <ResetButtonModal onValueSelected={setBalance} className="max-height" />
      </ButtonGroup>

      <div
        fluid
        className={classnames("flex-item vertical-center balance", {
          positive: balance >= 0,
          negative: balance < 0
        })}
      >
        <p className="label">Balance:</p>
        <ScaleText widthOnly maxFontSize={100}>
          <p className="value center">{formatNumber(balance)}</p>
        </ScaleText>
      </div>

      <ButtonGroup className="flex-item">
        <ExpenseButtonModal
          onValueSelected={decreaseBalance}
          fluid
          className="max-height"
        />
      </ButtonGroup>
    </div>
  );
}

export default App;
