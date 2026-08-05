import HeroProject from '../../Components/HeroProject/HeroProject';
import AllProjects from '../../Components/AllProjects/AllProjects';

const Project = () => {
    return (
        <div>
          <HeroProject></HeroProject>
          <div className="mx-auto max-w-3xl px-6  pt-20 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl uppercase">
            Our <span className="text-blue-700">Projects</span>
        </h1>
        <p className="mt-4 text-[17px]  text-gray-600">
            A showcase of the web apps, mobile apps, and SaaS platforms we've
            engineered for our clients, built with clean architecture, modern
            technology, and a focus on real business results.
        </p>
    </div>
          <AllProjects></AllProjects>
        </div>
    );
};

export default Project;