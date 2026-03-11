import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom component to safely render local SVGs and apply theme colors (shared with Skills)
const LocalSvgIcon = ({ slug, color, size = 24, className = "" }) => {
    const [svgContent, setSvgContent] = useState(null);

    useEffect(() => {
        fetch(`/icons/${slug}.svg`)
            .then(res => res.text())
            .then(text => {
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

const experiences = [
    {
        role: 'Data Engineer',
        company: 'Ernst & Young',
        slug: 'ey',
        period: 'NOV 2025 — PRESENT',
        location: 'Kolkata, India',
        description: [
            'Develop a cloud-native data platform for EY Tax Platform – Raptor, supporting 100+ enterprise clients for tax notice tracking and compliance workflows.',
            'Build scalable batch pipelines using Azure Databricks and PySpark to ingest and transform tax notice data from 6+ source systems, processing 5M+ records per batch.',
            'Implement medallion architecture (Bronze, Silver, Gold) on ADLS Gen2 to deliver audit-ready, traceable datasets for regulatory reporting across multiple compliance workflows.',
            'Standardize ingestion and transformation logic using reusable, parameter-driven Databricks notebooks, reducing pipeline development time by 30%.',
            'Collaborate with 8+ tax SMEs, architects, and QA engineers to translate regulatory requirements into validated data models.'
        ],
        skills: ['Azure', 'Databricks', 'PySpark', 'ADLS Gen2', 'Medallion Architecture']
    },
    {
        role: 'Data Engineer',
        company: 'Oracle',
        slug: 'oracle',
        period: 'AUG 2022 — OCT 2025',
        location: 'Bengaluru, India',
        description: [
            'Designed and delivered end-to-end batch data pipelines using Azure Data Factory (ADF), improving data availability by 95%.',
            'Built and optimized PySpark pipelines on Azure Databricks, achieving a 40% reduction in pipeline runtime.',
            'Standardized ingestion frameworks across 12+ source systems using parameter-driven ADF pipelines, reducing operational escalations by 70%.',
            'Architected a secure, scalable data lake on ADLS Gen2 with role-based access control (RBAC).',
            'Led sprint reviews and data quality discussions with analysts and stakeholders across 3 analytics teams.'
        ],
        skills: ['Azure Data Factory', 'Databricks', 'PySpark', 'ADLS Gen2', 'Power BI']
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-10">
                <div className="flex flex-col mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent-green font-mono text-xs uppercase tracking-[0.4em] mb-4"
                    >
                        01 // CAREER PATH
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter"
                    >
                        EXPERIENCE
                    </motion.h2>
                </div>

                <div className="space-y-40">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12 group"
                        >
                            <div className="lg:col-span-4 flex flex-col py-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-yellow/40 transition-all duration-500 overflow-hidden">
                                        <LocalSvgIcon
                                            slug={exp.slug}
                                            size={32}
                                            color="#facc15"
                                            className="opacity-70 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-accent-green tracking-widest uppercase leading-tight">
                                        {exp.company}
                                    </h4>
                                </div>
                                <span className="text-xs font-mono text-[#a1a1aa] tracking-[0.2em] uppercase">
                                    {exp.location}
                                </span>
                                <div className="hidden lg:block h-[1px] w-full bg-white/5 mt-auto group-hover:bg-accent-yellow/30 transition-colors duration-500"></div>
                            </div>

                            <div className="lg:col-span-8">
                                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
                                    <div className="flex flex-col">
                                        <h3 className="text-4xl md:text-5xl font-black mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                            {exp.role}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col md:text-right">
                                        <span className="text-2xl font-black text-white/40 group-hover:text-accent-yellow transition-colors duration-500 leading-none">
                                            {exp.period.split(' — ')[0]}
                                        </span>
                                        <span className="text-lg font-bold text-white/20 group-hover:text-accent-yellow/60 transition-colors duration-500">
                                            {exp.period.split(' — ')[1]}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-4 text-lg text-[#a1a1aa] leading-relaxed mb-10 max-w-3xl list-none">
                                    {exp.description.map((point, idx) => (
                                        <li key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-2 before:h-[1px] before:bg-accent-green/60">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-3">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest text-[#a1a1aa] group-hover:border-accent-yellow/20 group-hover:text-white transition-all">
                                            {skill}
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

export default Experience;
