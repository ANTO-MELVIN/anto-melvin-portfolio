import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Calendar, User, Award, CheckCircle, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import ThreeScene from './components/ThreeScene';
import ProjectSlider from './components/ProjectSlider';
import { PERSONAL_INFO, SKILLS, PROJECTS, HACKATHONS, INTERNSHIPS, EDUCATION, SOCIALS, EVENTS, PROFILE_IMAGES, CERTIFICATIONS } from './constants';
import TiltCard from './components/TiltCard';

const ImageSlideshow = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full h-full relative bg-slate-800">
      <AnimatePresence>
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      <ThreeScene />
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6 z-10 order-2 md:order-1 md:pl-16 lg:pl-24"
          >
            <motion.div variants={fadeInUp} className="inline-block px-3 py-1 rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-2">
              HELLO WORLD
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary whitespace-nowrap">{PERSONAL_INFO.name}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 font-light">
              {PERSONAL_INFO.tagline}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4 pt-4 flex-wrap">
              {SOCIALS.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url}
                  target={social.url.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.url.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className={`p-3 rounded-full bg-slate-900 border border-slate-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all group relative ${social.color || 'hover:border-primary hover:text-primary'}`}
                  aria-label={social.platform}
                >
                  <social.icon size={20} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-slate-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    {social.platform}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile Image with 3D effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center relative order-1 md:order-2"
          >
             <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                {/* Rotating rings */}
                <div className="absolute w-full h-full border-2 border-dashed border-slate-700 rounded-full animate-spin-slow"></div>
                <div className="absolute w-[92%] h-[92%] border border-slate-600 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                
                {/* Main Profile Image - Perfectly Centered */}
                <div className="w-[82%] h-[82%] rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative group bg-slate-900 z-10 flex items-center justify-center">
                    <img 
                        src={PROFILE_IMAGES.hero} 
                        alt={PERSONAL_INFO.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0 absolute inset-0 z-10"
                    />
                    <img 
                        src={PROFILE_IMAGES.hover || PROFILE_IMAGES.hero} 
                        alt={PERSONAL_INFO.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 absolute inset-0 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12 z-20">
                        <span className="text-primary font-mono text-xs">Computer Science Engineer</span>
                    </div>
                </div>

                {/* Floating Stats */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-4 top-10 bg-slate-900/90 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl hidden md:block z-20"
                >
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-slate-400">Hackathons</div>
                </motion.div>

                <motion.div 
                   initial={{ x: -50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 1.2 }}
                   className="absolute -left-4 bottom-10 bg-slate-900/90 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl hidden md:block z-20"
                >
                  <div className="text-2xl font-bold text-secondary">4+</div>
                  <div className="text-xs text-slate-400">Live Projects</div>
                </motion.div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* About & Skills Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <span className="w-12 h-1 bg-primary rounded-full"></span>
              About Me
              <span className="w-12 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </motion.div>

          <div id="skills" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((category, idx) => (
              <TiltCard key={idx} className="h-full">
                <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-6 rounded-2xl h-full hover:border-slate-600 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-200">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Background Section with User Image */}
      <section className="relative py-32 bg-fixed bg-cover" style={{ backgroundImage: `url(${PROFILE_IMAGES.parallax})`, backgroundPosition: 'center bottom' }}>
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Turning Vision Into Reality</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">
                  "Leadership is not about being in charge. It is about taking care of those in your charge."
                </p>
            </motion.div>
        </div>
      </section>

      {/* Experience & Certifications Section */}
      <section className="py-20 px-6 bg-slate-900/20">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Journey So Far</h2>
            
            {/* Timeline Grid: Education & Internships */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-24">
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-8 text-primary flex items-center justify-center gap-2">
                        Education
                    </h3>
                    <div className="space-y-8 pl-8 border-l border-slate-800 w-full max-w-md">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[41px] top-2 w-4 h-4 bg-slate-900 border-2 border-primary rounded-full"></span>
                                <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                                <p className="text-slate-400">{edu.institution}</p>
                                <span className="text-sm text-slate-500 font-mono">{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-8 text-secondary flex items-center justify-center gap-2">
                        Internships
                    </h3>
                    <div className="space-y-8 pl-8 border-l border-slate-800 w-full max-w-md">
                        {INTERNSHIPS.map((exp, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[41px] top-2 w-4 h-4 bg-slate-900 border-2 border-secondary rounded-full"></span>
                                <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                                <p className="text-slate-400">{exp.company}</p>
                                <span className="text-sm text-slate-500 font-mono">{exp.period}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certifications Grid */}
            <div className="pt-8">
                <h3 className="text-2xl font-bold mb-10 text-green-400 flex items-center justify-center gap-2">
                    <Award /> Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <TiltCard key={idx} className="h-full">
                            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-green-400/50 transition-colors group h-full flex flex-col justify-between">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors mb-1">{cert.title}</h4>
                                        <p className="text-sm text-slate-400">{cert.issuer}</p>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-800/50 flex justify-end">
                                     <span className="text-xs text-slate-500 font-mono">{cert.year}</span>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Projects Slider Section */}
      <section id="projects" className="py-10 px-0 relative overflow-hidden">
        <div className="w-full max-w-[1800px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center px-6">Innovation Hub</h2>
            <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12 px-6">
                Exploring the intersection of hardware, software, and artificial intelligence.
            </p>
            
            <ProjectSlider title="Featured Projects" projects={PROJECTS} />
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-10 px-0 relative bg-slate-900/30">
        <div className="w-full max-w-[1800px] mx-auto">
            <ProjectSlider title="Hackathon Achievements" projects={HACKATHONS} />
        </div>
      </section>

      {/* Gallery / Events Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Events & Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {EVENTS.map((event, idx) => (
                    <TiltCard key={idx}>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden h-full flex flex-col group">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                <ImageSlideshow images={event.images} />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                                <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-3">
                                    <User size={14} />
                                    <span>{event.role}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Let's Connect</h2>
          
          {/* Contact Slider / Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
              {SOCIALS.filter(s => s.platform !== 'GitHub').map((social, idx) => (
                  <TiltCard key={idx} className="w-full md:w-[280px]">
                      <a 
                        href={social.platform === 'Email' ? `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}` : social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center hover:border-slate-600 transition-all group">
                            <div className={`p-4 rounded-full bg-slate-950 mb-4 group-hover:scale-110 transition-transform ${social.color ? social.color.replace('hover:border-', 'text-slate-400 ') : 'text-slate-400 group-hover:text-primary'}`}>
                                <social.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{social.platform}</h3>
                            <p className="text-sm text-slate-400 break-all">{social.text}</p>
                        </div>
                      </a>
                  </TiltCard>
              ))}
          </div>

          <div id="hire-me" className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Ready to start a project?</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm available for freelance work and open to full-time opportunities.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-slate-950 font-bold rounded-full hover:bg-sky-400 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Mail size={20} />
                Say Hello
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=919487868172&text=hi%20anto%20melvin"
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Me
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                    <Mail size={14} /> {PERSONAL_INFO.email}
                </div>
                <div>
                   © {new Date().getFullYear()} Anto Melvin A
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}