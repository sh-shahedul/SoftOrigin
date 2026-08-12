import { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';


const AllProject = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Project.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to load projects');
                return res.json();
            })
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <section className="bg-white px-6 py-20">
            <div className="mx-auto max-w-[1440px]">
                {loading && (
                    <p className="text-center text-sm text-gray-400">
                        Loading projects...
                    </p>
                )}

                {error && (
                    <p className="text-center text-sm text-red-500">{error}</p>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllProject;
