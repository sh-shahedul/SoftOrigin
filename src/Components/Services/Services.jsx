import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';

// Add one image per service in your assets folder and import them here.
// Replace these paths with your own real images.
import customSoftwareImg from "../../assets/hero.jpg"; 
import webAppImg from "../../assets/hero.jpg"; 
import mobileAppImg from "../../assets/hero.jpg"; 
import saasImg from "../../assets/hero.jpg"; 
import apiBackendImg from "../../assets/hero.jpg"; 
import uiuxImg from "../../assets/hero.jpg"; 

const services = [
    {
        number: '01',
        title: 'Custom Software Development',
        description: 'Tailor-made software built from scratch to solve your specific business challenges with high performance and efficiency.',
        image: customSoftwareImg,
    },
    {
        number: '02',
        title: 'Web Application Development',
        description: 'Modern, fast, and responsive web applications built using React, Next.js, and robust full-stack frameworks.',
        image: webAppImg,
    },
    {
        number: '03',
        title: 'Mobile App Development',
        description: 'Cross-platform iOS and Android apps designed for smooth user experiences and high performance.',
        image: mobileAppImg,
    },
    {
        number: '04',
        title: 'SaaS Product Engineering',
        description: 'Scalable multi-tenant SaaS architecture designed to handle high traffic, subscription models, and seamless user management.',
        image: saasImg,
    },
    {
        number: '05',
        title: 'API & Backend Development',
        description: 'Secure, RESTful, and GraphQL APIs paired with high-performance Node.js and database architectures.',
        image: apiBackendImg,
    },
    {
        number: '06',
        title: 'UI/UX Design & Prototyping',
        description: 'User-centered wireframes and interactive UI designs built to maximize conversion and user engagement.',
        image: uiuxImg,
    },
];

const Services = () => {
    const [activeService, setActiveService] = useState(0);
    const selectedService = services[activeService];

    return (
        <section id="services" className="overflow-hidden bg-[#020b1d] py-20 text-white md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    className="mx-auto max-w-3xl text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">
                        What we do
                    </p>
                    <h2 className="text-2xl font-bold leading-tight md:text-5xl lg:text-6xl uppercase">
                        <span className=" text-white">Our Software</span> <br />
                        <span className=" text-cyan-400">Development Services</span>
                    </h2>
                    <p className="mx-auto mt-3 md:mt-5 max-w-5xl text-base leading-7 text-slate-300 md:text-lg">
                        We turn ambitious ideas into secure, scalable digital products—delivering thoughtful design,
                        robust engineering, and dependable support from start to finish.
                    </p>
                </motion.div>

                <div className="mt-12 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
                    <div className="grid gap-3">
                        {services.map((service, index) => {
                            const isActive = index === activeService;
                            return (
                                <motion.button
                                    type="button"
                                    key={service.number}
                                    onClick={() => setActiveService(index)}
                                    onMouseEnter={() => setActiveService(index)}
                                    onFocus={() => setActiveService(index)}
                                    initial={{ opacity: 0, x: -24 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                                    whileHover={{ y: -3, scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-colors duration-300 md:p-6 ${
                                        isActive
                                            ? 'border-cyan-400/80 bg-gradient-to-r from-[#082458] to-[#0b1228] shadow-[0_0_32px_rgba(34,211,238,0.15)]'
                                            : 'border-white/5 bg-white/[0.035] hover:border-cyan-400/30 hover:bg-white/[0.07]'
                                    }`}
                                    aria-pressed={isActive}
                                >
                                    <span
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                                            isActive ? 'bg-cyan-400 text-[#001E5F]' : 'bg-[#102859] text-white group-hover:bg-cyan-400/20'
                                        }`}
                                    >
                                        {service.number}
                                    </span>
                                    <span>
                                        <span className="block text-lg font-bold text-white uppercase">{service.title}</span>
                                        <span className="mt-2 block text-sm leading-6 text-slate-400">{service.description}</span>
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>

                    <motion.div
                        className="group relative min-h-[470px] overflow-hidden rounded-3xl border border-white/10 bg-[#07152c] shadow-2xl"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <AnimatePresence mode="sync">
                            <motion.img
                                key={`img-${selectedService.number}`}
                                src={selectedService.image}
                                alt={selectedService.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                initial={{ opacity: 0, scale: 1.08 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            />
                        </AnimatePresence>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020b1d] via-[#020b1d]/35 to-[#001E5F]/15" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedService.number}
                                className="absolute inset-x-0 bottom-0 p-7 md:p-9"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.35, ease: 'easeOut' }}
                            >
                                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                                    <FiCheck /> SoftOrigin expertise
                                </span>
                                <h3 className="max-w-md text-3xl font-bold leading-tight md:text-4xl">
                                    {selectedService.title}
                                </h3>
                                <p className="mt-4 max-w-lg text-base leading-7 text-slate-200">
                                    {selectedService.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-[#001E5F] transition hover:bg-cyan-300 hover:gap-4"
                                >
                                    Discuss your project <FiArrowUpRight className="text-lg" />
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;