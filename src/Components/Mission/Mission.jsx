import { motion } from 'framer-motion';
import { FiEye, FiTarget } from 'react-icons/fi';
import backgroundImage from '../../assets/hero.jpg';

const CARDS = [
    {
        title: 'Our Mission',
        description: 'To empower businesses worldwide by engineering custom, scalable, and secure full-stack software solutions that streamline operations, elevate user experiences, and unlock new growth opportunities.',
        icon: FiTarget,
    },
    {
        title: 'Our Vision',
        description: 'To become a global leader in software engineering—recognized for technical craftsmanship, reliable partnership, and transforming complex digital problems into simple, high-performing products.',
        icon: FiEye,
    },
];

const Mission = () => (
    <section
        className="relative isolate/90 overflow-hidden  bg-cover bg-center bg-fixed py-20 sm:py-24 lg:py-28"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="absolute inset-0 -z-10 bg-[#001E5F]/90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001E5F]/95 via-[#001E5F]/82 to-[#14D8D4]/30" />

        <div className="mx-auto max-w-[1440px] px-6">
            <motion.div
                className="mx-auto mb-10 max-w-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#14D8D4]">What drives us</span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Purpose with every product</h2>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">
                {CARDS.map(({ title, description, icon: Icon }, index) => (
                    <motion.article
                        key={title}
                        className="rounded-2xl border border-white/50 bg-white/95 p-8 shadow-2xl shadow-[#001E5F]/20 backdrop-blur-sm sm:p-10"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                        whileHover={{ y: -7 }}
                    >
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#14D8D4]/15 text-[#001E5F]">
                            <Icon size={23} strokeWidth={2.2} />
                        </span>
                        <h3 className="mt-6 text-2xl font-bold text-[#001E5F]">{title}</h3>
                        <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">{description}</p>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default Mission;
