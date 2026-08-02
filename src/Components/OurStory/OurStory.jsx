import { motion } from 'framer-motion';
import teamImage from '../../assets/hero.jpg';

const OurStory = () => (
    <section className="bg-[#f8fafc] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <motion.div
                className="pt-2 lg:pt-3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
            >
                <span className="inline-flex rounded-full border border-[#14D8D4]/40 bg-[#14D8D4]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#001E5F]">
                    Our Origin Story
                </span>

                <h2 className="mt-6 max-w-[590px] text-4xl font-extrabold leading-[1.12] tracking-tight text-[#001E5F] sm:text-[2.55rem]">
                    From Passion Project to <span className="text-[#14A9B8]">Full-</span><br />
                    <span className="text-[#14A9B8]">Stack Powerhouse</span>
                </h2>

                <div className="mt-6 max-w-[590px] space-y-4 text-[15px] leading-6 text-slate-600">
                    <p>
                        Soft Origin was founded with a singular purpose: to bridge the gap between high-level business vision and robust, production-grade technical execution. In an era where digital presence defines commercial success, we recognized that companies needed more than just developers—they needed technical partners who understand scalable architecture and business objectives alike.
                    </p>
                    <p>
                        Starting as an agile team of dedicated full-stack engineers, Soft Origin has grown into a versatile software agency capable of tackling complex web, mobile, SaaS, and cloud challenges. We take pride in building scalable architectures, clean interfaces, and resilient backend systems that allow businesses to innovate rapidly and scale effortlessly.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="relative"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            >
                <div className="overflow-hidden rounded-2xl bg-[#001E5F]/5 shadow-sm">
                    <motion.img
                        src={teamImage}
                        alt="Soft Origin team at work"
                        className="h-[300px] w-full object-cover sm:h-[370px] lg:h-[433px]"
                        whileHover={{ scale: 1.025 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                </div>

                <motion.div
                    className="absolute -bottom-6 left-0 rounded-xl border border-[#14D8D4]/25 bg-white px-6 py-5 shadow-lg shadow-[#001E5F]/10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.45, ease: 'easeOut' }}
                >
                    <strong className="block text-2xl font-extrabold leading-none text-[#14A9B8]">50+</strong>
                    <span className="mt-1 block text-xs font-medium text-[#001E5F]">Projects Delivered</span>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default OurStory;
