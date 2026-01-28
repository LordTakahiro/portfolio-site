import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <section className="section">
        <div className="container resume__container">
          <SectionHeader
            title="Resume"
            subtitle="My professional experience in game design and software engineering."
          />

          <motion.div
            className="resume__download"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button href="#" variant="primary">
              Download PDF
            </Button>
          </motion.div>

          <div className="resume__content">
            {/* Summary - renders immediately */}
            <motion.section
              className="resume__section"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="resume__section-title">Summary</h3>
              <p className="resume__text">
                Designer with a BS in Game & Simulation Programming and 10+ years of professional
                software engineering experience. Combines strong systems thinking, narrative design,
                and technical prototyping with real-world development skills in C++, C#, Unity, and
                full-stack engineering. Experienced in building GDDs/TDDs, designing modular mechanics,
                creating custom engines, and delivering polished, production-ready systems.
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section
              className="resume__section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="resume__section-title">Skills</h3>
              <div className="resume__skills">
                <div className="resume__skill-category">
                  <h4>Design</h4>
                  <p>Systems Design, Narrative Design, Level Design, Game Balancing, GDD/TDD Writing</p>
                </div>
                <div className="resume__skill-category">
                  <h4>Technical</h4>
                  <p>Unity, C#, C++, JavaScript, Python, Git, Agile/Scrum</p>
                </div>
                <div className="resume__skill-category">
                  <h4>Creative</h4>
                  <p>Worldbuilding, Character Development, Interactive Storytelling, Quest Design</p>
                </div>
              </div>
            </motion.section>

            {/* Game Design Experience */}
            <motion.section
              className="resume__section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="resume__section-title">Game Design Experience</h3>
              <div className="resume__experience">
                <div className="resume__job">
                  <div className="resume__job-header">
                    <h4 className="resume__job-title">Independent Game Designer</h4>
                    <span className="resume__job-date">2012 - Present</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    Systems Design | Narrative Design | Technical Prototyping
                  </p>
                  <ul className="resume__job-list">
                    <li><strong>Champions of Rymora — Trading Card Game:</strong> Designed full TCG rules engine and combat flow, built 300+ card database with faction identities, mechanics, and balance passes, authored complete GDD including rarity structure, resource economy, and keyword system</li>
                    <li><strong>Unity Turn-Based Battle System:</strong> Developed modular combat framework in Unity (C#), designed abilities, status effects, AI behaviors, and data-driven architecture, structured system for potential Asset Store release with documentation and examples</li>
                    <li><strong>Fangs of the Frost Wyrm — D&D 5e One-Shot:</strong> Wrote full adventure, companion guide, and bestiary, designed environmental hazards, lair mechanics, and boss encounter, created pre-gen characters and player-facing materials</li>
                    <li><strong>Fangs of the Frost Wyrm — Solo Branching-Path Adventure:</strong> Adapted Act III into a CYOA structure, built reputation tracks, branching outcomes, and state-based logic, designed dragon diplomacy system and emotional-state gates</li>
                    <li><strong>Fal'shari — Warcraft Lore Bible:</strong> Created faction doctrine, manaforge network, and siphonomancy system, wrote character arcs for Seraphine Dawnseeker & Aldrich Sinclaire, integrated story into Warcraft timeline and cosmology</li>
                    <li><strong>Crestfall — Horror Novel:</strong> Wrote character-driven supernatural horror narrative, developed setting, tone, and escalating supernatural rules, built ensemble cast with grounded 90s realism</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Software Engineering Experience */}
            <motion.section
              className="resume__section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="resume__section-title">Software Engineering Experience</h3>
              <div className="resume__experience">
                <div className="resume__job">
                  <div className="resume__job-header">
                    <h4 className="resume__job-title">Self-Employed — Full-Stack Developer</h4>
                    <span className="resume__job-date">Mar 2025 - Present</span>
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    React • TypeScript • Node.js • Python • Docker • Supabase
                  </p>
                  <ul className="resume__job-list">
                    <li>Architected and deployed full real-estate investment platform with automated data ingestion</li>
                    <li>Built full-stack job board for wildland firefighters with authentication, payments, and admin tools</li>
                    <li>Implemented real-time notifications, dashboards, and automated email systems</li>
                  </ul>
                </div>

                <div className="resume__job">
                  <div className="resume__job-header">
                    <h4 className="resume__job-title">Voltex — Full Stack / Python Developer</h4>
                    <span className="resume__job-date">Mar 2024 - Mar 2025</span>
                  </div>
                  <ul className="resume__job-list">
                    <li>Built multi-platform notification system monitoring Twitch, Kick, Rumble, Instagram</li>
                    <li>Developed real-time translation bot across 20+ languages</li>
                    <li>Delivered responsive web apps and Salesforce solutions</li>
                  </ul>
                </div>

                <div className="resume__job">
                  <div className="resume__job-header">
                    <h4 className="resume__job-title">Grapevine MSP — Level II Technician</h4>
                    <span className="resume__job-date">Feb 2017 - Oct 2023</span>
                  </div>
                  <ul className="resume__job-list">
                    <li>Managed enterprise infrastructure for 300+ clients</li>
                    <li>Programmed custom digital signage (HTML/JS/CSS)</li>
                    <li>Provided 24/7 on-call support, VPN/VLAN management, firewall configuration</li>
                  </ul>
                </div>

                <div className="resume__job">
                  <div className="resume__job-header">
                    <h4 className="resume__job-title">5th Planet Games — Full Stack Developer</h4>
                    <span className="resume__job-date">Dec 2012 - Aug 2014</span>
                  </div>
                  <ul className="resume__job-list">
                    <li>Maintained browser-based games (Legacy of a Thousand Suns, Dawn of the Dragons)</li>
                    <li>Delivered weekly feature releases in Agile environment</li>
                    <li>Collaborated with designers on progression curves and feature implementation</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              className="resume__section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="resume__section-title">Education</h3>
              <div className="resume__education">
                <h4>Bachelor of Science — Game & Simulation Programming</h4>
                <p className="resume__text">DeVry University — Long Beach, CA | 2012</p>
                <ul className="resume__job-list" style={{ marginTop: '0.5rem' }}>
                  <li>Built custom C++ game engine as part of capstone</li>
                  <li>Authored multiple GDDs and TDDs for team projects</li>
                  <li>Coursework included AI, physics simulation, engine architecture, and gameplay systems</li>
                </ul>
              </div>
            </motion.section>

            {/* Tools */}
            <motion.section
              className="resume__section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="resume__section-title">Tools & Technologies</h3>
              <div className="resume__tools">
                <span className="resume__tool">Unity</span>
                <span className="resume__tool">Unreal Engine</span>
                <span className="resume__tool">Visual Studio</span>
                <span className="resume__tool">Git/GitHub</span>
                <span className="resume__tool">Notion</span>
                <span className="resume__tool">Figma</span>
                <span className="resume__tool">Jira</span>
                <span className="resume__tool">Photoshop</span>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
