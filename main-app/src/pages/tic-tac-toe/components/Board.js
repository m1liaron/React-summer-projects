import { useEffect, useState } from 'react'
import './Board.scss'

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const winningCombinations = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal from top-left to bottom-right
      [2, 4, 6], // diagonal from top-right to bottom-left
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a] !== '' &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        setWinner(board[a]);
        break;
      }
    }

    if (!winner && !board.includes('')) {
      setWinner('draw');
    }
  }, [board, winner]);

    const handleBlockClick = (index) => {
    if (winner || board[index] !== '') {
        return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');
    };
    
  const reset = () => {
    setBoard(Array(9).fill(''));
    setTurn('X');
    setWinner('');
  };

  return (
    <div className="container-board">
      <div className="board">
        {board.map((cell, index) => (
          <div
            className="block"
            key={index}
            onClick={() => handleBlockClick(index)}
          >
            <p className={`symbol ${winner === 'X' ? 'win-x' : winner === 'O' ? 'win-o' : ''}`}>
          {cell}
        </p>
          </div>
        ))}
      </div>
      <h1>Turn: {turn}</h1>
      {winner && <h2>Winner: {winner === 'draw' ? 'Draw' : winner}</h2>}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Board;
