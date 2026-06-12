import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const roadmapSteps = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    label: 'Student',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: 'Web Development',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    label: 'Building Projects',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4Z" />
      </svg>
    ),
    label: 'AI Tools & Automation',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    label: 'Better Products',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    label: 'Continuous Growth',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const stepVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const About = () => {
  const { title, description, timeline } = portfolioData.about;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: title + description + timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">{title}</h2>
            <p className="text-xl text-zinc-400 leading-relaxed mb-12">{description}</p>

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                    {i !== timeline.length - 1 && (
                      <div className="w-[1px] h-16 bg-zinc-800" />
                    )}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-blue-500 mb-1 block">{item.year}</span>
                    <h3 className="text-xl font-semibold text-white">{item.event}</h3>
                    {item.detail && (
                      <p className="text-sm text-zinc-500 mt-1 leading-relaxed">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Learning Roadmap ── */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="about-roadmap-card"
            >
              {/* Ambient glow */}
              <div className="about-roadmap-glow" />

              {/* Header */}
              <div className="about-roadmap-header">
                <span className="about-roadmap-badge">
                  <span className="about-roadmap-badge-dot" />
                  Learning Path
                </span>
                <p className="about-roadmap-subtitle">My development journey</p>
              </div>

              {/* Steps */}
              <motion.div
                className="about-roadmap-steps"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {roadmapSteps.map((step, i) => (
                  <motion.div key={i} variants={stepVariants} className="about-roadmap-step-wrapper">
                    <div className="about-roadmap-step">
                      <div className="about-roadmap-step-icon">{step.icon}</div>
                      <span className="about-roadmap-step-label">{step.label}</span>
                    </div>
                    {i !== roadmapSteps.length - 1 && (
                      <div className="about-roadmap-connector">
                        <div className="about-roadmap-connector-line" />
                        <svg className="about-roadmap-connector-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 1 L5 9 M2 6 L5 9 L8 6" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote */}
              <div className="about-roadmap-quote">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="about-roadmap-quote-icon">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.813 1.42-1.664 2.66-2.55L9.536 6c-1.87 1.094-3.255 2.298-4.153 3.61C4.48 10.926 4.03 12.37 4.03 13.94c0 1.496.42 2.67 1.258 3.517.84.847 1.94 1.27 3.304 1.27 1.26 0 2.27-.398 3.03-1.194.755-.795 1.13-1.79 1.13-2.986l-.56.21zm9 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.825-.56-.13-1.07-.14-1.54-.03-.16-.94.1-1.94.78-2.99.53-.813 1.42-1.664 2.66-2.55L18.536 6c-1.87 1.094-3.255 2.298-4.153 3.61-.9 1.316-1.353 2.76-1.353 4.33 0 1.496.42 2.67 1.258 3.517.84.847 1.94 1.27 3.304 1.27 1.26 0 2.27-.398 3.03-1.194.755-.795 1.13-1.79 1.13-2.986l-.56.21z"/>
                </svg>
                <p className="about-roadmap-quote-text">Learning by building, one project at a time.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;