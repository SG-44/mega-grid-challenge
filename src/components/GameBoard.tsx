import { useState } from 'react';
import { Button } from '@/components/ui/button';

type Player = 'X' | 'O' | null;
type Board = Player[][];
type GameBoard = Board[];

const GameBoard = () => {
  const [mainBoard, setMainBoard] = useState<GameBoard>(
    Array(9).fill(null).map(() => 
      Array(3).fill(null).map(() => Array(3).fill(null))
    )
  );
  const [activeBoard, setActiveBoard] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winners, setWinners] = useState<Player[]>(Array(9).fill(null));

  const checkWinner = (board: Player[]): Player => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellClick = (boardIndex: number, cellIndex: number) => {
    if (activeBoard !== null && activeBoard !== boardIndex) return;
    if (mainBoard[boardIndex][Math.floor(cellIndex / 3)][cellIndex % 3]) return;
    if (winners[boardIndex]) return;

    const newMainBoard = [...mainBoard];
    const row = Math.floor(cellIndex / 3);
    const col = cellIndex % 3;
    newMainBoard[boardIndex][row][col] = currentPlayer;
    setMainBoard(newMainBoard);

    // Check if this small board has a winner
    const flatBoard = newMainBoard[boardIndex].flat();
    const winner = checkWinner(flatBoard);
    if (winner) {
      const newWinners = [...winners];
      newWinners[boardIndex] = winner;
      setWinners(newWinners);
    }

    // Set next active board
    const nextBoard = cellIndex;
    setActiveBoard(winners[nextBoard] ? null : nextBoard);
    
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderCell = (boardIndex: number, cellIndex: number) => {
    const row = Math.floor(cellIndex / 3);
    const col = cellIndex % 3;
    const value = mainBoard[boardIndex][row][col];
    const isActive = activeBoard === null || activeBoard === boardIndex;
    const isWon = winners[boardIndex] !== null;

    return (
      <Button
        key={cellIndex}
        variant="glow"
        size="icon"
        className={`
          h-12 w-12 text-3xl font-bold
          ${!isActive || isWon ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}
          ${value === 'X' ? 'text-primary' : value === 'O' ? 'text-accent' : ''}
        `}
        onClick={() => handleCellClick(boardIndex, cellIndex)}
        disabled={!isActive || isWon || !!value}
      >
        {value}
      </Button>
    );
  };

  const renderSmallBoard = (boardIndex: number) => {
    const isActive = activeBoard === null || activeBoard === boardIndex;
    const winner = winners[boardIndex];

    return (
      <div
        key={boardIndex}
        className={`
          relative bg-gradient-card border rounded-lg p-2
          ${isActive && !winner ? 'border-primary shadow-neon' : 'border-border'}
          ${winner ? 'border-accent shadow-glow' : ''}
        `}
      >
        {winner ? (
          <div className="absolute inset-0 flex items-center justify-center bg-card/80 backdrop-blur-sm rounded-lg">
            <span className={`text-8xl font-bold ${winner === 'X' ? 'text-primary' : 'text-accent'}`}>
              {winner}
            </span>
          </div>
        ) : null}
        <div className="grid grid-cols-3 gap-1">
          {Array(9).fill(null).map((_, cellIndex) => renderCell(boardIndex, cellIndex))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Super Tic Tac Toe</h2>
        <p className="text-muted-foreground">
          Current Player: <span className={`font-bold ${currentPlayer === 'X' ? 'text-primary' : 'text-accent'}`}>
            {currentPlayer}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-2xl">
        {Array(9).fill(null).map((_, boardIndex) => renderSmallBoard(boardIndex))}
      </div>

      <Button 
        variant="gaming" 
        size="lg"
        onClick={() => {
          setMainBoard(Array(9).fill(null).map(() => 
            Array(3).fill(null).map(() => Array(3).fill(null))
          ));
          setActiveBoard(null);
          setCurrentPlayer('X');
          setWinners(Array(9).fill(null));
        }}
      >
        New Game
      </Button>
    </div>
  );
};

export default GameBoard;