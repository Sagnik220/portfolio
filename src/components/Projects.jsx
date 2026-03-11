import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
    {
        title: 'DATANEXUS ENGINE',
        category: 'DISTRIBUTED SYSTEMS',
        description: 'A low-latency data processing engine for real-time financial analytics, handling 1M+ events per second.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
        link: '#',
        tech: ['Scala', 'Akka', 'ClickHouse']
    },
    {
        title: 'PIPELINE SENTINEL',
        category: 'ML OPS // MONITORING',
        description: 'Predictive monitoring system that identifies data quality degradation before it impacts downstream systems.',
        image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=1200',
        link: '#',
        tech: ['Python', 'PyTorch', 'Airflow']
    },
    {
        title: 'CLOUDSYNC BRIDGE',
        category: 'CLOUD INFRASTRUCTURE',
        description: 'Hybrid-cloud data synchronization layer with zero-loss guarantees across fragmented regions.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        link: '#',
        tech: ['Go', 'gRPC', 'Terraform']
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative bg-black/40 backdrop-blur-3xl border-y border-white/5">
            <div className="max-w-7xl mx-auto px-10 flex flex-col pt-20">
                <div className="flex justify-between items-end mb-24">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent-yellow font-mono text-xs uppercase tracking-[0.4em] mb-4 block"
                        >
                            02 // SELECTED WORKS
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter"
                        >
                            PROJECTS
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative flex flex-col"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 mb-8 bg-white/5 transition-all duration-700 hover:rounded-[1rem]">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                                <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center cursor-pointer">
                                        <ArrowUpRight size={20} className="stroke-[3]" />
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl text-white flex items-center justify-center cursor-pointer">
                                        <Github size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="px-2">
                                <span className="text-accent-green font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                                    {project.category}
                                </span>
                                <h3 className="text-4xl font-black mb-4 tracking-tight group-hover:text-accent-yellow transition-colors cursor-pointer">
                                    {project.title}
                                </h3>
                                <p className="text-lg text-[#a1a1aa] mb-8 leading-relaxed max-w-xl">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] font-black uppercase tracking-widest text-white/30">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
