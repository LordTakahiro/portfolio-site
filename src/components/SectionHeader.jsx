import { motion } from 'framer-motion';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div
      className={`section-header section-header--${align}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeader;
