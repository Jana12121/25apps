import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Square } from "./Square";

export const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  const [firstPlayer, setFirstPlayer] = useState("X");
  const [secondPlayer, setSecondPlayer] = useState("O");

  function handleClick(getCurrentSquare) {
    let copySquare = [...squares];
    if (getWinner(copySquare) || copySquare[getCurrentSquare]) return;
    copySquare[getCurrentSquare] = isXTurn
      ? firstPlayer[0].toUpperCase()
      : secondPlayer[0].toUpperCase();
    setIsXTurn(!isXTurn);
    setSquares(copySquare);
  }

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item)) {
      setStatus("Draw");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else {
      setStatus(
        `Next Player is ${
          isXTurn ? firstPlayer[0].toUpperCase() : secondPlayer[0].toUpperCase()
        }`
      );
    }
  }, [squares, isXTurn]);

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  function handleFirstPlayer(e) {
    setFirstPlayer(e.target.value);
  }

  function handleSecondPlayer(e) {
    setSecondPlayer(e.target.value);
  }

  return (
    <div className={styles.mainDiv}>
      <div className={styles.inputsDiv}>
        <label>
          1 Player:{" "}
          <input
            type="text"
            placeholder="player name"
            value={firstPlayer}
            onChange={handleFirstPlayer}
          />
        </label>
        <label>
          2 Player:{" "}
          <input
            type="text"
            placeholder="player name"
            value={secondPlayer}
            onChange={handleSecondPlayer}
          />
        </label>
      </div>

      <div className={styles.container}>
        <div className={styles.row}>
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className={styles.row}>
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className={styles.row}>
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
        <h1 className={styles.status}>{status}</h1>
        <button className={styles.restartButton} onClick={handleRestart}>
          Restart Game
        </button>
      </div>
    </div>
  );
};
