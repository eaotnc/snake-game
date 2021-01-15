import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const handleAnswerChange = (event: any) => {
    switch (event.keyCode) {
      case 37: // left
        setAnswer("<span>&larr;</span>");
        break;
      case 38: // up
        setAnswer("&uarr;");
        break;
      case 39: // right
        setAnswer("&rarr;");
        break;
      case 40: // down
        setAnswer("&darr;");
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {answer}
      <input type="text" onKeyDown={handleAnswerChange} />
    </div>
  );
}

export default App;
