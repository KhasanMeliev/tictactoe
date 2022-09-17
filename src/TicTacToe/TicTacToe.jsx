import React, { useState } from "react";
import "./styles.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const checkWinner = (squeares) => {
    const combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squeares[pattern[0]] === "" ||
          squeares[pattern[1]] === "" ||
          squeares[pattern[2]] === ""
        ) {
        } else if (
          squeares[pattern[0]] === squeares[pattern[1]] &&
          squeares[pattern[1]] === squeares[pattern[2]]
        ) {
          setWinner(squeares[pattern[0]]);
        }
      });
    }
  };
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    let squeares = [...cells];
    if (turn === "x") {
      squeares[num] = "x";
      setTurn("o");
    } else {
      squeares[num] = "o";
      setTurn("x");
    }
    checkWinner(squeares);
    setCells(squeares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div className="container">
      <table>
        <h1>Turn: {turn}</h1>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner</p>
          <button onClick={() => handleRestart()}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
