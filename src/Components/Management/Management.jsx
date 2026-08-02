import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import remal from "../../assets/soft-logo.png"
const team = [
    {
        name: ' Sha Mozzem Remal',
        role: 'Chief Executive Officer (CEO)',
        description:
            'Leading Soft Origin with a clear vision, driving strategic direction and sustainable growth across all divisions.',
        image: remal,
        facebook: '#',
        linkedin: '#',
    },
    {
        name: 'Shahedul Hoque',
        role: 'Chief Operating & Financial Officer (COO)',
        description:
            'Overseeing day-to-day operations and building efficient workflows that keep every project running smoothly.',
        image: remal,
        facebook: '#',
        linkedin: '#',
    },
    {
        name: 'Ashadul Islam',
        role: 'Chief Technology & Growth Officer',
        description:
            'Coordinating teams and timelines to ensure every project is delivered on time and to the highest standard.',
        image: remal,
        facebook: '#',
        linkedin: '#',
    },
];

const TeamCard = ({ member }) => (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* dark overlay fades in on hover */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

            {/* social icons, centered, rise up and fade in on hover */}
            <div className="absolute inset-0 flex items-center justify-center gap-3">
                <a
                    href={member.facebook}
                    aria-label={`${member.name} on Facebook`}
                    className="flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-blue-600 opacity-0 shadow-lg transition-all duration-300 ease-out hover:bg-blue-600 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <FaFacebookF size={15} />
                </a>
                <a
                    href={member.linkedin}
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex h-10 w-10 translate-y-4 items-center justify-center rounded-full bg-white text-blue-700 opacity-0 shadow-lg transition-all delay-100 duration-300 ease-out hover:bg-purple-600 hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                >
                    <FaLinkedinIn size={15} />
                </a>
            </div>
        </div>

        <div className="px-5 py-5">
            <h3 className="text-xl uppercase font-bold text-gray-900">{member.name}</h3>
            <p className="mb-2 text-md font-semibold text-blue-700">
                {member.role}
            </p>
            <p className="text-base leading-relaxed text-gray-500">
                {member.description}
            </p>
        </div>

        {/* bottom bar slides in from right to left on hover */}
        <span className="absolute bottom-0 left-0 h-2 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />
    </div>
);

const Management = () => {
    return (
        <section className="bg-white px-6 py-20 text-center">
            <div className="mx-auto max-w-[1440px]">
                <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
                    <span className="text-gray-900">Meet Our</span>{' '}
                    <span className="text-blue-700">Management</span>
                </h2>
                <p className="mx-auto mb-14 max-w-2xl text-[15px] leading-relaxed text-gray-500">
                    The visionary minds guiding Soft Origin towards digital excellence,
                    combining industry experience with technical innovation.
                </p>

                <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Management;