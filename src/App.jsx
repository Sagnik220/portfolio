import React, { Suspense } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    useSmoothScroll();

    return (
        <div className="relative bg-[#020202] text-white selection:bg-accent-yellow selection:text-black min-h-screen">
            {/* Immersive 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <HeroCanvas />
            </div>

            {/* Content Layers */}
            <div className="relative z-10">
                <Navbar />

                <main>
                    <Home />
                    <Experience />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>

                <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-xl text-center">
                    <p className="text-text-secondary text-sm font-mono tracking-widest">
                        © 2026 SAGNIK MUKHERJEE // DATA ENGINEER PORTFOLIO
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default App;
