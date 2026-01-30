import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel">
      <div className="carousel__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel__slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`}
              className="carousel__image"
            />
            {images[currentIndex].caption && (
              <p className="carousel__caption">{images[currentIndex].caption}</p>
            )}
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="carousel__button carousel__button--prev"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="carousel__button carousel__button--next"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="carousel__indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel__indicator ${
                    index === currentIndex ? 'carousel__indicator--active' : ''
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="carousel__counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
