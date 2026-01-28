import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <section className="section">
        <div className="container contact__container">
          <SectionHeader
            title="Contact"
            subtitle="Let's connect and discuss potential opportunities."
          />

          <div className="contact__content">
            <motion.div
              className="contact__info"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="contact__item">
                <div className="contact__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact__details">
                  <h3>Email</h3>
                  <a href="mailto:Devmike06@yahoo.com" className="contact__link">
                    Devmike06@yahoo.com
                  </a>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div className="contact__details">
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/michael-melendez-87007734"
                    className="contact__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/michael-melendez
                  </a>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact__details">
                  <h3>Location</h3>
                  <p>Bakersfield, CA</p>
                  <p className="contact__availability">Open to remote or relocation</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact__cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3 }}
            >
              <h3>Ready to Work Together?</h3>
              <p>
                I'm currently open to game design opportunities, freelance projects,
                and collaborative ventures. Whether you need a systems designer,
                narrative designer, or technical designer, I'd love to hear from you.
              </p>
              <Button href="mailto:Devmike06@yahoo.com" variant="primary">
                Send Me an Email
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
