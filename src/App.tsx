import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");
  const [snakeLength, setSnakeLength] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      // setTime(prevTime => prevTime + 1); // <-- Change this line!
      // updateUi();
      setSnakeLength((prevLength) => prevLength + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const updateUi = () => {
    // calculationSnakeLenght()
    console.log("updateUi", snakeLength);
    const result = snakeLength + 1;
    setSnakeLength(result);
  };

  const handleAnswerChange = (event: any) => {
    updateUi();

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

  const renderSnake = () => {
    let result: string = "";
    for (let i = 0; i < snakeLength; i++) {
      result = result + '<div className="tile"></div>';
    }
    return result;
  };

  return (
    <div className="App">
      <input type="text" onKeyDown={handleAnswerChange} />
      {snakeLength}
      {renderSnake()}
    </div>
  );
}

export default App;
