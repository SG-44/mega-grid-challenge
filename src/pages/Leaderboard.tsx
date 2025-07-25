import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'GameMaster99', wins: 1247, winStreak: 15, coins: 15670 },
    { rank: 2, name: 'TicTacPro', wins: 1156, winStreak: 8, coins: 14220 },
    { rank: 3, name: 'StrategyKing', wins: 1089, winStreak: 12, coins: 13450 },
    { rank: 4, name: 'GridWarrior', wins: 967, winStreak: 5, coins: 11890 },
    { rank: 5, name: 'XOLegend', wins: 934, winStreak: 7, coins: 11120 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-accent" />;
      case 2:
        return <Medal className="h-6 w-6 text-secondary" />;
      case 3:
        return <Award className="h-6 w-6 text-primary" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">{rank}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-muted-foreground">Top players in Super Tic Tac Toe</p>
        </div>

        <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep overflow-hidden">
          <div className="bg-gradient-primary p-4">
            <h2 className="text-xl font-bold text-primary-foreground">Global Rankings</h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {leaderboardData.map((player) => (
                <div
                  key={player.rank}
                  className={`
                    flex items-center justify-between p-4 rounded-lg border
                    ${player.rank <= 3 
                      ? 'bg-gradient-card border-accent/30 shadow-glow' 
                      : 'bg-card border-border hover:border-primary/30'
                    }
                    transition-all duration-300 hover:scale-105
                  `}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                      {getRankIcon(player.rank)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{player.name}</h3>
                      <p className="text-muted-foreground">Rank #{player.rank}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{player.wins}</div>
                      <div className="text-xs text-muted-foreground">Wins</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">{player.winStreak}</div>
                      <div className="text-xs text-muted-foreground">Streak</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">{player.coins}</div>
                      <div className="text-xs text-muted-foreground">Coins</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="gaming" size="lg">
                View More Rankings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;