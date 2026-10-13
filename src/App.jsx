import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Sparkles, BrainCircuit, Globe, ExternalLink, GraduationCap,
  Terminal, Layers3, Send
} from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'StudyPilot',
    type: 'AI · EDUCATION · FULL STACK',
    description: 'An AI study planner designed to turn a syllabus, exam date, and available study hours into a structured plan. Built with Flask, Python, Groq AI, and SQLite.',
    tags: ['Python', 'Flask', 'Groq AI', 'SQLite'],
    repo: 'https://github.com/akashprasad001/Study-Pilot',
    demo: 'https://study-pilot-slv6.onrender.com',
    visual: 'study',
  },
  {
    number: '02',
    name: 'Netflix Clone',
    type: 'FRONTEND · UI BUILD',
    description: 'A personal frontend project recreating a streaming-platform interface, focused on layout, visual hierarchy, and a familiar browsing experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/akashprasad001/Netflix-clone',
    demo: 'https://akashprasad001.github.io/Netflix-clone/',
    visual: 'netflix',
  },
]

const skills = [
  { title: 'Frontend', detail: 'HTML · CSS · JavaScript · React fundamentals', icon: Code2 },
  { title: 'Backend', detail: 'Python · Flask · REST API fundamentals', icon: Terminal },
  { title: 'AI & Data', detail: 'Groq API · SQLite · AI-powered workflows', icon: BrainCircuit },
  { title: 'Workflow', detail: 'Git · GitHub · VS Code · Deployment basics', icon: Layers3 },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function SectionLabel({ children }) {
  return <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300"><span className="h-px w-8 bg-violet-400" />{children}</div>
}

function ProjectCard({ project }) {
  return (
    <motion.article variants={reveal} className="project-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]">
      <div className={`project-art ${project.visual} relative flex h-56 items-center justify-center overflow-hidden border-b border-white/10 p-6`}>
        {project.visual === 'study' ? (
          <div className="study-window w-full max-w-sm rounded-xl border border-white/15 bg-[#101421]/90 p-4 shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
            <div className="mb-4 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-rose-400"/><span className="h-2 w-2 rounded-full bg-amber-300"/><span className="h-2 w-2 rounded-full bg-emerald-300"/><span className="ml-auto text-[10px] text-slate-500">STUDYPILOT / PLAN</span></div>
            <div className="text-left text-xs text-slate-400">YOUR STUDY PLAN</div>
            <div className="mt-1 text-left text-lg font-semibold">Make progress, daily.</div>
            <div className="mt-4 space-y-2"><div className="h-2 w-full rounded bg-violet-400/70"/><div className="h-2 w-4/5 rounded bg-cyan-300/60"/><div className="h-2 w-3/5 rounded bg-white/15"/></div>
            <div className="mt-4 flex gap-2"><div className="h-12 flex-1 rounded-lg bg-violet-400/10"/><div className="h-12 flex-1 rounded-lg bg-cyan-300/10"/><div className="h-12 flex-1 rounded-lg bg-white/5"/></div>
          </div>
        ) : (
          <div className="netflix-window relative w-full max-w-sm overflow-hidden rounded-xl border border-white/15 bg-[#121212] p-5 shadow-2xl transition duration-500 group-hover:-translate-y-2">
            <div className="mb-5 text-left text-2xl font-black tracking-tight text-red-500">NETFLIX</div>
            <div className="h-24 rounded-lg bg-gradient-to-r from-red-950 via-slate-800 to-black p-3 text-left"><div className="mt-8 text-lg font-black tracking-widest">FEATURED</div></div>
            <div className="mt-3 grid grid-cols-4 gap-2">{[1,2,3,4].map(n => <div key={n} className={`h-12 rounded bg-gradient-to-br ${n%2 ? 'from-rose-900 to-slate-800' : 'from-slate-700 to-black'}`}/>)}</div>
          </div>
        )}
        <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/70">PROJECT {project.number}</div>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-[10px] font-bold tracking-[0.22em] text-violet-300">{project.type}</p>
        <div className="mt-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
          <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub repository`} className="rounded-full border border-white/15 p-3 text-slate-300 transition hover:border-violet-300 hover:text-white"><Github size={18}/></a>
        </div>
        <p className="mt-3 min-h-[72px] max-w-xl text-sm leading-7 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300">{tag}</span>)}</div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-violet-200">Live demo <ArrowUpRight size={16}/></a>
          <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">Source code <Github size={16}/></a>
        </div>
      </div>
    </motion.article>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white selection:bg-violet-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-one"/><div className="orb orb-two"/>
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"/>
      </div>
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/30 bg-violet-300/10 font-bold text-violet-200">AP</span>
          <span className="text-sm font-semibold tracking-wide">akash<span className="text-violet-300">.dev</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(([label, href]) => <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>)}
          <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-violet-300 hover:bg-violet-300/10">Let's talk <ArrowUpRight className="ml-1 inline" size={14}/></a>
        </nav>
        <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      {menuOpen && <nav className="relative z-20 mx-5 mb-4 grid gap-1 rounded-2xl border border-white/10 bg-[#101421] p-3 md:hidden">{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu} className="rounded-xl px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{label}</a>)}</nav>}

      <main className="relative z-10">
        <section id="home" className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.2fr_.8fr] lg:px-12 lg:pt-20">
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={reveal} className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-xs text-emerald-200"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60"/><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300"/></span> Learning, building, improving</motion.div>
            <motion.p variants={reveal} className="mb-4 text-sm font-medium tracking-wide text-slate-400">HEY, I'M AKASH PRASAD 👋</motion.p>
            <motion.h1 variants={reveal} className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Building ideas into <span className="gradient-text">digital experiences.</span></motion.h1>
            <motion.p variants={reveal} className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">B.Tech CSE (AI & ML) student exploring web development and AI-powered applications. I enjoy learning by building projects that solve real problems.</motion.p>
            <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-violet-300 hover:bg-white/5">Explore my work <ArrowDownRight size={17}/></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold transition hover:bg-white/5">Get in touch <Mail size={16}/></a>
            </motion.div>
            <motion.div variants={reveal} className="mt-12 flex items-center gap-4 text-sm text-slate-500">
              <a className="transition hover:text-white" href="https://github.com/akashprasad001" target="_blank" rel="noreferrer"><Github size={19}/></a>
              <a className="transition hover:text-white" href="https://www.linkedin.com/in/akash-prasad-399580346/" target="_blank" rel="noreferrer" aria-label="Add your LinkedIn profile URL"><Linkedin size={19}/></a>
              <span className="h-4 w-px bg-white/15"/>
              <span>Open to learning & collaboration</span>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .9, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, ease: 'easeOut', delay: .25 }} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl"/>
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.015] p-5 shadow-glow sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs text-slate-500">CURRENT FOCUS</p><p className="mt-1 font-medium">Developer journey</p></div><Sparkles className="text-violet-300" size={20}/></div>
              <div className="my-7 flex items-center gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-300 to-cyan-200 text-xl font-black text-slate-950">AP</div><div><p className="text-xl font-semibold">Akash Prasad</p><p className="mt-1 text-sm text-slate-400">CSE · AI & ML</p></div></div>
              <div className="space-y-3">
                {[['01','Build','Turning concepts into projects'],['02','Learn','Strengthening fundamentals'],['03','Ship','Sharing work with the world']].map(([n,t,d]) => <div key={n} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4"><span className="font-mono text-xs text-violet-300">{n}</span><div className="flex-1"><p className="text-sm font-medium">{t}</p><p className="mt-1 text-xs text-slate-500">{d}</p></div><ArrowUpRight size={15} className="text-slate-600"/></div>)}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500"><Globe size={14}/> Building for the web, one step at a time</div>
            </div>
            <div className="absolute -right-3 top-16 hidden rounded-2xl border border-white/10 bg-[#151827] p-3 shadow-xl sm:block"><Code2 className="text-cyan-200" size={22}/></div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#151827] p-3 shadow-xl sm:block"><BrainCircuit className="text-violet-200" size={22}/></div>
          </motion.div>
        </section>

        <section id="about" className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.018]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={reveal} className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[.7fr_1.3fr] lg:px-12 lg:py-24">
            <div><SectionLabel>About me</SectionLabel><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Curious by nature.<br/><span className="text-slate-500">Builder by practice.</span></h2></div>
            <div><p className="text-base leading-8 text-slate-400">I'm a Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning. I learn best by taking an idea, breaking it into smaller problems, and building a working version.</p><p className="mt-4 text-base leading-8 text-slate-400">My projects include StudyPilot, an AI-assisted study planner, and a Netflix-inspired frontend clone. I'm currently focused on improving my development fundamentals, writing cleaner code, and learning how to deploy useful applications.</p><div className="mt-7 flex items-center gap-3 text-sm text-slate-300"><GraduationCap className="text-violet-300" size={20}/> B.Tech Computer Science Engineering with (AI & ML)</div></div>
          </motion.div>
        </section>

        <section id="skills" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}><SectionLabel>What I work with</SectionLabel><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tools in my toolbox<span className="text-violet-300">.</span></h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">A snapshot of the technologies I've used or am actively learning. Keep this section honest and update it as your experience grows.</p></motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={{ show: { transition: { staggerChildren: .1 } } }} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({title, detail, icon: Icon}) => <motion.div key={title} variants={reveal} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-300/10 text-violet-200"><Icon size={21}/></div><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p></motion.div>)}
          </motion.div>
        </section>

        <section id="projects" className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.018]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><SectionLabel>Selected work</SectionLabel><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects I've built<span className="text-violet-300">.</span></h2></div><a href="https://github.com/akashprasad001" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">More on GitHub <ArrowUpRight size={16}/></a></motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .1 }} variants={{ show: { transition: { staggerChildren: .15 } } }} className="mt-10 grid gap-6 lg:grid-cols-2">{projects.map(project => <ProjectCard key={project.name} project={project}/>)}</motion.div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-gradient-to-br from-violet-300/[0.12] via-white/[0.035] to-cyan-200/[0.06] p-7 sm:p-12 lg:p-16">
            <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl"/>
            <div className="relative max-w-3xl"><SectionLabel>Contact</SectionLabel><h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Have an idea?<br/><span className="gradient-text">Let's build something.</span></h2><p className="mt-5 max-w-xl text-base leading-8 text-slate-400">I'm always glad to connect with fellow learners, developers, and people building interesting things.</p><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:prasadakash1356@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-200"><Send size={16}/> Email me</a><a href="https://github.com/akashprasad001" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5"><Github size={16}/> GitHub</a><a href="https://www.linkedin.com/in/akash-prasad-399580346/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5"><Linkedin size={16}/> LinkedIn</a></div><p className="mt-5 text-xs text-amber-200/80">Feel free to reach out for internships, collaborations, and exciting projects.</p></div>
          </motion.div>
        </section>
      </main>
      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-7 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row"><span>© {new Date().getFullYear()} Akash Prasad. Built with React.</span><a href="#home" className="transition hover:text-white">Back to top ↑</a></div></footer>
    </div>
  )
}