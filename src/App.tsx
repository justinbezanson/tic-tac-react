import { useState } from "react";
import { useEffect } from "react";
import Cell from "./components/Cell";
import Messages from "./components/Messages";

export default function App() {
  const [message, setMessage] = useState("Welcome to Tic Tac React!");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (index: number) => {
    if (gameOver) return;
    if (board[index] !== "") return;
    const nextBoard = board.map((v, i) => (i === index ? activePlayer : v));
    setBoard(nextBoard);

    if (isWinner(nextBoard)) {
      setGameOver(true);
      return;
    }
    if (isGameOver(nextBoard)) {
      setGameOver(true);
      return;
    }
    changeActivePlayer();
  };

  const changeActivePlayer = () => {
    let nextPlayer = activePlayer === "X" ? "O" : "X";
    setActivePlayer(nextPlayer);
    setMessage(`It is now ${nextPlayer}'s turn`);
  };

  const isGameOver = (nextBoard: string[]) => {
    if (nextBoard.every((cell) => cell !== "")) {
      setMessage("Game over! It's a draw.");
      return true;
    }
    return false;
  };

  const isWinner = (nextBoard: string[]) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];
      if (nextBoard[a] && nextBoard[a] === nextBoard[b] && nextBoard[a] === nextBoard[c]) {
        setMessage(`Player ${nextBoard[a]} wins!`);
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setMessage((m) =>
        m === "Welcome to Tic Tac React!" ? `It is now ${activePlayer}'s turn` : m,
      );
    }, 4000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center m-12">Tic Tac React</h1>

      <Messages message={message} />

      {gameOver && (
        <input
          type="button"
          value="Reset Game"
          className="block mx-auto mt-6"
          onClick={() => {
            setBoard(Array(9).fill(""));
            setActivePlayer("X");
            setMessage("It is now X's turn");
            setGameOver(false);
          }}
        />
      )}

      <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] aspect-square mx-auto mt-12">
        <Cell index={0} value={board[0]} onSelect={handleCellClick} />
        <Cell index={1} value={board[1]} onSelect={handleCellClick} />
        <Cell index={2} value={board[2]} onSelect={handleCellClick} />

        <Cell index={3} value={board[3]} onSelect={handleCellClick} />
        <Cell index={4} value={board[4]} onSelect={handleCellClick} />
        <Cell index={5} value={board[5]} onSelect={handleCellClick} />

        <Cell index={6} value={board[6]} onSelect={handleCellClick} />
        <Cell index={7} value={board[7]} onSelect={handleCellClick} />
        <Cell index={8} value={board[8]} onSelect={handleCellClick} />
      </div>
    </div>
  );
}
