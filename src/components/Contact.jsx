import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useState } from 'react';

const Contact = () => {
  const { email, github, linkedin } = portfolioData.contact;

  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Hi Deepan,\n\nYou have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n\n— Sent via Portfolio`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');

    setSent(true);
    // Reset form
    setName('');
    setSenderEmail('');
    setMessage('');
    // Hide success after 5s
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-16 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-16">
            {/* LEFT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">Let's Connect</h2>
              <p className="text-xl text-zinc-400 mb-12">
                Have a vision for the next big AI startup? Let's build it together.
              </p>

              <div className="space-y-6">
                <a href={'mailto:' + email} className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email Me</p>
                    <p className="text-lg font-medium">{email}</p>
                  </div>
                </a>

                <div className="flex gap-4 pt-6">
                  <a href={github} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                  </a>
                  <a href={linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — form */}
            <form onSubmit={handleSend} className="space-y-6">
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-4"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-emerald-400 font-semibold text-sm">Gmail opened successfully!</p>
                      <p className="text-emerald-400/70 text-xs mt-0.5">Your message is pre-filled — just hit Send in Gmail.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white placeholder-zinc-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Email</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-white placeholder-zinc-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors resize-none text-white placeholder-zinc-600"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
              >
                Send Message <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;