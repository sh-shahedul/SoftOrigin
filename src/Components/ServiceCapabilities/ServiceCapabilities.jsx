import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const capabilities = [
    ['Frontend', 'React', 'Next.js', 'Tailwind CSS'],
    ['Mobile', 'React Native', 'iOS & Android', 'App stores'],
    ['Backend', 'Node.js', 'REST & GraphQL', 'Databases'],
    ['Cloud & quality', 'Cloud deployment', 'Automated testing', 'Performance'],
];

const ServiceCapabilities = () => (
    <section className="overflow-hidden bg-[#020b1d] py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-400">Built for what&apos;s next</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">The right technology, thoughtfully applied.</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">We choose tools based on the product you need today and the scale you&apos;re planning for tomorrow—without locking you into needless complexity.</p>
                <a href="#contact" className="mt-8 inline-flex rounded-full border border-cyan-300/50 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400 hover:text-[#001E5F]">Talk through your requirements</a>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map(([title, ...items], index) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.07]">
                    <h3 className="text-lg font-bold text-cyan-300">{title}</h3>
                    <ul className="mt-6 space-y-3">{items.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-slate-200"><FiCheckCircle className="shrink-0 text-cyan-400" />{item}</li>)}</ul>
                </motion.div>)}
            </div>
        </div>
    </section>
);

export default ServiceCapabilities;
