import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const Tutorial = () => {
  const steps = [
    {
      title: "Understanding the Grid",
      description: "Super Tic Tac Toe consists of 9 smaller tic-tac-toe boards arranged in a 3×3 grid.",
      visual: "🔳🔳🔳\n🔳🔳🔳\n🔳🔳🔳"
    },
    {
      title: "Making Your Move",
      description: "When you make a move in a small board, your opponent must play in the corresponding board position.",
      visual: "If you play in the top-right of a small board, opponent plays in the top-right big board."
    },
    {
      title: "Winning Small Boards",
      description: "Win a small board by getting three in a row, just like regular tic-tac-toe.",
      visual: "X wins this small board!"
    },
    {
      title: "Winning the Game",
      description: "Win the entire game by getting three small boards in a row on the big grid.",
      visual: "Three small board wins = Victory!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">How to Play</h1>
          <p className="text-muted-foreground">Master the art of Super Tic Tac Toe</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-neon">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <div className="font-mono text-center whitespace-pre-line">
                      {step.visual}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-6">
          <div className="bg-gradient-card rounded-xl border border-accent/30 shadow-glow p-6">
            <h3 className="text-2xl font-bold mb-4">Pro Tips</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-primary mb-2">Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Think ahead! Your move determines where your opponent plays next.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-accent mb-2">Defense</h4>
                <p className="text-sm text-muted-foreground">
                  Block your opponent from completing small boards while building your own.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-secondary mb-2">Control</h4>
                <p className="text-sm text-muted-foreground">
                  Try to control which boards your opponent can send you to.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-bold text-primary mb-2">Patience</h4>
                <p className="text-sm text-muted-foreground">
                  Sometimes it's better to play defensively and wait for opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="hero" size="xl" className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Practice Mode</span>
            </Button>
            <Button variant="gaming" size="xl" className="flex items-center space-x-2">
              <span>Start Playing</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;