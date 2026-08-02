import { motion } from 'framer-motion';
import { FiCode, FiHeart, FiRefreshCw, FiUsers } from 'react-icons/fi';

const VALUES = [
    {
        icon: FiCode,
        title: 'Technical Excellence & Innovation',
        description: 'We never compromise on code quality. We write modular, well-tested, and maintainable software using modern technologies.',
    },
    {
        icon: FiUsers,
        title: 'Client-Centric Collaboration',
        description: 'We work as an extension of your team, with transparent communication, regular updates, and strategic guidance.',
    },
    {
        icon: FiRefreshCw,
        title: 'Agility & Continuous Growth',
        description: 'We adapt agile workflows to changing needs and continuously refine our skills, process, and delivery.',
    },
    {
        icon: FiHeart,
        title: 'Integrity & Transparency',
        description: 'Clear project roadmaps, upfront pricing, and honest timelines. No hidden complexity and no false promises.',
    },
];

const CoreValues = () => (
    <section className="bg-[#f8fafc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <motion.div
                className="mx-auto max-w-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <h2 className="text-3xl font-extrabold tracking-tight text-[#001E5F] sm:text-4xl">
                    Our Core <span className="text-[#14A9B8]">Values</span>
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    The principles that guide every line of code we write and every partnership we build.
                </p>
            </motion.div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {VALUES.map(({ icon: Icon, title, description }, index) => (
                    <motion.article
                        key={title}
                        className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-[#14D8D4]/50 hover:bg-[#14D8D4]/5 sm:p-7"
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                        whileHover={{ y: -7, boxShadow: '0 18px 36px rgba(0, 30, 95, 0.12)' }}
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#14D8D4]/15 text-[#001E5F] transition-colors duration-300 group-hover:bg-[#001E5F] group-hover:text-[#14D8D4]">
                            <Icon size={20} />
                        </span>
                        <h3 className="mt-5 text-base font-bold leading-6 text-[#001E5F]">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                        <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-[#14D8D4] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default CoreValues;
