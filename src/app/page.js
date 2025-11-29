'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Code2,
  Database,
  Layout,
  Terminal,
  Cpu,
  Globe,
  CheckCircle2,
  ChevronDown,
  Monitor,
  Trello,
  GitBranch,
  Rocket,
  Server,
  Layers,
  Award,
  Send,
  Phone
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSmoothTypewriter } from '@/hooks/useSmoothTypewriter';

// --- TECH ICON MAP (For the improved Toolbox section) ---
const TechIconMap = {
  'Next.js 14': <Monitor size={14} />,
  'React': <Code2 size={14} />,
  'Tailwind': <Trello size={14} />,
  'Framer Motion': <Rocket size={14} />,
  'Node.js': <Server size={14} />,
  'Express': <GitBranch size={14} />,
  'PostgreSQL': <Database size={14} />,
  'Prisma': <Layers size={14} />,
  'Git / GitHub': <Github size={14} />,
  'Docker': <Cpu size={14} />,
  'Vercel': <Globe size={14} />,
  'Linux': <Terminal size={14} />,
  'Figma': <Layout size={14} />,
  'UI Principles': <CheckCircle2 size={14} />,
  'Responsive': <Monitor size={14} />,
  'Accessibility': <CheckCircle2 size={14} />,
};

// --- MAIN PORTFOLIO COMPONENT ---
const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const typewriterText = useSmoothTypewriter([
    "Full-Stack Web Developer",
    "Web App & Dashboard Builder",
    "CMS & Admin Panel Specialist",
  ], {
    speed: 30,
    deleteSpeed: 35,
    delayBetweenTexts: 2500
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans overflow-x-clip">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-6 left-0 right-0 z-40 px-4">
        <div className="w-full max-w-4xl mx-auto bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl">
          <a href="/" className="font-bold text-lg tracking-tight hover:text-indigo-400 transition-colors">
            DK <span className="text-indigo-500">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {['Projects', 'Experience', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="mailto:dineshsutharr02@gmail.com" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-400 hover:text-white transition-all">
            Hire Me
          </a>
        </div>
      </nav>

      {/* FIX #1: Removed excessive pt-40, set to pt-24 for better spacing */}
      <main className="relative z-10 pt-24 px-4 sm:px-6 max-w-7xl mx-auto">

        {/* --- HERO SECTION --- */}
        <section className="min-h-[70vh] flex flex-col justify-center items-start relative">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <span className="h-[1px] w-12 bg-indigo-500"></span>
            <span className="text-indigo-400 font-mono text-xs sm:text-sm tracking-widest uppercase">Available for work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-4 sm:mb-6"
          >
            Dhanesh Kumar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-16 sm:h-20 text-xl sm:text-2xl md:text-4xl text-zinc-400 font-light"
          >
            I am a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-semibold font-mono">
              {typewriterText}
            </span>
            <span className="ml-1 animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-xl text-zinc-500 text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 mb-6 sm:mb-10"
          >
            I take ideas from imagination to a working URL.
            Clean UI, stable backend, deployed and live. No fluff, just code that works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href="#projects" className="group flex items-center justify-center sm:justify-start gap-2 bg-zinc-100 text-black px-6 py-3 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all">
              See My Work
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
            </a>
            <div className="flex items-center justify-center gap-4 px-6">
              <SocialLink href="https://github.com/Dhaneshkumarr" icon={<Github size={20} />} />
              <SocialLink href="https://linkedin.com/in/dhanesh-kumar02" icon={<Linkedin size={20} />} />
              <SocialLink href="https://x.com/DhaneshCodes" icon={<Twitter size={20} />} />
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-16 sm:py-20">
          <SectionHeader title="Selected Works" subtitle="Things I've built that actually live on the internet." />

          <div className="flex flex-col gap-16 sm:gap-24 mt-12 sm:mt-16">

            <ProjectCard
              title="FlightOFinder"
              tagline="Full-Stack Flight Booking Engine"
              description="A complete flight search and booking system. Integrates Amadeus API for real-time global flight data, handles complex search queries, and manages booking confirmations via automated Nodemailer services."
              tech={["Next.js", "Express.js", "Amadeus API", "Tailwind", "MUI"]}
              align="right"
              color="indigo"
              status="Live"
              projectImg={'/project-1.webp'}
              liveLink={'https://flightofinder-project.netlify.app/'}
            />

            {/* Project 2 */}
            <ProjectCard
              title="Healthcare CMS"
              tagline="Custom Content Management System"
              description="A high-performance marketing platform for healthcare with a bespoke admin panel. Allows non-technical admins to manage blogs, video content, and reviews with full CRUD capabilities. Built from scratch, no templates."
              tech={["Next.js", "Prisma", "MySQL", "Cloudinary", "JWT Auth", "Tailwind"]}
              align="left"
              color="emerald"
              status="Live"
              projectImg={'/project-3.webp'}
              liveLink={'https://healthcarecms-project.netlify.app/'}
            />

            {/* Project 3 */}
            <ProjectCard
              title="farepals"
              tagline="Interactive Travel Portal"
              description="Travel Flight Platform | Next.js, Tailwind CSS, Swiper | Features custom infinite card slider & responsive design for optimal user experience."
              tech={["Next.js", "Tailwind CSS", "Swiper"]}
              align="right"
              color="orange"
              status="Live"
              projectImg={'/project-2.webp'}
              liveLink={'https://farepals-project.netlify.app/'}
            />

            {/* FIX #2: Coming Soon Placeholder with 3rd GREEN dot */}
            <ComingSoonCard />

          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-16 sm:py-20 relative">
          <SectionHeader title="Career Track" subtitle="My professional journey so far." />

          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-zinc-800 to-transparent"></div>

            <div className="space-y-8 sm:space-y-12">
              <TimelineItem
                date="July 2025 - Present"
                role="Full-Stack Web Developer"
                company="Freelance"
                current={true}
                description="Building end-to-end web solutions for global clients. Managing deployment pipelines, database architecture, and ensuring 100% uptime for production apps."
              />
              <TimelineItem
                date="June 2024 - July 2025"
                role="Web Developer"
                company="Travel Agency (New Delhi)"
                description="Specialized in converting Figma designs to pixel-perfect Next.js websites using Tailwind CSS. Enhanced UI/UX while maintaining design consistency across multiple client projects."
              />
            </div>
          </div>
        </section>

        {/* --- SKILLS GRID (IMPROVED BENTO STYLE) --- */}
        <section className="py-16 sm:py-20">
          <SectionHeader title="The Toolbox" subtitle="Technologies I use to break and fix things." />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10">
            <SkillBox icon={<Globe />} title="Frontend" skills={['Next.js', 'React', 'Tailwind', 'Framer Motion']} />
            <SkillBox icon={<Database />} title="Backend" skills={['Node.js', 'Express', 'Spring Boot', 'MySQL']} />
            <SkillBox icon={<Terminal />} title="DevOps" skills={['Git / GitHub', 'Docker', 'Vercel', 'Linux']} />
            <SkillBox icon={<Layout />} title="Design" skills={['UI Principles', 'Responsive', 'Accessibility']} />
          </div>
        </section>

        {/* --- ABOUT ME (FIXED IMAGE VISIBILITY) --- */}
        <section id="about" className="pt-16 sm:py-24 border-t border-white/5">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start md:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">More Than Just Code.</h2>
              <div className="space-y-4 sm:space-y-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I started with a BCA degree and then leveled up with a <strong className="text-white font-semibold">Java Full Stack Development</strong> certification, but my real education came from debugging errors at 2 AM.
                </p>
                <div className="flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-white/5 rounded-xl p-4">
                  <Award className="text-indigo-400 mt-1 shrink-0" size={24} />
                  <div>
                    <div className="text-white text-base sm:text-lg font-semibold mb-1">Certified Java Full Stack Developer</div>
                    <div className="text-xs sm:text-sm text-zinc-500">Specialized training in enterprise Java, Spring Boot, and modern web development</div>
                  </div>
                </div>
                <p>
                  I believe that a developer's job isn't just to write codeâ€"it's to solve business problems. Whether it's optimizing a slow database query for a healthcare portal or crafting a smooth animation for a travel site, I focus on the <strong className="text-white">impact</strong>.
                </p>
                <p>
                  When I'm not coding, I'm exploring new UI trends or contributing to open source.
                </p>
              </div>
            </div>

            {/* FIX #3: About Section Image - Fixed Mobile Visibility */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <div className="w-full h-full rounded-2xl bg-zinc-900 border-2 border-white/10 relative overflow-hidden shadow-2xl shadow-indigo-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent z-10" />
                <Image
                  src="/about-me.webp"
                  alt="About Developer Photo"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-indigo-500/40 rounded-tl-lg"></div>
                <div className="absolute bottom-4 right-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-indigo-500/40 rounded-br-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER / CTA --- */}
        <footer id="contact" className="pt-18 sm:pt-24 relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full z-0 pointer-events-none" />

          <div className="relative z-10 px-4 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left Side - Original Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
                  Let's build something <br />
                  <span className="text-indigo-500">unforgettable.</span>
                </h2>
                <p className="text-lg sm:text-xl text-zinc-400 mb-8 sm:mb-10 max-w-2xl">
                  I'm currently available for freelance projects and open full-time roles.
                  If you have an idea, I have the stack.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  {/* Primary Button */}
                  <a href="mailto:dineshsutharr02@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white text-sm font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition-all hover:scale-105 whitespace-nowrap">
                    <Mail size={18} /> Email Me
                  </a>
                  {/* Secondary Button */}
                  <a href="https://linkedin.com/in/dhanesh-kumar02" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors hover:scale-[1.02] whitespace-nowrap">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-12 space-y-4 text-zinc-400">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <Link href="mailto: dineshsutharr02@gmail.com" className="flex items-center gap-2" >
                      <Mail size={18} className="text-indigo-400" />
                      <span>dineshsutharr02@gmail.com</span>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <Phone size={18} className="text-indigo-400" />
                    <span>Available upon request</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Compact Contact Form */}
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
                <p className="text-zinc-400 mb-6 text-sm">
                  Have a project in mind? Let's discuss it.
                </p>

                <form className="space-y-4">
                  {/* Name & Email in one row */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        className="w-full px-3 py-2 text-sm bg-zinc-800/50 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email *"
                        required
                        className="w-full px-3 py-2 text-sm bg-zinc-800/50 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget in one row */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <select
                        required
                        className="w-full px-3 py-2 text-sm bg-zinc-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-zinc-800">Project Type *</option>
                        <option value="freelance" className="bg-zinc-800">Freelance Project</option>
                        <option value="fulltime" className="bg-zinc-800">Full-time Role</option>
                        <option value="contract" className="bg-zinc-800">Contract Work</option>
                        <option value="contract" className="bg-zinc-800">Other</option>
                      </select>
                    </div>
                    <div>
                      <select
                        className="w-full px-3 py-2 text-sm bg-zinc-800/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-zinc-800">Budget (Optional)</option>
                        <option value="1k-5k" className="bg-zinc-800">$349 - $3k</option>
                        <option value="5k-15k" className="bg-zinc-800">$5k - $12k</option>
                        <option value="15k-plus" className="bg-zinc-800">$15k+</option>
                        <option value="15k-plus" className="bg-zinc-800">To be discussed</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      required
                      rows={3}
                      className="w-full px-3 py-2 text-sm bg-zinc-800/50 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-500 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                  <p className="text-xs text-zinc-500 text-center">
                    I typically respond within 24 hours. Your information is secure and never shared.
                  </p>
                </form>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 py-8 border-t border-white/5 text-center">
              <div className="text-zinc-600 text-xs sm:text-sm">
                &copy; 2025 Dhanesh Kumar. Crafted with Next.js + Tailwind.
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div >
  );
};

// --- SUB-COMPONENTS ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">{title}</h2>
    <p className="text-zinc-400 text-base sm:text-lg max-w-xl">{subtitle}</p>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
    {icon}
  </a>
);

const ProjectCard = ({ title, tagline, description, tech, align, color, status, projectImg, liveLink }) => {
  // Color mapping
  const colorClasses = {
    indigo: "from-indigo-500/20 to-purple-500/20 hover:border-indigo-500/50",
    emerald: "from-emerald-500/20 to-teal-500/20 hover:border-emerald-500/50",
    orange: "from-orange-500/20 to-red-500/20 hover:border-orange-500/50"
  };

  const btnColor = {
    indigo: "bg-indigo-500",
    emerald: "bg-emerald-500",
    orange: "bg-orange-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`group relative grid md:grid-cols-2 gap-6 sm:gap-8 items-center p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm ${colorClasses[color]} transition-colors duration-500 w-full`}
    >
      <div className={`order-2 ${align === 'right' ? 'md:order-1' : 'md:order-2'}`}>
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className={`h-2 w-2 rounded-full ${btnColor[color]}`}></span>
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">{status}</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-indigo-400 mb-4 font-medium">{tagline}</p>
        <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {tech.map(t => (
            <span key={t} className="px-2 sm:px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-zinc-300 border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-row gap-2 sm:gap-3">
          <button
            onClick={() => window.open(liveLink, "_blank")}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-bold rounded-full text-sm hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0">
            View Live <ArrowUpRight size={16} />
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-white/20 text-white font-medium rounded-full text-sm hover:bg-white/10 transition-colors whitespace-nowrap flex-shrink-0">
            View Code
          </button>
        </div>
      </div>

      {/* Project Screenshot Container */}
      <div
        className={`order-1 ${align === 'right' ? 'md:order-2' : 'md:order-1'} h-[200px] sm:h-[280px] md:h-[350px] bg-zinc-950 rounded-xl sm:rounded-2xl border border-white/10 relative overflow-hidden shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500`}
      >
        {/* Browser Window Header */}
        <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 bg-zinc-900/80 backdrop-blur-sm border-b border-white/5 flex items-center px-3 sm:px-4 gap-2 z-10">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500/60"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500/60"></div>
          <div className="ml-2 sm:ml-4 flex-1 h-5 sm:h-6 bg-zinc-800/50 rounded text-xs flex items-center px-2 sm:px-3 text-zinc-600 font-mono hidden sm:flex">https://{title.toLowerCase().replace(/\s+/g, '')}.com</div>
        </div>
        {/* Image Container */}
        <div className="absolute inset-0 pt-8 sm:pt-10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
          <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 overflow-hidden">
            <Image
              src={projectImg}
              alt={`${title} Screenshot`}
              fill
              className="object-cover object-top pt-8 sm:pt-10"
              loading="lazy"
            />
          </div>
        </div>
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 to-transparent pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

// FIX #2: Coming Soon Card with 3rd GREEN dot
const ComingSoonCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="w-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900/30 border-2 border-dashed border-green-500/50 opacity-80 hover:opacity-100 transition-opacity flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
  >

    <div className="flex items-start gap-4 sm:gap-6 md:w-2/3 mt-8 sm:mt-0">
      <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-500/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
        <Rocket size={28} className="text-green-400" />
      </div>
      <div>
        <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-green-400 mb-2 block">Next Ambitious Build</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">New Full-Stack Web App</h3>
        <p className="text-sm sm:text-base text-zinc-400">
          A complete web application built with modern stack. Focused on responsive design, smooth interactions and clean code architecture.
        </p>
      </div>
    </div>
    <div className="flex-shrink-0">
      <span className="px-4 sm:px-6 py-2 sm:py-3 bg-zinc-800 border border-zinc-700 text-xs sm:text-sm rounded-full text-zinc-300 font-bold">In Development...</span>
    </div>
  </motion.div>
);

const TimelineItem = ({ date, role, company, description, current }) => (
  <div className="relative pl-6 sm:pl-8 md:pl-16 group">
    {/* Dot on line */}
    <div className={`absolute left-[-5px] md:left-[27px] top-1 w-3 h-3 rounded-full border-2 border-black ${current ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]' : 'bg-zinc-600'}`}></div>

    <div className="flex flex-col gap-1 sm:gap-2 mb-2">
      <h3 className="text-lg sm:text-xl font-bold text-zinc-100">{role}</h3>
      <div className="flex items-center gap-2 text-sm sm:text-base">
        <span className="text-indigo-400 font-medium">{company}</span>
        <span className="hidden sm:inline text-zinc-600">•</span>
        <span className="text-xs sm:text-sm font-mono text-zinc-500">{date}</span>
      </div>
    </div>
    <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm sm:text-base">
      {description}
    </p>
  </div>
);

const SkillBox = ({ icon, title, skills }) => (
  <div className="p-4 sm:p-6 bg-zinc-900/40 border border-white/5 rounded-lg sm:rounded-2xl hover:bg-zinc-900/60 transition-colors">
    <div className="text-indigo-400 mb-3 sm:mb-4">{icon}</div>
    <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">{title}</h4>
    <ul className="space-y-1.5 sm:space-y-2">
      {skills.map(s => (
        <li key={s} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
          <span className="text-indigo-500">
            {TechIconMap[s] || <CheckCircle2 size={14} />}
          </span>
          {s}
        </li>
      ))}
    </ul>
  </div>
);

export default Portfolio;