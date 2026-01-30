import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './ProjectCard.css';

const ProjectCard = ({ slug, title, description, tags, notionUrl, image }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
    >
      {image && (
        <div className="project-card__image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <Button variant="secondary" onClick={() => navigate(`/project/${slug}`)}>
          View Details
        </Button>
        <Button variant="primary" href={notionUrl}>
          Notion Page
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
