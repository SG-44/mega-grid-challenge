import GameBoard from '@/components/GameBoard';
import { Button } from '@/components/ui/button';
import { Bot, Users } from 'lucide-react';

const Game = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Choose Game Mode</h1>
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="hero" size="xl" className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <span>vs Computer</span>
            </Button>
            <Button variant="neon" size="xl" className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>vs Player</span>
            </Button>
          </div>
        </div>

        <GameBoard />
      </div>
    </div>
  );
};

export default Game;