import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const clickHandler = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div className="App">
      <button onClick={clickHandler} style={{ backgroundColor: buttonColor }}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
