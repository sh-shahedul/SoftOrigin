import { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const FEATURED_PROJECT_COUNT = 4;

const FeatureProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFeaturedProjects = async () => {
      try {
        const response = await fetch('/Project.json');

        if (!response.ok) {
          throw new Error('Failed to load projects');
        }

        const data = await response.json();
        setProjects(data.slice(0, FEATURED_PROJECT_COUNT));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProjects();
  }, []);

  return (
    <section className="bg-blue-100/20 px-6 py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-blue-700">
            Featured Portfolio
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Our Latest <span className="text-blue-700">Projects</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            Explore some of our enterprise-grade software solutions designed for scalability, high performance, and seamless user experiences.
          </p>
        </div>

        {loading && <p className="text-center text-sm text-slate-500">Loading projects...</p>}

        {error && <p className="text-center text-sm text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <a
            href="/project"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-mono text-sm text-slate-800 transition-all duration-300 hover:border-blue-700 hover:text-blue-700 hover:shadow-md hover:shadow-blue-700/10"
          >
            Show all projects
            <svg width="16" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
