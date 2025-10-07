import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "hi" : "en");
  };

  const content = {
    en: {
      home: "Home",
      horoscope: "Horoscope",
      kundli: "Kundli Milan",
      calculators: "Calculators",
      festivals: "Festivals",
      muhurat: "Muhurat",
      panchang: "Panchang",
      eclipse: "Eclipse",
      store: "Store",
      about: "About",
      contact: "Contact"
    },
    hi: {
      home: "होम",
      horoscope: "राशिफल",
      kundli: "कुंडली मिलान",
      calculators: "कैलकुलेटर",
      festivals: "त्यौहार",
      muhurat: "मुहूर्त",
      panchang: "पंचांग",
      eclipse: "ग्रहण",
      store: "स्टोर",
      about: "परिचय",
      contact: "संपर्क"
    }
  };

  const t = content[language];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-playfair font-bold text-yellow-500">
              Pandit Ashu Bahuguna
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 text-sm">
            {Object.keys(t).map((key) => (
              <Link
                key={key}
                to={`/${key === "home" ? "" : key.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-gray-800 hover:text-red-500 transition-colors font-medium"
              >
                {t[key]}
              </Link>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 border-gray-300 text-gray-800 hover:text-red-500"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "EN" : "हिं"}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
