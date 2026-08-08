import { motion } from 'framer-motion';
import { FiCompass, FiPenTool, FiCode, FiTrendingUp } from 'react-icons/fi';

const steps = [
    { icon: FiCompass, number: '01', title: 'Discover & define', text: 'We align on your goals, users, requirements, and the roadmap that creates the most value.' },
    { icon: FiPenTool, number: '02', title: 'Design the experience', text: 'Clear product flows and polished interfaces make every interaction feel simple and intentional.' },
    { icon: FiCode, number: '03', title: 'Build & launch', text: 'Our engineers deliver secure, scalable software through focused, transparent iterations.' },
    { icon: FiTrendingUp, number: '04', title: 'Improve & scale', text: 'After launch, we keep refining performance, features, and reliability as your business grows.' },
];

const ServiceProcess = () => (
    <section className="relative overflow-hidden bg-[#f4fbff] py-20 md:py-28">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">How we work</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#001E5F] sm:text-4xl md:text-5xl">A clear path from idea to impact.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">You get a collaborative team, regular visibility, and a practical process shaped around outcomes—not unnecessary complexity.</p>
            </motion.div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return <motion.article key={step.number} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.5, delay: index * 0.09 }} whileHover={{ y: -7 }} className="group relative rounded-3xl border border-cyan-100 bg-white p-7 shadow-[0_18px_45px_rgba(0,30,95,0.08)] transition-shadow hover:shadow-[0_24px_55px_rgba(0,30,95,0.16)]">
                        <span className="absolute right-6 top-6 text-sm font-extrabold text-[#001E5F]/15">{step.number}</span>
                        <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#001E5F] text-xl text-cyan-300 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"><Icon /></span>
                        <h3 className="mt-7 text-xl font-bold text-[#001E5F]">{step.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                    </motion.article>;
                })}
            </div>
        </div>
    </section>
);

export default ServiceProcess;
