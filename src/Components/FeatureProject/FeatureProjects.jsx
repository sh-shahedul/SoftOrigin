import React from 'react';
import project1 from '../../assets/soft-origin-logo.png';

const projects = [
  {
    id: 1,
    category: 'WEB APP / E-COMMERCE',
    image: project1,
    title: 'E-Commerce Development Platform',
    description:
      'A full-featured online store with product management, secure checkout, and real-time order tracking.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '/projects/e-commerce-platform',
  },
  {
    id: 2,
    category: 'WEB APP / HEALTHCARE',
    image: project1,
    title: 'Hospital Management System',
    description:
      'A centralized system for patient records, appointment scheduling, billing, and staff management.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    link: '/projects/hospital-management',
  },
];

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    className="group relative block overflow-hidden rounded-2xl border border-slate-300 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-700/15 cursor-pointer"
  >
    {/* Project Image Container */}
    <div className="relative h-[220px] w-full overflow-hidden bg-slate-100/80">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full scale-100 transform object-contain transition-transform duration-700 ease-out group-hover:scale-110 p-4"
      />
    </div>

    {/* Content */}
    <div className="px-6 py-6 pb-8">
      <p className="mb-2 font-mono text-xs font-semibold tracking-wider text-blue-700">
        {project.category}
      </p>
      <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
        {project.title}
      </h3>
      <p className="mb-5 text-[15px] leading-relaxed text-slate-600">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs text-blue-900"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* 🎯 Bottom 6px Blue Line Animation (Left to Right) */}
    <div className="absolute bottom-0 left-0 h-[6px] w-0 bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full" />
  </a>
);

const FeatureProjects = () => {
  return (
    <section className="bg-blue-100/20 px-6 py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-sm font-semibold tracking-wider text-blue-700 uppercase mb-2">
            Featured Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Latest <span className="text-blue-700">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Explore some of our enterprise-grade software solutions designed for scalability, high performance, and seamless user experiences.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-mono text-sm text-slate-800 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:shadow-md hover:shadow-blue-700/10"
          >
            Show all projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;