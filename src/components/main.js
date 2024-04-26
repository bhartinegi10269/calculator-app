import React, { useState } from "react";
import "./main.css";
function Main() {
  const [solution, setSolution] = useState("0");
  const [input, setInput] = useState("");

  const clear = () => {
    setSolution("0");
    setInput("");
  };

  const handleNumberClick = (num) => {
    if (solution === "0" && num === "0") return;
    setInput(input + num);
    if (solution === "0") {
      setSolution(num);
    } else {
      setSolution(solution + num);
    }
  };

  const handleOperatorClick = (operator) => {
    if (input !== "") {
      setInput("");
      setSolution(solution + operator);
    }
  };

  const round = () => {
    setInput("");
    setSolution(Math.round(parseFloat(solution)).toString());
  };

  const calculate = () => {
    if (input !== "") {
      setInput("");
      try {
        setSolution(eval(solution).toString());
      } catch (error) {
        setSolution("Error");
      }
    }
  };

  return (
    <>
      <div class="box">
        <div class="calculator">
    
<p id="inputBox" placeholder="0">
  {solution}
</p>

          <div>
            <button onClick={clear}>AC</button>
            <button onClick={clear}>DEL</button>
            <button onClick={() => handleOperatorClick("%")}>%</button>
            <button onClick={() => handleOperatorClick("/")}>/</button>
          </div>
          <div>
            <button onClick={() => handleNumberClick("7")}>7</button>
            <button onClick={() => handleNumberClick("8")}>8</button>
            <button onClick={() => handleNumberClick("9")}>9</button>
            <button onClick={() => handleOperatorClick("*")}>*</button>
          </div>
          <div>
            <button onClick={() => handleNumberClick("4")}>4</button>
            <button onClick={() => handleNumberClick("5")}>5</button>
            <button onClick={() => handleNumberClick("6")}>6</button>
            <button onClick={() => handleOperatorClick("-")}>-</button>
          </div>
          <div>
            <button onClick={() => handleNumberClick("1")}>1</button>
            <button onClick={() => handleNumberClick("2")}>2</button>
            <button onClick={() => handleNumberClick("3")}>3</button>
            <button onClick={() => handleOperatorClick("+")}>+</button>
          </div>
          <div>
            <button onClick={() => handleNumberClick("00")}>00</button>
            <button onClick={() => handleNumberClick("0")}>0</button>
            <button onClick={() => handleNumberClick(".")}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
