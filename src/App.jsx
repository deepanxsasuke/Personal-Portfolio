import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-blue-500/30">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl font-bold font-display tracking-widest mb-4"
              >
                PORTFOLIO<span className="text-blue-500">.</span>
              </motion.div>
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-blue-500"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs uppercase tracking-[0.5em] mt-4 text-zinc-500"
              >
                Initializing Portfolio
              </motion.p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ThreeBackground />

      <main className={loading ? "hidden" : "block"}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        <footer className="py-12 border-t border-white/5 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Developer Portfolio. Built for the future of AI.
          </p>
        </footer>
      </main>

      <CursorGlow />
    </div>
  );
}

function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] opacity-50"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.05), transparent 80%)`
      }}
    />
  );
}

export default App;