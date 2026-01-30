import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { projectContent } from '../data/projectContent';
import Button from '../components/Button';
import ImageCarousel from '../components/ImageCarousel';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);
  const content = projectContent[slug];

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

  const renderContent = (item) => {
    if (typeof item === 'string') {
      // Check if the line starts with ** (bold markdown)
      if (item.startsWith('**') && item.includes('**')) {
        const parts = item.split('**');
        return (
          <p key={item}>
            {parts.map((part, i) => (
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            ))}
          </p>
        );
      }
      return <p key={item}>{item}</p>;
    }
    return null;
  };

  return (
    <div className="project-detail">
      <section className="section">
        <div className="container">
          <motion.div
            className="project-detail__header"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => navigate('/portfolio')}
              className="project-detail__back-button"
            >
              ← Back to Portfolio
            </button>

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
              </div>
            </div>
          </motion.div>

          {content && (
            <motion.div
              className="project-detail__content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-detail__section">
                <h2>Overview</h2>
                <p>{content.overview}</p>
              </div>

              {content.links && content.links.length > 0 && (
                <motion.div
                  className="project-detail__section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>Resources</h2>
                  <div className="project-detail__links">
                    {content.links.map((link, index) => (
                      <Button
                        key={index}
                        variant="primary"
                        href={link.url}
                      >
                        {link.title}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              {content.carouselImages && content.carouselImages.length > 0 && (
                <motion.div
                  className="project-detail__section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>Gallery</h2>
                  <ImageCarousel
                    images={content.carouselImages}
                    height={slug === 'champions-of-rymora' ? 700 : 600}
                  />
                </motion.div>
              )}

              {content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="project-detail__section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>{section.title}</h2>

                  {section.content && (
                    <div className="project-detail__section-content">
                      {section.content.map((item, i) => renderContent(item))}
                    </div>
                  )}

                  {section.items && (
                    <div className="project-detail__items">
                      {section.items.map((item, i) => (
                        typeof item === 'string' ? (
                          <div key={i} className="project-detail__list-item">
                            {renderContent(item)}
                          </div>
                        ) : (
                          <div key={i} className="project-detail__item">
                            {item.subtitle && <h3>{item.subtitle}</h3>}
                            <p>{item.text}</p>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <div className="project-detail__cta">
                <p>This project is also available with additional formatting and media on Notion.</p>
                <Button variant="primary" href={project.notionUrl}>
                  View on Notion
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
