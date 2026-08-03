import { FaArrowRight } from 'react-icons/fa';

const AboutCta = () => {
    return (
        <section
            className="relative isolate overflow-hidden bg-blue-100/20  px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
        >

            <div className="mx-auto max-w-5xl rounded-[1rem] border border-cyan-300/35 bg-[#001E5F] px-6 py-14 text-center shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-xl sm:px-12 sm:py-16">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Let&apos;s work together</p>
                <h2 className="mx-auto max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                    Have a Big Idea? <span className="bg-gradient-to-r from-cyan-300 to-[#14D8D4] bg-clip-text text-transparent">Let&apos;s Build It Together.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                    Whether you are starting from scratch or looking to scale an existing system, our expert engineering team is ready to help.
                </p>
                <a
                    href="mailto:shahedulhoque2003@gmail.com"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#14D8D4] px-7 py-3.5 text-sm font-bold text-[#001E5F] shadow-lg shadow-cyan-950/40 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                    Talk to Our Engineering Team <FaArrowRight aria-hidden="true" />
                </a>
            </div>
        </section>
    );
};

export default AboutCta;
