import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, FileText, Mail, MapPin, GraduationCap } from 'lucide-react';
import heroImg from '../assets/hero.png';

const GithubIcon = ({ size = 14, ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} style={{ display: 'block' }} {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const roles = ['Full Stack Developer', 'AI Product Developer', 'Web App Builder', 'SaaS Creator'];

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="hero-typewriter">
      {displayed}<span className="hero-cursor">|</span>
    </span>
  );
}

const Hero = () => {
  const { badge, subtitle, cta } = portfolioData.hero;

  const getIcon = (label) => {
    if (label === 'View Projects') return ArrowRight;
    if (label === 'Download Resume') return FileText;
    if (label === 'Contact') return Mail;
    if (label === 'GitHub') return GithubIcon;
    return null;
  };

  return (
    <section className="hero-section">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-container">
        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {badge && (
            <motion.div className="hero-badge" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <GraduationCap size={14} />
              <span>{badge}</span>
            </motion.div>
          )}

          <motion.h1 className="hero-name" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            I'm <span className="hero-name-highlight">Deepan Raja</span>
          </motion.h1>

          <motion.div className="hero-role-line" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <span className="hero-role-prefix">a </span>
            <TypewriterRole />
          </motion.div>

          <motion.p className="hero-description" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            {subtitle}
          </motion.p>

          <motion.div className="hero-location" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <MapPin size={14} />
            <span>Tamil Nadu, India</span>
          </motion.div>

          {/* ── BUTTONS ── */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {cta.map((button) => {
              const Icon = getIcon(button.text);
              const isViewProjects = button.text === 'View Projects';
              return (
                <motion.a
                  key={button.text}
                  href={button.link}
                  className={`premium-btn ${isViewProjects ? 'premium-btn--violet' : 'premium-btn--dark'}`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  {isViewProjects && <span className="premium-btn__shine" />}
                  <span className="premium-btn__text">{button.text}</span>
                  {Icon && (
                    <span className="premium-btn__icon">
                      <Icon size={14} width={14} height={14} style={{ width: 14, height: 14 }} />
                    </span>
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="hero-ring-outer">
            <div className="hero-ring-inner" />
          </div>
          <div className="hero-photo-glow" />

          <motion.div
            className="hero-photo-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={heroImg}
              alt="Deepan Raja"
              className="hero-photo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.querySelector('.hero-photo-fallback').style.display = 'flex';
              }}
            />
            <div
              className="hero-photo-fallback"
              style={{
                display: 'none', width: '100%', height: '100%',
                alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg,#1e3a5f,#312e81)',
                fontSize: '5rem', fontWeight: 800,
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'Outfit,sans-serif', letterSpacing: '-0.02em',
              }}
            >DR</div>
            <div className="hero-photo-label">
              <div className="hero-photo-label-dot" />
              <span>Available for Work</span>
            </div>
          </motion.div>

          <motion.div className="hero-float-badge hero-float-badge-tl" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>⚡ React &amp; Node.js</motion.div>
          <motion.div className="hero-float-badge hero-float-badge-tr" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>💻 Full Stack Developer</motion.div>
          <motion.div className="hero-float-badge hero-float-badge-br" animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>🤖 AI Product Builder</motion.div>
          <motion.div className="hero-float-badge hero-float-badge-bl" animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>🚀 SaaS Builder</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;