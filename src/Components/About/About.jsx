import { motion } from "framer-motion";
import { FiLayers, FiRefreshCw, FiShield } from "react-icons/fi";
import About from "../../assets/hero.jpg";

const FEATURES = [
  {
    icon: FiLayers,
    text: "Full-Stack Expertise (React, Node.js, Next.js & Cloud)",
  },
  {
    icon: FiRefreshCw,
    text: "Agile Delivery Built Around Your Timeline",
  },
  {
    icon: FiShield,
    text: "Clean Architecture & Enterprise-Grade Security",
  },
];

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 lg:pt-24 lg:pb-24">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src={About}
              alt="SoftOrigin team at work"
              className="w-full aspect-[3/3] object-cover"
            />
          </div>

          <motion.div
            className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-xl shadow-slate-900/10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#14D8D4] animate-pulse" />
            <span className="text-sm font-medium text-[#0B1B4D]">
              Trusted by growing businesses
            </span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <div>
          <motion.div
            className="inline-flex animate-bounce items-center gap-2 rounded-md border border-[#2F5FFF]/30 bg-[#2F5FFF]/5 px-3 py-1.5 font-mono text-xs tracking-wide text-[#2F5FFF] mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span>&gt;</span>
            ABOUT SOFTORIGIN
          </motion.div>

          <motion.h2
            className="font-bold uppercase text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[#0B1B4D] mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engineering Digital Products{" "}
            <span className="text-[#2F5FFF]">That Scale With You</span>
          </motion.h2>

          <motion.p
            className="text-slate-600 leading-relaxed mb-10 text-xl sm:text-lg "
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SoftOrigin is a full-stack software team that turns ambitious ideas
            into dependable products. We handle everything end to end—from
            pixel-perfect interfaces to resilient backend systems and cloud
            infrastructure—so you get one accountable partner instead of a
            patchwork of vendors. Whether you're validating an MVP or scaling an
            enterprise platform, we build for where you're headed next.
          </motion.p>

          <div className="space-y-4">
            {FEATURES.map(({ icon: Icon, text }, index) => (
              <motion.div
                key={text}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition-colors duration-200 hover:border-[#2F5FFF]/50 hover:bg-[#2F5FFF]/5"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.12,
                }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2F5FFF]/10 text-[#2F5FFF]">
                  <Icon size={18} />
                </span>

                <span className="text-sm sm:text-[15px] font-medium text-slate-700">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;