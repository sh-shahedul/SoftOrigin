import heroImage from '../../assets/hero.jpg';

const HeroProject = () => (
    <section
        className="relative isolate flex min-h-[420px] md:min-h-[620px] lg:min-h-[720px] items-center overflow-hidden bg-[#001E5F] pt-28"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <div className="absolute inset-0 -z-10 bg-[#001E5F]/90" />
        <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-6 py-20 text-center lg:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Our Projects
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
                Projects That Showcase Our Engineering Excellence
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-slate-200 sm:text-lg">
                From scalable SaaS platforms to mission-critical mobile applications, explore how Soft Origin turns complex business challenges into clean, high-performing software solutions.
            </p>

        </div>
    </section>
);

export default HeroProject;