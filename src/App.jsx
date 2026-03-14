import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from './components/ui/AnimatedBackground.jsx';
import Navbar from './components/global/Navbar.jsx';
import Portfolio from './components/Portfolio.jsx';
import SplashScreen from './components/ui/SplashScreen.jsx'
import CustomCursor from './components/global/CustomCursor.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 selection:text-emerald-500 font-sans antialiased overflow-x-hidden cursor-none">
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <AnimatedBackground />
            <Navbar />
            <main className="relative">
              <Portfolio />
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
