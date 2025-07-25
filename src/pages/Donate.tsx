import { Button } from '@/components/ui/button';
import { Heart, Coffee, Star, Gift } from 'lucide-react';

const Donate = () => {
  const donationTiers = [
    {
      amount: 5,
      title: 'Coffee Support',
      description: 'Buy me a coffee to keep coding!',
      icon: Coffee,
      perks: ['Good karma', 'Our gratitude']
    },
    {
      amount: 15,
      title: 'Game Enthusiast',
      description: 'Support continued development',
      icon: Star,
      perks: ['Special badge', 'Early feature access', 'Discord access']
    },
    {
      amount: 50,
      title: 'Super Supporter',
      description: 'Help us add amazing new features',
      icon: Gift,
      perks: ['Exclusive cosmetics', 'Beta tester role', 'Custom username color', 'Priority support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center shadow-neon animate-float">
            <Heart className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Support the Developer</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hey there! I'm an indie developer passionate about creating fun games. 
            Your support helps me continue developing and improving Super Tic Tac Toe, 
            adding new features and keeping the servers running.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {donationTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`
                  bg-gradient-card rounded-xl border p-6 shadow-deep text-center
                  hover:scale-105 transition-all duration-300
                  ${index === 1 ? 'border-primary shadow-neon' : 'border-border'}
                `}
              >
                <div className={`
                  w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                  ${index === 0 ? 'bg-gradient-accent' : 
                    index === 1 ? 'bg-gradient-primary' : 
                    'bg-gradient-secondary'}
                  shadow-glow
                `}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                <div className="text-3xl font-bold mb-2">
                  <span className="text-accent">$</span>
                  <span>{tier.amount}</span>
                </div>
                <p className="text-muted-foreground mb-4">{tier.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">What you get:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {tier.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="flex items-center justify-center space-x-1">
                        <span className="text-accent">•</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={index === 1 ? "gaming" : "neon"}
                  className="w-full"
                  size="lg"
                >
                  Donate ${tier.amount}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-card rounded-xl border border-border/50 shadow-deep p-6 text-center">
          <h3 className="text-xl font-bold mb-4">Other Ways to Support</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-bold mb-2">Share the Game</h4>
              <p className="text-sm text-muted-foreground">
                Tell your friends about Super Tic Tac Toe!
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-bold mb-2">Give Feedback</h4>
              <p className="text-sm text-muted-foreground">
                Help improve the game with your suggestions.
              </p>
            </div>
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-bold mb-2">Report Bugs</h4>
              <p className="text-sm text-muted-foreground">
                Help us fix issues and improve stability.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            💖 Thank you for considering supporting the development of Super Tic Tac Toe! 
            Every contribution, no matter the size, means the world to me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;