import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display"
          >
            Technical Arsenal
          </motion.h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {portfolioData.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              </div>
              <h3 className="font-semibold text-zinc-300 group-hover:text-white transition-colors">{skill.name}</h3>
              <div className="w-full mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="h-full bg-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;