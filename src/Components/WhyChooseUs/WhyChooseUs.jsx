import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiHeadphones,
} from "react-icons/fi";

import Team from "../../assets/hero.jpg";

const features = [
  {
    icon: FiCode,
    title: "Full Stack Development",
    desc: "Modern web applications using React, Node.js and cloud technologies.",
  },
  {
    icon: FiLayers,
    title: "Clean Architecture",
    desc: "Scalable, maintainable and high-quality code for long-term growth.",
  },
  {
    icon: FiClock,
    title: "Fast Delivery",
    desc: "Agile development process with timely delivery and transparency.",
  },
  {
    icon: FiShield,
    title: "Secure Solutions",
    desc: "Security-first development to protect your business and users.",
  },
  {
    icon: FiTrendingUp,
    title: "Scalable Products",
    desc: "Software designed to grow with your business requirements.",
  },
  {
    icon: FiHeadphones,
    title: "Ongoing Support",
    desc: "Reliable maintenance and technical support after launch.",
  },
];

const Card = ({ item, delay }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#2F5FFF] hover:shadow-lg"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#EEF4FF] text-[#2F5FFF] transition group-hover:bg-[#2F5FFF] group-hover:text-white">
        <Icon size={20} />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#0B1B4D]">
          {item.title}
        </h3>

        <p className="mt-2 text-base leading-6 text-slate-600">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-[#2F5FFF]">
            Why Choose SoftOrigin
          </span>
        
          <h2 className="mt-3 ext-2xl font-bold leading-tight md:text-5xl lg:text-6xl text-[#0B1B4D] uppercase">
            Smart Solutions.
            <span className="text-[#2F5FFF]"> Real Business Impact.</span>
          </h2>

          <p className="mt-5 text-slate-600 text-xl">
            We combine technology, creativity and strategy to deliver secure,
            scalable and high-performance software solutions.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-[1fr_360px_1fr] gap-8 items-center">

          {/* Left Cards */}
          <div className="space-y-5">
            {features.slice(0, 3).map((item, index) => (
              <Card key={index} item={item} delay={index * 0.1} />
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={Team}
              alt="SoftOrigin Team"
              className="w-full max-w-[360px] h-[420px] rounded-xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-5">
            {features.slice(3).map((item, index) => (
              <Card key={index} item={item} delay={0.2 + index * 0.1} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;