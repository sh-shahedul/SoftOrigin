import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
    { id: 1, value: 50, suffix: '+', progress: 72, label: 'Successful Projects Delivered' },
    { id: 2, value: 99, suffix: '%', progress: 99, label: 'Client Satisfaction Rate' },
    { id: 3, value: 100, suffix: '%', progress: 100, label: 'On-Time Delivery Commitment' },
    { id: 4, value: 24, suffix: '/7', progress: 100, label: 'Technical Support & Maintenance' },
];

const useCountUp = (target, isVisible) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return undefined;

        const duration = 1200;
        const startedAt = performance.now();
        let animationFrame;

        const updateCount = (now) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            setCount(Math.floor(target * (1 - (1 - progress) ** 3)));

            if (progress < 1) animationFrame = requestAnimationFrame(updateCount);
        };

        animationFrame = requestAnimationFrame(updateCount);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, target]);

    return count;
};

const MilestoneCard = ({ stat, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.35 });
    const count = useCountUp(stat.value, isInView);

    return (
        <motion.article
            ref={cardRef}
            className="rounded-2xl border border-[#14D8D4]/20  p-6 shadow-lg shadow-[#001E5F]/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -6, boxShadow: '0 18px 36px rgba(0, 30, 95, 0.12)' }}
        >
            <div className="flex items-end justify-between gap-4">
                <strong className="text-4xl font-extrabold tracking-tight text-[#001E5F] sm:text-5xl">
                    {count}{stat.suffix}
                </strong>
                <span className="mb-2 h-2.5 w-2.5 rounded-full bg-[#14D8D4] shadow-[0_0_0_5px_rgba(20,216,212,0.15)]" />
            </div>
            <p className="mt-3 min-h-12 text-sm font-medium leading-6 text-slate-600">{stat.label}</p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#001E5F]/10">
                <motion.div
                    className="h-full rounded-full bg-[#14D8D4]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.15, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                />
            </div>
        </motion.article>
    );
};

const Milestones = () => (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6">
            <motion.div
                className="mx-auto mb-11 max-w-2xl text-center"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#14A9B8]">Our impact</span>
                <h2 className="mt-3 text-3xl font-extrabold text-[#001E5F] sm:text-4xl">Milestones that matter</h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {STATS.map((stat, index) => <MilestoneCard key={stat.id} stat={stat} index={index} />)}
            </div>
        </div>
    </section>
);

export default Milestones;
