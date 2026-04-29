import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    console.log("clicked", counter);

    if (counter <= 7) {
      setCounter(counter);
    }
  };

  const removeValue = () => {
    counter = counter - 1;
    console.log(counter);

    if (counter >= 0) {
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
