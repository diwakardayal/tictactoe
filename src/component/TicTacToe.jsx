/** @format */

import useTictacToe from "../hooks/useTicTacToe";

export default function TicTacToe() {
  const { board, handleClick, resetGame, getStatusMessage } = useTictacToe();

  return (
    <>
      <div className="game">
        <div className="status">
          {getStatusMessage()}
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
        <div className="board">
          {board.map((b, index) => (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
