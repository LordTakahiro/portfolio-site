import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Button from '../components/Button';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Project not found</h1>
          <Button onClick={() => navigate('/portfolio')}>Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <section className="section">
        <div className="container">
          <motion.div
            className="project-detail__header"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              variant="secondary"
              onClick={() => navigate('/portfolio')}
              className="project-detail__back"
            >
              ← Back to Portfolio
            </Button>

            <div className="project-detail__hero">
              <div className="project-detail__hero-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-detail__hero-content">
                <h1 className="project-detail__title">{project.title}</h1>
                <p className="project-detail__subtitle">{project.subtitle}</p>

                <div className="project-detail__meta">
                  <div className="project-detail__meta-item">
                    <strong>Role:</strong> {project.role}
                  </div>
                  <div className="project-detail__meta-item">
                    <strong>Team:</strong> {project.team}
                  </div>
                  <div className="project-detail__meta-item">
                    <strong>Status:</strong> {project.status}
                  </div>
                </div>

                <div className="project-detail__tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-detail__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-detail__actions">
                  <Button variant="primary" href={project.notionUrl}>
                    View on Notion
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="project-detail__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.3 }}
          >
            <h2>Overview</h2>
            <p>{project.description}</p>

            <div className="project-detail__cta">
              <p>For full project details, documentation, and in-depth analysis, visit the Notion page.</p>
              <Button variant="primary" href={project.notionUrl}>
                View Complete Project on Notion
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
