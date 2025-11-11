import BentoCard from '@/components/features/BentoCard';
import type { Social, Project, Studies } from '@/types';
import socialsData from '@/data/socials.json';
import projectsData from '@/data/projects.json';
import studiesData from '@/data/studies.json';

function Home() {
  const socials: Social[] = socialsData;
  const projects: Project[] = projectsData;
  const studies: Studies[] = studiesData;
  return (
    <div className="flex flex-col text-white">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">My Bento</h1>
        <p className="text-xl text-neutral-400">
          Welcome to my interactive portfolio
        </p>
      </div>

      {/* Socials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Socials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <BentoCard
              key={index}
              title={social.name}
              description={social.description}
              url={social.url}
              icon={social.icon}
              tags={[]}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <BentoCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              url={project.url}
            />
          ))}
        </div>
      </section>

      {/* Studies Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <BentoCard
              key={index}
              title={study.title}
              description={study.description}
              tags={study.tags}
              url={study.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
