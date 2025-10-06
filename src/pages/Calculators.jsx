import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calculator, Heart, Star, Moon, Zap, Home, Car, Hash, Sparkles } from "lucide-react";

const calculators = [
  { name: "Love Calculator", icon: Heart, path: "/calculator/love", description: "Check compatibility with your partner" },
  { name: "Nakshatra Calculator", icon: Star, path: "/calculator/nakshatra", description: "Find your birth star" },
  { name: "Dasha Calculator", icon: Moon, path: "/calculator/dasha", description: "Calculate planetary periods" },
  { name: "Mangal Dosh Calculator", icon: Zap, path: "/calculator/mangal-dosh", description: "Check Mars affliction" },
  { name: "Kaal Sarp Dosh Calculator", icon: Zap, path: "/calculator/kaal-sarp", description: "Check serpent dosha" },
  { name: "Pitra Dosh Calculator", icon: Zap, path: "/calculator/pitra-dosh", description: "Check ancestral dosha" },
  { name: "Shani Saade Sati Calculator", icon: Star, path: "/calculator/sade-sati", description: "Calculate Saturn's transit" },
  { name: "Vaastu Dosh Calculator", icon: Home, path: "/calculator/vaastu", description: "Check home Vaastu" },
  { name: "Lucky Vehicle Number", icon: Car, path: "/calculator/vehicle-number", description: "Find lucky vehicle number" },
  { name: "Rahu Ketu Calculator", icon: Moon, path: "/calculator/rahu-ketu", description: "Calculate lunar nodes" },
  { name: "Lal Kitab Calculator", icon: Calculator, path: "/calculator/lal-kitab", description: "Lal Kitab predictions" },
  { name: "Flame Calculator", icon: Heart, path: "/calculator/flame", description: "FLAME love test" },
  { name: "Kundli Calculator", icon: Star, path: "/calculator/kundli", description: "Generate birth chart" },
  { name: "Lagna Navamsa Calculator", icon: Star, path: "/calculator/lagna-navamsa", description: "Calculate ascendant charts" },
  { name: "Lucky Rudraksha", icon: Sparkles, path: "/calculator/rudraksha", description: "Find your lucky Rudraksha" },
  { name: "Lucky Dates Calculator", icon: Hash, path: "/calculator/lucky-dates", description: "Find auspicious dates" },
  { name: "Unlucky Dates Calculator", icon: Hash, path: "/calculator/unlucky-dates", description: "Find inauspicious dates" },
  { name: "Match Making Calculator", icon: Heart, path: "/calculator/matchmaking", description: "Check marriage compatibility" },
  { name: "Numerology Calculator", icon: Hash, path: "/calculator/numerology", description: "Calculate life path number" },
  { name: "Lucky Color Calculator", icon: Sparkles, path: "/calculator/lucky-color", description: "Find your lucky color" },
  { name: "Unlucky Color Calculator", icon: Sparkles, path: "/calculator/unlucky-color", description: "Find colors to avoid" },
  { name: "Personal Year Calculator", icon: Hash, path: "/calculator/personal-year", description: "Calculate personal year" },
  { name: "Favourable Alphabet", icon: Hash, path: "/calculator/alphabet-numbers", description: "Lucky letters & numbers" },
  { name: "Moon Sign Calculator", icon: Moon, path: "/calculator/moon-sign", description: "Calculate your moon sign" },
];

const Calculators = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold    mb-4">
              Astrology Calculators
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Free online calculators for accurate astrological predictions and guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link key={calc.path} to={calc.path}>
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold    mb-1">
                            {calc.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {calc.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-playfair font-bold    mb-2">
                Need Personalized Guidance?
              </h3>
              <p className="text-muted-foreground mb-4">
                Get detailed analysis and remedies from Pandit Ashu Bahuguna
              </p>
              <p className="   font-semibold">
                📞 +91 9760924411
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Calculators;