import { motion } from 'framer-motion';
import journeyImage from '../../assets/hero.jpg';
import platformImage from '../../assets/hero.png';

const JOURNEY_STEPS = [
    {
        step: 1,
        phase: 'Phase 1',
        title: 'The Foundation',
        description: 'Started as a passionate full-stack team delivering high-grade web applications and modern visual interfaces.',
    },
    {
        step: 2,
        phase: 'Phase 2',
        title: 'Full-Stack Expansion',
        description: 'Expanded expertise across end-to-end architectures, cloud integration, API design, and multi-tenant SaaS products.',
    },
    {
        step: 3,
        phase: 'Phase 3',
        title: 'Scaling Global Clients',
        description: 'Partnering with startups, SMEs, and digital ventures globally to deliver mission-critical software solutions.',
    },
];

const GrowthJourney = () => (
    <section className="overflow-hidden bg-blue-100/20 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
            <motion.div
                className="mx-auto mb-14 max-w-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#14A9B8]">Our evolution</span>
                <h2 className="mt-3 text-3xl font-extrabold text-[#001E5F] sm:text-4xl">
                    Our Growth <span className="text-[#14A9B8]">Journey</span>
                </h2>
                <p className="mt-3 text-sm text-slate-500 sm:text-base">
                    A timeline of how Soft Origin evolved into a full-stack software partner.
                </p>
            </motion.div>

            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="relative lg:col-span-7">
                    <div className="absolute bottom-6 left-[23px] top-6 w-0.5 bg-[#14D8D4]/25" />

                    <div className="space-y-10">
                        {JOURNEY_STEPS.map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="group relative flex items-start gap-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                            >
                                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#001E5F] text-base font-bold text-white shadow-md shadow-[#001E5F]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#14A9B8]">
                                    {item.step}
                                </div>
                                <div className="pt-1">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#14A9B8]">{item.phase}</span>
                                    <h3 className="mt-1 text-xl font-bold text-[#001E5F]">{item.title}</h3>
                                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="relative mx-auto h-[460px] w-full max-w-[500px] lg:col-span-5 lg:h-[590px]"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
                >
                    <div className="absolute inset-x-4 inset-y-5 rounded-[2rem] " />

                    <motion.div
                        className="absolute right-0 top-8 h-[72%] w-[78%] overflow-hidden rounded-2xl border-4 border-white bg-[#001E5F]/5 shadow-xl shadow-[#001E5F]/15"
                        whileHover={{ scale: 1.025 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img src={journeyImage} alt="Soft Origin team collaboration" className="h-full w-full object-cover object-[65%_center]" />
                    </motion.div>

                    <motion.div
                        className="absolute bottom-8 left-0 z-20 h-[42%] w-[55%] overflow-hidden rounded-2xl border-4 border-white bg-[#001E5F] p-4 shadow-xl shadow-[#001E5F]/20 sm:p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        whileHover={{ y: -6 }}
                    >
                        <img src={platformImage} alt="Soft Origin technology platform" className="h-full w-full object-contain opacity-90" />
                    </motion.div>

                    <motion.div
                        className="absolute left-[5%] top-0 z-10 h-[30%] w-[42%] overflow-hidden rounded-xl border-4 border-white shadow-lg shadow-[#001E5F]/15"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img src={journeyImage} alt="Soft Origin project discussion" className="h-full w-full object-cover object-[30%_center]" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default GrowthJourney;
