import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Gamepad2, Users, Bot, Trophy, Zap } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-primary p-4 rounded-2xl shadow-neon animate-float">
                <Gamepad2 className="h-16 w-16 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Super Tic Tac Toe
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the ultimate evolution of the classic game. Strategic depth meets familiar gameplay 
              in this mind-bending 9-grid challenge.
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => navigate('/game')}
                className="shadow-[0_0_20px_hsl(var(--primary)_/_0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.7)]"
              >
                <Zap className="h-5 w-5 mr-2" />
                Play Now
              </Button>
              <Button 
                variant="glow" 
                size="xl"
                onClick={() => navigate('/tutorial')}
              >
                Learn How
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Modes */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Challenge</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-deep p-8 hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-neon">
                <Bot className="h-12 w-12 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">vs Computer</h3>
              <p className="text-muted-foreground mb-6">
                Perfect your skills against our advanced AI. Multiple difficulty levels available.
              </p>
              <Button 
                variant="gaming" 
                size="lg" 
                className="w-full"
                onClick={() => navigate('/game')}
              >
                Challenge AI
              </Button>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl border border-border/50 shadow-deep p-8 hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="bg-gradient-accent p-4 rounded-full w-20 h-20 mx-auto mb-6 shadow-glow">
                <Users className="h-12 w-12 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">vs Players</h3>
              <p className="text-muted-foreground mb-6">
                Compete against players worldwide. Climb the leaderboard and prove your supremacy.
              </p>
              <Button 
                variant="neon" 
                size="lg" 
                className="w-full"
                onClick={() => navigate('/game')}
              >
                Find Match
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Epic Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6 text-center">
            <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Tournaments</h3>
            <p className="text-muted-foreground">
              Compete in scheduled tournaments for massive coin prizes and eternal glory.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2">Earn Coins</h3>
            <p className="text-muted-foreground">
              Win games and build streaks to earn coins for exclusive cosmetics and upgrades.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6 text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Customization</h3>
            <p className="text-muted-foreground">
              Unlock unique themes, symbols, and animations to personalize your gaming experience.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-card rounded-2xl border border-primary/30 shadow-neon p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of players in the ultimate tic-tac-toe experience. 
            Strategic thinking meets fast-paced action!
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate('/game')}
            >
              Start Playing
            </Button>
            <Button 
              variant="gaming" 
              size="xl"
              onClick={() => navigate('/tournaments')}
            >
              View Tournaments
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
