import { motion } from 'framer-motion';
import Button from './Button';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, notionUrl, image, delay = 0 }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      {image && (
        <div className="project-card__image">
          <img src={image} alt={title} />
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
        <Button variant="secondary" href={notionUrl}>
          View Project
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
