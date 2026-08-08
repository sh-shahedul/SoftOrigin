import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiHelpCircle, FiMessageSquare } from 'react-icons/fi';

const questions = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'We partner on web platforms, mobile apps, SaaS products, internal business tools, APIs, and product design engagements.',
    category: 'Scope & Work',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Yes. We can operate as an extension of your team, collaborate with in-house developers, or take ownership of a defined product area.',
    category: 'Collaboration',
  },
  {
    question: 'How do you keep a project on track?',
    answer:
      'We work in focused milestones with regular demos, clear priorities, and direct communication so you always know what is moving forward.',
    category: 'Process',
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Absolutely. We can continue with maintenance, monitoring, improvements, and new features as your product evolves.',
    category: 'Post-Launch',
  },
];

const ServiceFaq = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-slate-100 lg:py-32">
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading & Support Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
                <FiHelpCircle className="h-4 w-4" />
                Frequently Asked Questions
              </div>

              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:leading-[1.15]">
                Answers before <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  we get started.
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
                Everything you need to know about our workflow, collaboration model, and post-launch commitments.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-500/30">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                  <FiMessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Have a custom question?</h4>
                  <p className="text-sm text-slate-400">We are always open to discuss your unique needs.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-7"
          >
            {questions.map(({ question, answer, category }, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={question}
                  className={`group rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-cyan-500/40 bg-slate-900/80 shadow-xl shadow-cyan-950/20'
                      : 'border-slate-800/80 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">
                        {category}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-100 sm:text-xl group-hover:text-cyan-300">
                        {question}
                      </h3>
                    </div>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 rotate-180'
                          : 'border-slate-700 bg-slate-800/50 text-slate-400 group-hover:border-slate-600 group-hover:text-slate-200'
                      }`}
                    >
                      <FiChevronDown className="h-5 w-5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-800/60 px-6 pb-6 pt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                          {answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;