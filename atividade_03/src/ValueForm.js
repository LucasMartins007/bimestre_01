import React, { Fragment } from 'react';
import { useState } from "react";

const AddCounter = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState("");

  const handleSubmit = () => {
    setCounter(counter + number); 
    setNumber("");
  }

  return (
    <Fragment>
        <label>
          numero: <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/> 
        </label>
        <button onClick={handleSubmit}> 
            Somar
        </button>
        <label>{counter}</label>
    </Fragment> 
  );  
}

export default AddCounter;
