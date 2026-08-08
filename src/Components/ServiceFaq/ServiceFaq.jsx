import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMinus, FiPlus } from 'react-icons/fi';

const questions = [
    ['What types of projects do you take on?', 'We partner on web platforms, mobile apps, SaaS products, internal business tools, APIs, and product design engagements.'],
    ['Can you work with our existing team?', 'Yes. We can operate as an extension of your team, collaborate with in-house developers, or take ownership of a defined product area.'],
    ['How do you keep a project on track?', 'We work in focused milestones with regular demos, clear priorities, and direct communication so you always know what is moving forward.'],
    ['Do you offer support after launch?', 'Absolutely. We can continue with maintenance, monitoring, improvements, and new features as your product evolves.'],
];

const ServiceFaq = () => {
    const [open, setOpen] = useState(0);
    return <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">Frequently asked questions</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#001E5F] sm:text-4xl">Answers before we start.</h2>
                <p className="mt-5 max-w-md leading-7 text-slate-600">A few of the things teams usually want to know before bringing us into their next digital project.</p>
            </motion.div>
            <div className="divide-y divide-[#001E5F]/10 rounded-3xl border border-[#001E5F]/10 bg-[#f8fcff] px-6 md:px-8">
                {questions.map(([question, answer], index) => {
                    const isOpen = open === index;
                    return <div key={question} className="py-2"><button type="button" onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-bold text-[#001E5F] md:text-lg" aria-expanded={isOpen}>{question}<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">{isOpen ? <FiMinus /> : <FiPlus />}</span></button><AnimatePresence initial={false}>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden"><p className="pb-5 pr-10 text-sm leading-6 text-slate-600">{answer}</p></motion.div>}</AnimatePresence></div>;
                })}
            </div>
        </div>
    </section>;
};

export default ServiceFaq;
