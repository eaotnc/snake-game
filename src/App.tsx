import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [snakePosition, setSnakePosition] = useState([
    { part: "head", x: 2 },
    { part: "body", x: 1 },
    { part: "tail", x: 0 },
  ]);
  const [tables, setTables] = useState(["", "", "", "", "", ""]);
  const [keyboardDirection, setKeyboardDirection] = useState("");
  const [snakeLength, setSnakeLength] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      updateUi();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    let newTable = ["", "", "", "", "", ""];
    snakePosition.map((snake) => {
      newTable.splice(snake.x, 1, "s");
    });
    setTables(newTable);
  }, [snakePosition]);

  const updateUi = () => {
    setSnakePosition((preSnake) =>
      preSnake.map((snake: any) => {
        return {
          part: snake.part,
          x: snake.x < 5 ? snake.x + 1 : 0,
        };
      })
    );
  };
  console.log("🚀 ~ useEffect ~ table", tables);

  const handleAnswerChange = (event: any) => {
    switch (event.keyCode) {
      case 37: // left
        setKeyboardDirection("<span>&larr;</span>");
        break;
      case 38: // up
        setKeyboardDirection("&uarr;");
        break;
      case 39: // right
        setKeyboardDirection("&rarr;");
        break;
      case 40: // down
        setKeyboardDirection("&darr;");
        break;
      default:
        break;
    }
  };

  const renderSnake = () => {
    return tables.map((tables) =>
      tables === "s" ? (
        <div className="row snake"></div>
      ) : (
        <div className="row"></div>
      )
    );
  };

  return (
    <div className="App">
      <input type="text" onKeyDown={handleAnswerChange} />
      {snakeLength}
      <div className="column">{renderSnake()}</div>
    </div>
  );
}

export default App;
