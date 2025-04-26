import React, { useState } from "react";
import '../index.css'

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onIncrement = () => {
    if (count >= limit) {
      setShowConfirmation(true);
    } else {
      setCount(count + 1);
    }
  };

  const handleConfirmation = (response) => {
    if (response) {
      setCount(count + 1);
      setLimit(limit + 10);
    }
    setShowConfirmation(false);
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <h1 className="heading">Counter</h1>
        <p className="counter">{count}</p>
        {showConfirmation && (
          <div>
            <p>You've reached the limit. Would you like to continue?</p>
            <button onClick={() => handleConfirmation(true)}>Yes</button>
            <button onClick={() => handleConfirmation(false)}>No</button>
          </div>
        )}
        <div>
          <button className="decrease-button" type="button" onClick={onDecrement}>Decrease</button>
          <button className="increase-button" type="button" onClick={onIncrement}>Increase</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;