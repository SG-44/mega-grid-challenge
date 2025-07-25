import { Button } from '@/components/ui/button';
import { Trophy, User, Calendar, BookOpen, Heart, Home, Gamepad2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Play', path: '/game', icon: Gamepad2 },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Tournaments', path: '/tournaments', icon: Calendar },
    { name: 'Tutorial', path: '/tutorial', icon: BookOpen },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Donate', path: '/donate', icon: Heart },
  ];

  return (
    <nav className="bg-gradient-card border-b border-border shadow-deep">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-neon">
              <Gamepad2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Super Tic Tac Toe
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "gaming" : "ghost"}
                  size="sm"
                  onClick={() => navigate(item.path)}
                  className={`flex items-center space-x-1 ${isActive ? 'shadow-neon' : ''}`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.name}</span>
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2 bg-card rounded-lg px-3 py-1 border border-accent/20">
              <div className="text-accent font-bold">⭐</div>
              <span className="text-sm font-medium">1,250</span>
            </div>
            <Button variant="neon" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;