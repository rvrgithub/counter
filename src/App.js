import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  //  it read the value of curent vlaue

  const handleChange = (value) => {
    // if (counter === 10) {
    //   return;
    // }
    // if (counter <= 0) {
    //   return;
    // }

    setCounter(counter + value);
  };
  const handleDouble = (value) => {
    setCounter(counter * value);
  };
  return (
    <div className="App">
      <h3 className={`${counter %2===0 ? "even" :"odd"}`}> Counter : {counter}</h3>
      <button
        onClick={() => {
          handleChange(1);
          console.log(counter);
        }}
      >
        Add.
      </button>
      <button
        onClick={() => {
          handleChange(-1);
          console.log(counter);
        }}
      >
        sub.
      </button>

      <button
        onClick={() => {
          handleDouble(2);
        }}
      >
        Double
      </button>
      <div>number is {counter % 2 === 0 ? "even" : "odd"}</div>
    </div>
  );
}

export default App;
