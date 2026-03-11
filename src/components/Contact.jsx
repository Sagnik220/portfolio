import React from 'react';
import { motion } from 'framer-motion';
import { Send, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-10 relative z-10">
                <div className="flex flex-col mb-24 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent-yellow font-mono text-xs uppercase tracking-[0.4em] mb-4"
                    >
                        04 // TRANSMISSION
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none mb-12"
                    >
                        LET'S <br />
                        <span className="text-white/20">CONNECT</span>
                    </motion.h2>
                    <p className="text-2xl text-[#a1a1aa] font-medium leading-relaxed max-w-2xl">
                        Looking for a high-performance data infrastructure? <br />
                        Send a message to initiate collaboration.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-7">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-focus-within:text-accent-yellow transition-colors">NAME</label>
                                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-accent-yellow transition-all" placeholder="YOUR NAME" />
                                </div>
                                <div className="space-y-4 group">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-focus-within:text-accent-yellow transition-colors">EMAIL</label>
                                    <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-accent-yellow transition-all" placeholder="EMAIL ADDRESS" />
                                </div>
                            </div>
                            <div className="space-y-4 group">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-focus-within:text-accent-yellow transition-colors">MESSAGE</label>
                                <textarea className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:outline-none focus:border-accent-yellow transition-all min-h-[150px]" placeholder="HOW CAN WE BUILD SOMETHING GREAT?"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] px-16 py-6 rounded-full flex items-center justify-center gap-6"
                            >
                                SEND SIGNAL
                                <Send size={16} />
                            </motion.button>
                        </form>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between items-end border-l border-white/5 pl-20 py-4">
                        <div className="space-y-12 text-right">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">DIRECT EMAIL</span>
                                <h4 className="text-2xl font-black text-accent-yellow hover:text-white transition-colors cursor-pointer">HELLO@SAGNIK.DE</h4>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">SOCIAL NETWORKS</span>
                                <div className="flex gap-6 justify-end pt-2">
                                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                                        <div key={i} className="text-[#a1a1aa] hover:text-white transition-colors cursor-pointer">
                                            <Icon size={24} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto pt-20">
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 flex items-center gap-4">
                                <span className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></span>
                                SYSTEMS ONLINE // 2026
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
