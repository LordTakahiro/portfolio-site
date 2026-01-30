import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Portfolio"
            subtitle="A comprehensive collection of my game design, narrative, and technical projects."
          />

          <div className="portfolio__grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
