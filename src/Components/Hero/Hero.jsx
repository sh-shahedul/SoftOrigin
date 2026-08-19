import  { useState, useEffect } from "react";
import heroimg from "../../assets/hero.jpg"; 
const ROTATING_PHRASES = [
  "Custom Software Development",
  "Web & Mobile Applications",
  "UI / UX Design",
  "Cloud & AI Solutions",
];

const useTypewriter = (
  phrases,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 1800
) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && text.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
};

const Hero = () => {
  const typedText = useTypewriter(ROTATING_PHRASES);

  return (
    <section
      className="relative h-[800px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:`url(${heroimg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02102f]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[6px] text-cyan-400 font-semibold mb-5">
          Welcome To
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          SoftOrigin
        </h1>

        <h2 className="mt-5 text-3xl md:text-5xl font-bold text-cyan-400 min-h-[70px]">
          {typedText}
          <span className="ml-1 animate-pulse">|</span>
        </h2>

        <p className="mt-6 max-w-4xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
          SoftOrigin helps businesses transform ideas into powerful digital
          solutions. We build secure, scalable, and high-performance software,
          websites, mobile applications, and cloud-based systems that drive
          innovation and business growth.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="#services"
            className="px-10 py-2.5 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 duration-300"
          >
            Explore Services
          </a>

          <a
            href="#contact"
            className="px-14 py-2.5 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#001E5F] duration-300"
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;
