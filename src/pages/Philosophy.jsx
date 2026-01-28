import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import './Philosophy.css';

const Philosophy = () => {
  return (
    <div className="philosophy">
      <section className="section">
        <div className="container philosophy__container">
          <SectionHeader
            title="Design Philosophy"
            subtitle="The principles and values that guide my approach to game design."
          />

          <div className="philosophy__content">
            {/* My Approach */}
            <motion.section
              className="philosophy__section"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="philosophy__section-title">My Approach to Game Design</h3>
              <div className="philosophy__text">
                <p>
                  I design systems and stories that feel <strong>intentional</strong>, <strong>cohesive</strong>,
                  and <strong>player-driven</strong>. Whether I'm building a combat engine, a branching narrative,
                  or a TCG mechanic, my goal is always the same:
                </p>
                <p>
                  <strong>Create experiences where every choice feels meaningful and every system supports the fantasy.</strong>
                </p>
              </div>
            </motion.section>

            {/* Core Principles */}
            <motion.section
              className="philosophy__section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="philosophy__section-title">Core Principles</h3>
              <div className="philosophy__principles">
                <div className="philosophy__principle">
                  <h4>1. Systems Should Teach Themselves</h4>
                  <p>
                    Good mechanics don't need long explanations. They reveal their depth through play, not text.
                    I design systems that are intuitive on first contact, deepen over time, reward mastery, and
                    avoid unnecessary complexity.
                  </p>
                </div>
                <div className="philosophy__principle">
                  <h4>2. Narrative and Mechanics Must Serve Each Other</h4>
                  <p>
                    Story isn't cutscenes, it's the emotional meaning behind player actions. I build worlds that
                    justify mechanics, mechanics that reinforce themes, and characters whose arcs reflect the
                    systems around them.
                  </p>
                </div>
                <div className="philosophy__principle">
                  <h4>3. Modularity Enables Creativity</h4>
                  <p>
                    I design systems in clean, modular pieces so they can be reused, expanded, iterated, balanced,
                    and commercialized. This applies to TCG engines, Unity combat systems, and branching narrative
                    structures.
                  </p>
                </div>
                <div className="philosophy__principle">
                  <h4>4. Player Agency Is Sacred</h4>
                  <p>
                    Whether in a TCG turn, a boss fight, or a CYOA choice, players should feel responsible for
                    outcomes, empowered to experiment, and rewarded for understanding the system.
                  </p>
                </div>
                <div className="philosophy__principle">
                  <h4>5. Clarity Beats Cleverness</h4>
                  <p>
                    I prioritize readable mechanics, clean documentation, intuitive UI/UX, and clear player feedback.
                    If a mechanic is clever but confusing, it's not ready.
                  </p>
                </div>
                <div className="philosophy__principle">
                  <h4>6. Iteration Is the Real Design</h4>
                  <p>
                    My best work comes from rapid prototyping, structured playtesting, honest feedback, and
                    willingness to cut or refine. Design is discovery, not perfection on the first draft.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* What I Value */}
            <motion.section
              className="philosophy__section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="philosophy__section-title">What I Value</h3>
              <div className="philosophy__text">
                <ul className="philosophy__list">
                  <li><strong>Creative autonomy</strong></li>
                  <li><strong>Collaborative development</strong></li>
                  <li><strong>Systems that feel alive</strong></li>
                  <li><strong>Worlds that feel inhabited</strong></li>
                  <li><strong>Mechanics that feel inevitable</strong></li>
                  <li><strong>Stories that feel earned</strong></li>
                </ul>
              </div>
            </motion.section>

            {/* Why I Design */}
            <motion.section
              className="philosophy__section philosophy__section--last"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="philosophy__section-title">Why I Design</h3>
              <div className="philosophy__text">
                <p>
                  Because I love the moment when a system clicks, a story lands, or a player realizes
                  they had more agency than they thought.
                </p>
                <p>
                  Because I love building worlds and rulesets that feel like they could exist without me.
                </p>
                <p>
                  Because I love the craft.
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
