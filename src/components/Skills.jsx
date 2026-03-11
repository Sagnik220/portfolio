import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Database, Cloud, Code, Cpu, Zap,
    Layers, Server, Activity, Network, Box, Terminal
} from 'lucide-react';

// Custom icon component for Debezium (not in simple-icons, using a generic DB/sync icon)
const DebeziumIcon = ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12H3M21 6H3M21 18H3M3 12l4-4M3 6l4-4M3 18l4-4" />
    </svg>
);

// Custom component to safely render local SVGs and apply theme colors
const LocalSvgIcon = ({ slug, color, size = 24, className = "" }) => {
    const [svgContent, setSvgContent] = useState(null);

    useEffect(() => {
        fetch(`/icons/${slug}.svg`)
            .then(res => res.text())
            .then(text => {
                // Remove hardcoded fills and sizes so CSS takes over
                const cleanSvg = text
                    .replace(/fill="[^"]+"/gi, '')
                    .replace(/width="[^"]+"/gi, '')
                    .replace(/height="[^"]+"/gi, '');
                setSvgContent(cleanSvg);
            })
            .catch(() => console.error(`Failed to load local icon for ${slug}`));
    }, [slug]);

    return (
        <div
            style={{ color, width: size, height: size }}
            className={`flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg>path]:fill-current [&>svg>g>path]:fill-current ${className}`}
            dangerouslySetInnerHTML={{ __html: svgContent || `<svg viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>` }}
        />
    );
};

const Skills = () => {
    const categories = [
        {
            title: 'DATA ENGINE & DB',
            icon: <Database className="text-accent-yellow" />,
            skills: [
                { name: 'Databricks', slug: 'databricks' },
                { name: 'Snowflake', slug: 'snowflake' },
                { name: 'Spark', slug: 'apachespark' },
                { name: 'Kafka', slug: 'apachekafka' },
                { name: 'Flink', slug: 'apacheflink' },
                { name: 'Debezium', Icon: DebeziumIcon }, // Custom icon
                { name: 'Hadoop', slug: 'apachehadoop' },
            ],
            className: 'lg:col-span-2 lg:row-span-1 bg-accent-yellow/5 border-accent-yellow/20',
            iconColor: '#facc15'
        },
        {
            title: 'CLOUD INFRA',
            icon: <Cloud className="text-accent-green" />,
            skills: [
                { name: 'AWS', slug: 'aws' },
                { name: 'Azure', slug: 'azure' },
                { name: 'GCP', slug: 'googlecloud' },
            ],
            className: 'lg:col-span-1 lg:row-span-1 bg-accent-green/5 border-accent-green/20',
            iconColor: '#22c55e'
        },
        {
            title: 'DEVOPS & TOOLS',
            icon: <Cpu className="text-accent-yellow" />,
            skills: [
                { name: 'K8s', slug: 'kubernetes' },
                { name: 'Docker', slug: 'docker' },
                { name: 'Terraform', slug: 'terraform' },
                { name: 'Git', slug: 'git' },
                { name: 'GitHub', slug: 'github' },
            ],
            className: 'lg:col-span-1 lg:row-span-1 bg-accent-yellow/5 border-accent-yellow/20',
            iconColor: '#facc15'
        },
        {
            title: 'LANGUAGES & RDBMS',
            icon: <Code className="text-white" />,
            skills: [
                { name: 'Python', slug: 'python' },
                { name: 'SQL', slug: 'mysql' }, // MySQL is a good generic SQL logo
                { name: 'Postgres', slug: 'postgresql' },
                { name: 'Oracle', slug: 'oracle' },
                { name: 'Azure SQL', slug: 'mysql' }, // Using MySQL as a generic SQL icon if SQL Server is missing
            ],
            className: 'lg:col-span-2 lg:row-span-1 bg-white/5 border-white/20',
            iconColor: '#ffffff'
        },
        {
            title: 'ORCHESTRATION',
            icon: <Zap className="text-accent-green" />,
            skills: [
                { name: 'Airflow', slug: 'apacheairflow' },
                { name: 'dbt', slug: 'dbt' },
            ],
            className: 'lg:col-span-2 lg:row-span-1 bg-accent-green/5 border-accent-green/20',
            iconColor: '#22c55e'
        }
    ];

    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-black/60 backdrop-blur-sm border-t border-white/5">
            <div className="max-w-7xl mx-auto px-10">
                <div className="flex flex-col mb-24 text-right items-end">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent-green font-mono text-xs uppercase tracking-[0.4em] mb-4"
                    >
                        03 // TECHNICAL ARSENAL
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter"
                    >
                        SKILLS
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[auto]">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`${cat.className} rounded-[2rem] p-8 border flex flex-col group hover:border-white/40 hover:bg-white/10 transition-all duration-500`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-4 bg-black/60 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#a1a1aa] mt-4 text-right">
                                    {cat.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-6 mt-auto">
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center gap-2 group/icon"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center group-hover/icon:border-white/30 transition-all duration-300 group-hover/icon:-translate-y-1">
                                            {/* Render the icon, passing size and color props ensuring it sits within the theme */}
                                            {skill.slug ? (
                                                <LocalSvgIcon
                                                    slug={skill.slug}
                                                    size={24}
                                                    color={cat.iconColor}
                                                    className="opacity-70 group-hover/icon:opacity-100 transition-opacity drop-shadow-md"
                                                />
                                            ) : (
                                                React.createElement(skill.Icon, {
                                                    size: 24,
                                                    color: cat.iconColor,
                                                    className: "opacity-70 group-hover/icon:opacity-100 transition-opacity drop-shadow-md"
                                                })
                                            )}
                                        </div>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-[#a1a1aa] group-hover/icon:text-white transition-colors text-center w-full min-w-max">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
