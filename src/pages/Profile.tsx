import { Button } from '@/components/ui/button';
import { User, Trophy, Star, Target, TrendingUp } from 'lucide-react';

const Profile = () => {
  const playerStats = {
    name: 'Player123',
    level: 15,
    coins: 1250,
    totalWins: 87,
    totalGames: 156,
    winStreak: 5,
    bestStreak: 12,
    rank: 234
  };

  const achievements = [
    { name: 'First Win', description: 'Win your first game', unlocked: true },
    { name: 'Win Streak', description: 'Win 5 games in a row', unlocked: true },
    { name: 'Century Club', description: 'Win 100 games', unlocked: false },
    { name: 'Tournament Victor', description: 'Win a tournament', unlocked: false },
  ];

  const cosmetics = [
    { name: 'Neon X', type: 'X Symbol', owned: true, cost: 500 },
    { name: 'Glow O', type: 'O Symbol', owned: true, cost: 500 },
    { name: 'Rainbow Board', type: 'Board Theme', owned: false, cost: 1000 },
    { name: 'Lightning Effects', type: 'Animation', owned: false, cost: 1500 },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Player Profile</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Player Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-neon">
                  <User className="h-12 w-12 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">{playerStats.name}</h2>
                <p className="text-muted-foreground">Level {playerStats.level}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-card rounded-lg border">
                  <span className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-accent" />
                    <span>Coins</span>
                  </span>
                  <span className="font-bold text-accent">{playerStats.coins}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-card rounded-lg border">
                  <span className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span>Rank</span>
                  </span>
                  <span className="font-bold text-primary">#{playerStats.rank}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-card rounded-lg border">
                  <span className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-secondary" />
                    <span>Win Rate</span>
                  </span>
                  <span className="font-bold text-secondary">
                    {Math.round((playerStats.totalWins / playerStats.totalGames) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6">
              <h3 className="text-xl font-bold mb-4">Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">{playerStats.totalWins}</div>
                  <div className="text-xs text-muted-foreground">Total Wins</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-accent">{playerStats.winStreak}</div>
                  <div className="text-xs text-muted-foreground">Current Streak</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-secondary">{playerStats.bestStreak}</div>
                  <div className="text-xs text-muted-foreground">Best Streak</div>
                </div>
                <div className="text-center p-3 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-foreground">{playerStats.totalGames}</div>
                  <div className="text-xs text-muted-foreground">Total Games</div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements & Cosmetics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Achievements */}
            <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6">
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`
                      p-4 rounded-lg border transition-all duration-300
                      ${achievement.unlocked 
                        ? 'bg-gradient-accent/10 border-accent shadow-glow' 
                        : 'bg-card border-border opacity-60'
                      }
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <Trophy className={`h-6 w-6 ${achievement.unlocked ? 'text-accent' : 'text-muted-foreground'}`} />
                      <div>
                        <h4 className="font-bold">{achievement.name}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cosmetics Shop */}
            <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6">
              <h3 className="text-xl font-bold mb-4">Cosmetics Shop</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {cosmetics.map((cosmetic, index) => (
                  <div
                    key={index}
                    className={`
                      p-4 rounded-lg border transition-all duration-300
                      ${cosmetic.owned 
                        ? 'bg-gradient-primary/10 border-primary' 
                        : 'bg-card border-border hover:border-accent/50'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold">{cosmetic.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-accent" />
                        <span className="font-bold">{cosmetic.cost}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{cosmetic.type}</p>
                    <Button
                      variant={cosmetic.owned ? "gaming" : "neon"}
                      size="sm"
                      className="w-full"
                      disabled={cosmetic.owned}
                    >
                      {cosmetic.owned ? 'Owned' : 'Purchase'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;