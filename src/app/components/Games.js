import React, { useState, useEffect, useCallback } from "react";
import animation from "./animation";

const Circle = ({ value, winCircleColor, handleClick }) => {
  return (
    <>
      {winCircleColor === "green" ? (
        <button onClick={handleClick} className="button-green">
          {value}
        </button>
      ) : (
        <button onClick={handleClick} className="button-yellow">
          {value}
        </button>
      )}
    </>
  );
};

const Board = ({ value, currentLevel, winCircle, header, onHandleClick }) => {
  const winCircleColor = Array(9).fill("");
  if (winCircle) {
    winCircle.map((indices) => (winCircleColor[indices] = "green"));
  }

  return (
    <>
      {header.includes("Winner") ? (
        <h2 className="text-center">
          {header} <i className="bi bi-trophy text-warning"></i>
        </h2>
      ) : (
        <h2 className="text-center mb-3">{header}</h2>
      )}

      <div className="container">
        <div className="board">
          {currentLevel === "Level 1" ? (
            <div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[0]}
                    winCircleColor={winCircleColor[0]}
                    handleClick={() => onHandleClick(0)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[1]}
                    winCircleColor={winCircleColor[1]}
                    handleClick={() => onHandleClick(1)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[2]}
                    winCircleColor={winCircleColor[2]}
                    handleClick={() => onHandleClick(2)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[3]}
                    winCircleColor={winCircleColor[3]}
                    handleClick={() => onHandleClick(3)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[4]}
                    winCircleColor={winCircleColor[4]}
                    handleClick={() => onHandleClick(4)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[5]}
                    winCircleColor={winCircleColor[5]}
                    handleClick={() => onHandleClick(5)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[6]}
                    winCircleColor={winCircleColor[6]}
                    handleClick={() => onHandleClick(6)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[7]}
                    winCircleColor={winCircleColor[7]}
                    handleClick={() => onHandleClick(7)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[8]}
                    winCircleColor={winCircleColor[8]}
                    handleClick={() => onHandleClick(8)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[0]}
                    winCircleColor={winCircleColor[0]}
                    handleClick={() => onHandleClick(0)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[1]}
                    winCircleColor={winCircleColor[1]}
                    handleClick={() => onHandleClick(1)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[2]}
                    winCircleColor={winCircleColor[2]}
                    handleClick={() => onHandleClick(2)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[3]}
                    winCircleColor={winCircleColor[3]}
                    handleClick={() => onHandleClick(3)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[4]}
                    winCircleColor={winCircleColor[4]}
                    handleClick={() => onHandleClick(4)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[5]}
                    winCircleColor={winCircleColor[5]}
                    handleClick={() => onHandleClick(5)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[6]}
                    winCircleColor={winCircleColor[6]}
                    handleClick={() => onHandleClick(6)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[7]}
                    winCircleColor={winCircleColor[7]}
                    handleClick={() => onHandleClick(7)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[8]}
                    winCircleColor={winCircleColor[8]}
                    handleClick={() => onHandleClick(8)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[9]}
                    winCircleColor={winCircleColor[9]}
                    handleClick={() => onHandleClick(9)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[10]}
                    winCircleColor={winCircleColor[10]}
                    handleClick={() => onHandleClick(10)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[11]}
                    winCircleColor={winCircleColor[11]}
                    handleClick={() => onHandleClick(11)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[12]}
                    winCircleColor={winCircleColor[12]}
                    handleClick={() => onHandleClick(12)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[13]}
                    winCircleColor={winCircleColor[13]}
                    handleClick={() => onHandleClick(13)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[14]}
                    winCircleColor={winCircleColor[14]}
                    handleClick={() => onHandleClick(14)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[15]}
                    winCircleColor={winCircleColor[15]}
                    handleClick={() => onHandleClick(15)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[16]}
                    winCircleColor={winCircleColor[16]}
                    handleClick={() => onHandleClick(16)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[17]}
                    winCircleColor={winCircleColor[17]}
                    handleClick={() => onHandleClick(17)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[18]}
                    winCircleColor={winCircleColor[18]}
                    handleClick={() => onHandleClick(18)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[19]}
                    winCircleColor={winCircleColor[19]}
                    handleClick={() => onHandleClick(19)}
                  />
                </div>
              </div>
              <div className="circle-set">
                <div className="circle">
                  <Circle
                    value={value[20]}
                    winCircleColor={winCircleColor[20]}
                    handleClick={() => onHandleClick(20)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[21]}
                    winCircleColor={winCircleColor[21]}
                    handleClick={() => onHandleClick(21)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[22]}
                    winCircleColor={winCircleColor[22]}
                    handleClick={() => onHandleClick(22)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[23]}
                    winCircleColor={winCircleColor[23]}
                    handleClick={() => onHandleClick(23)}
                  />
                </div>
                <div className="circle">
                  <Circle
                    value={value[24]}
                    winCircleColor={winCircleColor[24]}
                    handleClick={() => onHandleClick(24)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Game = ({ currentLevel }) => {
  const [value, setValue] = useState(
    currentLevel === "Level 1" ? [Array(9).fill(null)] : [Array(25).fill(null)]
  );
  const [xNext, setXNext] = useState(true);
  const [lastXNext, setlastXNext] = useState(true);
  const [xName, setXName] = useState("");
  const [oName, setOName] = useState("");
  const [playerX, setPlayerX] = useState("X");
  const [playerO, setPlayerO] = useState("O");
  const [gameStart, setGameStart] = useState(false);
  const [isComputerNext, setIsComputerNext] = useState(false);
  const [isComputerPlaying, setIsComputerPlaying] = useState(false);
  const [lastComputerNext, setLastComputerNext] = useState(false);

  const currentValue = value[value.length - 1];

  const computeGame = useCallback(() => {
    const playIndex = getFreeCells(currentValue, currentLevel);

    if (
      won(currentValue, currentLevel) ||
      gameOver(currentValue, currentLevel)
    ) {
      return;
    }

    const newValueSet = [...currentValue];
    xNext ? (newValueSet[playIndex] = "X") : (newValueSet[playIndex] = "O");

    setXNext(!xNext);
    setValue([...value, newValueSet]);
    setIsComputerPlaying(false);
  }, [currentValue, currentLevel, xNext, value, setIsComputerPlaying]);

  useEffect(() => {
    if (gameStart) {
      const timeOutId = setTimeout(() => {
        computeGame();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isComputerNext, gameStart]);

  useEffect(()=>{setValue(currentLevel === "Level 1" ? [Array(9).fill(null)] : [Array(25).fill(null)])},[currentLevel])

  const handleReturn = (value) => {
    if (value.length === 1) {
      return;
    }

    value.pop();

    setXNext(!xNext);

    setValue([...value]);
  };

  const handleReset = () => {
    lastXNext ? setXNext(false) : setXNext(true);

    setlastXNext(!lastXNext);

    setValue(
      currentLevel === "Level 1"
        ? [Array(9).fill(null)]
        : [Array(25).fill(null)]
    );

    lastComputerNext ? setGameStart(false) : setGameStart(true);

    lastComputerNext ? setIsComputerPlaying(false) : setIsComputerPlaying(true);

    setLastComputerNext(!lastComputerNext);

    setIsComputerNext(!isComputerNext);
  };

  const handleClearGame = () => {
    setXNext(true);
    setlastXNext(true);
    setXName("");
    setOName("");
    setPlayerX("X");
    setPlayerO("O");
    setValue(
      currentLevel === "Level 1"
        ? [Array(9).fill(null)]
        : [Array(25).fill(null)]
    );
  };

  const onHandleClick = (i) => {
    if (
      isComputerPlaying ||
      currentValue[i] ||
      won(currentValue, currentLevel) ||
      gameOver(currentValue, currentLevel)
    ) {
      return;
    }

    const newValueSet = [...currentValue];

    xNext ? (newValueSet[i] = "X") : (newValueSet[i] = "O");

    setXNext(!xNext);

    setValue([...value, newValueSet]);

    setIsComputerNext(!isComputerNext);

    setIsComputerPlaying(true);

    setGameStart(true);
  };

  const handleSetName = (player) => {
    player === "X" ? setPlayerX(xName) : setPlayerO(oName);
  };

  let winResult;
  let gameOverResult;

  winResult = won(currentValue, currentLevel);
  gameOverResult = gameOver(currentValue, currentLevel);

  let winner;
  let winCircle;

  if (winResult) {
    winner = winResult[0];
    winCircle = winResult[1];
  }

  let header;

  winner
    ? (header = `Winner is ${winner === "X" ? playerX : playerO}`)
    : gameOverResult === "Game Over"
    ? (header = "Game Over")
    : (header = `Next Player is ${xNext ? playerX : playerO}`);

  return (
    <>
      <Board
        value={currentValue}
        winCircle={winCircle}
        currentLevel={currentLevel}
        header={header}
        onHandleClick={(i) => onHandleClick(i)}
      />
      <div className="w-100 d-flex justify-content-center">
        <button
          className="btn btn-outline-warning rounded-pill mt-5 w-25"
          onClick={() => handleReturn(value)}
        >
          Return
        </button>

        <button
          className="btn btn-outline-warning rounded-pill mt-5 w-25"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="w-100 my-5 d-flex justify-content-center">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <input
              className="my-2 rounded-pill p-2 border border-warning"
              type="text"
              onChange={(e) => setXName(e.target.value)}
              value={xName}
              placeholder="Player X"
              maxLength={10}
            />
            <span className="my-auto ms-1">
              <button
                onClick={() => handleSetName("X")}
                className="btn btn-outline-warning py-2 rounded-pill"
              >
                create
              </button>
            </span>
          </div>
          <div className="d-flex align-items-center">
            <input
              className="my-2 rounded-pill p-2 border border-warning"
              type="text"
              onChange={(e) => setOName(e.target.value)}
              value={oName}
              placeholder="Player O"
              maxLength={10}
            />
            <span className="my-auto ms-1">
              <button
                onClick={() => handleSetName("O")}
                className="btn btn-outline-warning py-2 rounded-pill"
              >
                create
              </button>
            </span>
          </div>
          <button
            onClick={() => handleClearGame()}
            className="btn btn-outline-warning my-5 rounded-pill"
          >
            Clear game
          </button>
        </div>
      </div>
    </>
  );
};

const Player = () => {
  const [currentLevel, setcurrentLevel] = useState("Level 1");

  const handleCurrentLevel = (level) => {
    setcurrentLevel(level);
  };

  return (
    <>
      <h2
        className="animated text-center my-5"
        data-animation="tracking-in-contract-bck"
      >
        Extra
      </h2>
      <div className="container pb-5">
        <div className="d-flex justify-content-end align-items-center mt-4 ">
          <div className="dropdown mb-5">
            <button
              className="btn btn-outline-secondary dropdown-toggle px-2 py-0 rounded-pill"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {currentLevel}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  onClick={() => handleCurrentLevel("Level 1")}
                  className="dropdown-item"
                  type="button"
                >
                  Level 1
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCurrentLevel("Level 2")}
                  className="dropdown-item"
                  type="button"
                >
                  Level 2
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Game currentLevel={currentLevel} />
        </div>

        <div></div>
      </div>
    </>
  );
};

const won = (value, currentLevel) => {
  if (currentLevel === "Level 1") {
    const winOutcome = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c] = winOutcome[i];
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return [value[a], winOutcome[i]];
      }
    }
  } else {
    const winOutcome = [
      ["0", "1", "2", "3", "4"],
      ["5", "6", "7", "8", "9"],
      ["10", "11", "12", "13", "14"],
      ["15", "16", "17", "18", "19"],
      ["20", "21", "22", "23", "24"],
      ["0", "5", "10", "15", "20"],
      ["1", "6", "11", "16", "21"],
      ["2", "7", "12", "17", "22"],
      ["3", "8", "13", "18", "23"],
      ["4", "9", "14", "19", "24"],
      ["0", "6", "12", "18", "24"],
      ["4", "8", "12", "16", "20"],
    ];

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c, d, e] = winOutcome[i];
      if (
        value[a] &&
        value[a] === value[b] &&
        value[a] === value[c] &&
        value[a] === value[d] &&
        value[a] === value[e]
      ) {
        return [value[a], winOutcome[i]];
      }
    }
  }
};

const gameOver = (value, currentLevel) => {
  if (currentLevel === "Level 1") {
    const winOutcome = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    let winPossibilityCount = 0;

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c] = winOutcome[i];

      if (winPossibilityCount === winOutcome.length - 1) {
        return "Game Over";
      } else if (
        [value[a], value[b], value[c]].includes("X") &&
        [value[a], value[b], value[c]].includes("O")
      ) {
        winPossibilityCount++;
      }
    }
    return null;
  } else {
    const winOutcome = [
      ["0", "1", "2", "3", "4"],
      ["5", "6", "7", "8", "9"],
      ["10", "11", "12", "13", "14"],
      ["15", "16", "17", "18", "19"],
      ["20", "21", "22", "23", "24"],
      ["0", "5", "10", "15", "20"],
      ["1", "6", "11", "16", "21"],
      ["2", "7", "12", "17", "22"],
      ["3", "8", "13", "18", "23"],
      ["4", "9", "14", "19", "24"],
      ["0", "6", "12", "18", "24"],
      ["4", "8", "12", "16", "20"],
    ];

    let winPossibilityCount = 0;

    for (let i = 0; i < winOutcome.length; i++) {
      const [a, b, c, d, e] = winOutcome[i];

      if (winPossibilityCount === winOutcome.length - 1) {
        return "Game Over";
      } else if (
        [value[a], value[b], value[c], value[d], value[e]].includes("X") &&
        [value[a], value[b], value[c], value[d], value[e]].includes("O")
      ) {
        winPossibilityCount++;
      }
    }
    return null;
  }
};

const getFreeCells = (value, currentLevel) => {
  let freeCells = [];
  if (currentLevel === "Level 1") {
    for (let i = 0; i < value.length; i++) {
      value[i] === null && freeCells.push(i);
    }
  } else {
    for (let i = 0; i < value.length; i++) {
      value[i] === null && freeCells.push(i);
    }
  }
  const index = Math.floor(Math.random() * freeCells.length);
  return freeCells[index];
};

export default animation(Player, ["tracking-in-contract-bck"], [".animated"]);
