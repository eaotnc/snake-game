import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const defaultTables = ["", "", "", "", "", "", "", "", "", "", "", ""];

function App() {
  const [snakePosition, setSnakePosition] = useState([
    { part: "head", x: 3 },
    { part: "body", x: 2 },
    { part: "body", x: 1 },
    { part: "tail", x: 0 },
  ]);
  const [tables, setTables] = useState(defaultTables);
  const [keyboardDirection, setKeyboardDirection] = useState("");
  const [timer, setTimer]: any = useState(null);

  useEffect(() => {
    const newTimer = setInterval(() => {
      changeSnakeByKeyboard();
    }, 1000);
    setTimer(newTimer);
    return () => {
      clearInterval(timer);
    };
  }, [tables]);

  useEffect(() => {
    let newTable = new Array(...defaultTables);
    snakePosition.map((snake) => {
      newTable.splice(snake.x, 1, "s");
    });
    setTables(newTable);
  }, [snakePosition]);

  const changeSnakeByKeyboard = () => {
    console.log("🚀 ~ App ~ keyboardDirection i", keyboardDirection);

    setSnakePosition((preSnake) =>
      preSnake.map((snake: any) => {
        const newSnakePosition = getNewSnakePosition(snake.x);
        //right snake.x > 0 ? snake.x - 1 : tables.length,
        //left snake.x < tables.length - 1 ? snake.x + 1 : 0,
        return {
          part: snake.part,
          x: newSnakePosition,
        };
      })
    );
  };

  const getNewSnakePosition = (position: any) => {
    console.log(
      "🚀 ~ getNewSnakePosition ~ keyboardDirection",
      keyboardDirection
    );
    const endOfTable = tables.length - 1;
    if (keyboardDirection === "right") {
      return position < endOfTable ? position + 1 : 0;
    } else {
      return position >= 0 ? position - 1 : endOfTable;
    }
  };

  const handleAnswerChange = (event: any) => {
    switch (event.keyCode) {
      case 37: // left &larr;
        setKeyboardDirection("left");
        break;
      case 38: // up &uarr;
        setKeyboardDirection("up");
        break;
      case 39: // right &rarr;
        setKeyboardDirection("right");
        break;
      case 40: // down &darr;
        setKeyboardDirection("down");
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
      <div className="column">{renderSnake()}</div>
    </div>
  );
}

export default App;
