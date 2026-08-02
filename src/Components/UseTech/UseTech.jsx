
import {
    SiCplusplus,
    SiGo,
    SiJavascript,
    SiTypescript,
    SiPhp,
    SiPython,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiLaravel,
    SiNodedotjs,
    SiVuedotjs,
    SiDocker,
    SiMongodb,
    SiGit,
    SiGithub,
    SiVercel,
} from 'react-icons/si';

// row 1: right -> left
const row1 = [
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Go', icon: SiGo, color: '#00ACD7' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
];

// row 2: left -> right
const row2 = [
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'Vue.js', icon: SiVuedotjs, color: '#41B883' },
];

// row 3: right -> left
const row3 = [
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
];

const TechCard = ({ name, icon: Icon, color }) => (
    <div className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-gray-200 bg-white px-8 py-7 shadow-sm">
        <Icon size={36} color={color} />
        <span className="text-[20px] font-semibold text-gray-900">{name}</span>
    </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = 38 }) => {
    // seamless loop er jonno list ta 3 bar duplicate kora hoyeche
    const tripled = [...items, ...items, ...items];

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{
                WebkitMaskImage:
                    'linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)',
                maskImage:
                    'linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)',
            }}
        >
            <div
                className="flex w-max gap-4 py-1 hover:[animation-play-state:paused]"
                style={{
                    animation: `${
                        direction === 'left' ? 'scroll-left' : 'scroll-right'
                    } ${speed}s linear infinite`,
                }}
            >
                {tripled.map((tech, i) => (
                    <TechCard key={`${tech.name}-${i}`} {...tech} />
                ))}
            </div>
        </div>
    );
};

const UseTech = () => {
    return (
        <section className="overflow-hidden px-6 py-18 text-center " >
            {/* keyframes inline rakha hoyeche, tailwind.config.js edit korte hobe na */}
            <style>{`
                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-33.3333%); }
                }
                @keyframes scroll-right {
                    from { transform: translateX(-33.3333%); }
                    to   { transform: translateX(0); }
                }
            `}</style>

            <h2 className="mb-4 text-2xl font-bold leading-tight md:text-5xl lg:text-6xl uppercase">
                <span className="text-blue-700">Technologies</span>{' '}
                <span className="text-gray-900">We Use</span>
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-[15px] md:text-xl leading-relaxed text-gray-500">
                We leverage the latest enterprise-grade technologies to build scalable
                and high-performance software solutions.
            </p>

            <div className="mx-auto flex max-w-[1440px] flex-col gap-5">
                <MarqueeRow items={row1} direction="left" speed={36} />
                <MarqueeRow items={row2} direction="right" speed={36} />
                <MarqueeRow items={row3} direction="left" speed={36} />
            </div>
        </section>
    );
};

export default UseTech;