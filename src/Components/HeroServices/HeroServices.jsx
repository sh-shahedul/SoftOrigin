import { FiArrowDown, FiCheckCircle } from 'react-icons/fi';
import heroImage from '../../assets/hero.jpg';

const HeroServices = () => (
    <section
        className="relative isolate flex min-h-[530px] items-center overflow-hidden bg-[#001E5F] pt-28 sm:min-h-[600px]"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute inset-0 -z-10 bg-[#001E5F]/90" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#001E5F]/95 via-[#001E5F]/85 to-[#001E5F]/50" />
        <div className="absolute -right-20 top-24 -z-10 h-72 w-72 rounded-full bg-[#14D8D4]/20 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
            <div className="max-w-3xl">
                <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    <span className="h-px w-10 bg-cyan-300" /> Our services
                </p>
                <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                    Digital solutions built to move your business forward.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                    From product strategy and UX to robust software engineering, SoftOrigin helps ambitious teams launch, scale, and improve the digital products their customers rely on.
                </p>

                <ul className="mt-8 grid gap-3 text-sm text-cyan-50 sm:grid-cols-2">
                    {['Custom software for real business needs', 'Scalable, secure, and user-focused delivery'].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                            <FiCheckCircle className="shrink-0 text-[#14D8D4]" /> {item}
                        </li>
                    ))}
                </ul>

                <a
                    href="#services"
                    className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#14D8D4] px-6 py-3.5 text-sm font-bold text-[#001E5F] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30"
                >
                    Explore our services <FiArrowDown />
                </a>
            </div>
        </div>
    </section>
);

export default HeroServices;
