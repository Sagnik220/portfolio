import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black tracking-widest group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className="text-white group-hover:text-accent-yellow transition-colors">SAGNIK</span>
                    <span className="text-accent-yellow">.DE</span>
                </motion.div>

                {/* Desktop Menu - Center Pilled Layout */}
                <div className="hidden lg:flex items-center gap-1 bg-black/40 backdrop-blur-3xl border border-white/5 rounded-full px-2 py-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-3 bg-accent-yellow text-black font-black uppercase text-[10px] tracking-[0.2em] px-8 py-4 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all"
                        onClick={() => window.open('/cv.pdf', '_blank')}
                    >
                        <Download size={14} className="stroke-[3]" />
                        Download CV
                    </motion.button>

                    <button
                        className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute top-24 left-6 right-6 p-8 bg-black/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 lg:hidden shadow-2xl flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold text-white hover:text-accent-yellow transition-colors tracking-tight py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="mt-4 bg-accent-yellow text-black font-black uppercase text-xs tracking-widest py-5 rounded-2xl flex justify-center items-center gap-3">
                            <Download size={16} />
                            Download CV
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
