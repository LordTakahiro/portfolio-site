import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, variant = 'primary', href, onClick, ...props }) => {
  const buttonClass = `btn btn-${variant}`;

  const buttonContent = (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default Button;
