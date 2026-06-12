import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#080808]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Learning Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2">Currently Exploring</h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.experience.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 glass rounded-xl border border-blue-500/10 flex items-center gap-4 hover:border-blue-500/30 transition-colors group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:shadow-[0_0_8px_#3b82f6] transition-all" />
              <span className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;