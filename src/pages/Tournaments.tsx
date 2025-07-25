import { Button } from '@/components/ui/button';
import { Calendar, Users, Trophy, Clock } from 'lucide-react';

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      name: 'Weekly Championship',
      prize: '5,000 Coins',
      participants: 156,
      startTime: '2024-01-15 18:00',
      status: 'upcoming',
      entryFee: 100
    },
    {
      id: 2,
      name: 'Speed Tournament',
      prize: '2,500 Coins',
      participants: 89,
      startTime: '2024-01-12 20:00',
      status: 'live',
      entryFee: 50
    },
    {
      id: 3,
      name: 'Monthly Grand Prix',
      prize: '15,000 Coins',
      participants: 324,
      startTime: '2024-01-20 16:00',
      status: 'upcoming',
      entryFee: 250
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'text-accent border-accent shadow-glow';
      case 'upcoming':
        return 'text-primary border-primary shadow-neon';
      case 'finished':
        return 'text-muted-foreground border-border';
      default:
        return 'text-foreground border-border';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Tournaments</h1>
          <p className="text-muted-foreground">Compete with players worldwide for amazing prizes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className={`
                bg-gradient-card rounded-xl border p-6 shadow-deep
                hover:scale-105 transition-all duration-300
                ${getStatusColor(tournament.status)}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{tournament.name}</h3>
                <div className={`
                  px-3 py-1 rounded-full text-xs font-bold uppercase
                  ${tournament.status === 'live' ? 'bg-accent/20 text-accent' : 
                    tournament.status === 'upcoming' ? 'bg-primary/20 text-primary' : 
                    'bg-muted text-muted-foreground'}
                `}>
                  {tournament.status}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-accent" />
                    <span className="text-sm">Prize</span>
                  </div>
                  <span className="font-bold text-accent">{tournament.prize}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Players</span>
                  </div>
                  <span className="font-medium">{tournament.participants}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Start Time</span>
                  </div>
                  <span className="font-medium text-sm">{tournament.startTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Entry Fee</span>
                  </div>
                  <span className="font-bold text-secondary">{tournament.entryFee} ⭐</span>
                </div>
              </div>

              <Button
                variant={tournament.status === 'live' ? 'neon' : 'gaming'}
                className="w-full"
                disabled={tournament.status === 'finished'}
              >
                {tournament.status === 'live' ? 'Join Now' : 
                 tournament.status === 'upcoming' ? 'Register' : 'Finished'}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            <Calendar className="h-5 w-5 mr-2" />
            Create Tournament
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;