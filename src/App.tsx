
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-background border-t border-white/5 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-serif text-white text-lg font-bold mb-2">HANAN<span className="text-primary">.</span></p>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Abdul Hanan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
