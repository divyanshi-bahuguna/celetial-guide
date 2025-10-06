// src/App.jsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// General Pages
import CalculatorTemplate from "./pages/CalculatorTemplate.jsx";
import LoveCalculator from "./pages/calculator/LoveCalculator";
import NakshatraCalculator from "./pages/calculator/NakshatraCalculator";
import DashaCalculator from "./pages/calculator/DashaCalculator";
import MangalDoshCalculator from "./pages/calculator/MangalDoshCalculator";
import KaalSarpCalculator from "./pages/calculator/KaalSarpCalculator";
import PitraDoshCalculator from "./pages/calculator/PitraDoshCalculator";
import SadeSatiCalculator from "./pages/calculator/SadeSatiCalculator";
import VaastuCalculator from "./pages/calculator/VaastuCalculator";
import VehicleNumberCalculator from "./pages/calculator/VehicleNumberCalculator";
import RahuKetuCalculator from "./pages/calculator/RahuKetuCalculator";
import LalKitabCalculator from "./pages/calculator/LalKitabCalculator";
import FlameCalculator from "./pages/calculator/FlameCalculator";
import KundliCalculator from "./pages/calculator/KundliCalculator";
import LagnaNavamsaCalculator from "./pages/calculator/LagnaNavamsaCalculator";
import RudrakshaCalculator from "./pages/calculator/RudrakshaCalculator";
import LuckyDatesCalculator from "./pages/calculator/LuckyDatesCalculator";
import UnluckyDatesCalculator from "./pages/calculator/UnluckyDatesCalculator";
import MatchMakingCalculator from "./pages/calculator/MatchMakingCalculator";
import NumerologyCalculator from "./pages/calculator/NumerologyCalculator";
import LuckyColorCalculator from "./pages/calculator/LuckyColorCalculator";
import UnluckyColorCalculator from "./pages/calculator/UnluckyColorCalculator";
import PersonalYearCalculator from "./pages/calculator/PersonalYearCalculator";
import FavourableAlphabetCalculator from "./pages/calculator/FavourableAlphabetCalculator";
import MoonSignCalculator from "./pages/calculator/MoonSignCalculator";

import "./index.css";
import Index from "./pages/Index.jsx";
import Horoscope from "./pages/Horoscope";
import KundliMilan from "./pages/KundliMilan";
import Festivals from "./pages/Festivals";
import Store from "./pages/Store";
import Panchang from "./pages/Panchang";
import Eclipse from "./pages/Eclipse";
import NameCorrection from "./pages/NameCorrection";
import Calculators from "./pages/Calculators";
import ShubhMuhurat from "./pages/ShubhMuhurat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Calculator Pages


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/kundli-milan" element={<KundliMilan />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/shubh-muhurat" element={<ShubhMuhurat />} />
          <Route path="/panchang" element={<Panchang />} />
          <Route path="/eclipse" element={<Eclipse />} />
          <Route path="/store" element={<Store />} />
          <Route path="/name-correction" element={<NameCorrection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Calculator Routes */}
          <Route path="/calculator/love" element={<LoveCalculator />} />
          <Route path="/calculator/nakshatra" element={<NakshatraCalculator />} />
          <Route path="/calculator/dasha" element={<DashaCalculator />} />
          <Route path="/calculator/mangal-dosh" element={<MangalDoshCalculator />} />
          <Route path="/calculator/kaal-sarp" element={<KaalSarpCalculator />} />
          <Route path="/calculator/pitra-dosh" element={<PitraDoshCalculator />} />
          <Route path="/calculator/sade-sati" element={<SadeSatiCalculator />} />
          <Route path="/calculator/vaastu" element={<VaastuCalculator />} />
          <Route path="/calculator/vehicle-number" element={<VehicleNumberCalculator />} />
          <Route path="/calculator/rahu-ketu" element={<RahuKetuCalculator />} />
          <Route path="/calculator/lal-kitab" element={<LalKitabCalculator />} />
          <Route path="/calculator/flame" element={<FlameCalculator />} />
          <Route path="/calculator/kundli" element={<KundliCalculator />} />
          <Route path="/calculator/lagna-navamsa" element={<LagnaNavamsaCalculator />} />
          <Route path="/calculator/rudraksha" element={<RudrakshaCalculator />} />
          <Route path="/calculator/lucky-dates" element={<LuckyDatesCalculator />} />
          <Route path="/calculator/unlucky-dates" element={<UnluckyDatesCalculator />} />
          <Route path="/calculator/matchmaking" element={<MatchMakingCalculator />} />
          <Route path="/calculator/numerology" element={<NumerologyCalculator />} />
          <Route path="/calculator/lucky-color" element={<LuckyColorCalculator />} />
          <Route path="/calculator/unlucky-color" element={<UnluckyColorCalculator />} />
          <Route path="/calculator/personal-year" element={<PersonalYearCalculator />} />
          <Route path="/calculator/alphabet-numbers" element={<FavourableAlphabetCalculator />} />
          <Route path="/calculator/moon-sign" element={<MoonSignCalculator />} />

          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
