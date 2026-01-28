import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects, skills } from '../data/projects';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero__name">Michael A. Melendez</h1>
            <p className="hero__roles">
              Game Designer • Systems Designer • Technical Designer
            </p>
            <p className="hero__intro">
              I build systems, stories, and prototypes that feel intentional, cohesive,
              and player-driven. With a BS in Game & Simulation Programming and 10+ years
              of engineering experience, I combine strong technical foundations with deep
              design instincts.
            </p>
            <Button onClick={() => navigate('/portfolio')}>
              View My Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-projects relative">
        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60 z-0"></div>

        <div className="container relative z-10">
          <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <SectionHeader
              title="Featured Projects"
              subtitle="A selection of my best work in game design, systems design, and narrative development."
            />
          </div>
          <div className="featured-projects__grid">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section skills">
        <div className="container">
          <SectionHeader
            title="Core Skills"
            subtitle="The tools and disciplines I use to bring ideas to life."
          />
          <motion.div
            className="skills__grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skills__item"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
