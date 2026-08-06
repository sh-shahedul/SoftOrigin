import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-100 transition-all duration-500 hover:border-blue-700/40 hover:shadow-2xl hover:shadow-blue-700/15"
        >
            {/* Image Container with Dynamic Layers */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                />

                {/* Multi-stage Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-75" />

                {/* Floating Category Badge */}
                <div className="absolute left-4 top-4 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/60 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-blue-300 backdrop-blur-md border border-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                        {project.category}
                    </span>
                </div>

                {/* Quick Action Button - Floating Top Right */}
                <div className="absolute right-4 top-4 z-10 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-blue-700 hover:text-white"
                        aria-label="Visit Live Site"
                    >
                        <FiArrowUpRight className="h-5 w-5" />
                    </a>
                </div>

                {/* Bottom Overlay Info (Hover Reveal) */}
                <div className="absolute inset-x-4 bottom-4 z-10 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="text-xs font-medium text-slate-300">Live Preview</span>
                    <FiExternalLink className="h-4 w-4 text-blue-400" />
                </div>
            </div>

            {/* Main Content Details */}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Header Row: Title & GitHub Icon */}
                <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none">
                            {project.title}
                        </a>
                    </h3>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 text-slate-400 transition-all hover:bg-blue-50 hover:text-blue-700"
                            aria-label="View Source Code"
                        >
                            <FiGithub className="h-5 w-5" />
                        </a>
                    )}
                </div>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack Pills with Accent Touches */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-lg bg-slate-50 border border-slate-200/70 px-3 py-1 text-xs font-medium text-slate-600 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50/50 group-hover:text-blue-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bottom Accent Line (Animated Left-to-Right on Hover) */}
            <span className="absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-700 via-indigo-500 to-sky-400 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30" />
        </motion.div>
    );
};

export default ProjectCard; 