import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Server, Share2 } from 'lucide-react';

const Home = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-10 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-12 h-[1px] bg-accent-yellow/50"></span>
                            <span className="text-accent-yellow font-mono text-xs uppercase tracking-[0.3em] font-bold">
                                > Data Engineering Specialist
                            </span>
                        </div>

                        <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] tracking-tighter mb-10">
                            ARCHITECTING <br />
                            <span className="bg-gradient-to-r from-accent-yellow via-[#fff] to-accent-green bg-clip-text text-transparent">
                                DATA FLOWS
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[#a1a1aa] max-w-2xl leading-relaxed mb-12 font-medium">
                            I build high-performance, resilient data infrastructures that transform raw potential into actionable intelligence.
                            Specializing in <span className="text-white">distributed systems</span> and <span className="text-white">real-time ETL</span>.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-white text-black font-black uppercase text-[10px] tracking-[0.25em] px-10 py-5 rounded-full flex items-center gap-4 transition-all"
                            >
                                START EXPLORING
                                <Share2 size={14} className="group-hover:rotate-45 transition-transform" />
                            </motion.button>

                            <div className="flex -space-x-4">
                                {[Database, Server, Terminal].map((Icon, i) => (
                                    <div key={i} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-accent-green">
                                        <Icon size={20} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-4 hidden lg:block">
                        {/* Empty space for 3D visibility */}
                    </div>
                </div>
            </div>

            {/* Scroll indicator - vertical bar style */}
            <motion.div
                animate={{ height: [40, 80, 40] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute bottom-10 left-10 w-[2px] bg-gradient-to-b from-accent-yellow to-transparent hidden md:block"
            />
            <div className="absolute bottom-10 left-14 text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 rotate-180 [writing-mode:vertical-lr] hidden md:block">
                SCROLL TO NAVIGATE
            </div>
        </section>
    );
};

export default Home;
