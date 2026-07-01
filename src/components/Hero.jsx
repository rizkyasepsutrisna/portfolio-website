import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Mail, MapPin } from 'lucide-react'
import data from '../data/portfolio.json'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const { profile } = data

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="container-px relative z-10 py-24 sm:py-28">
        <motion.div
          {...fade(0)}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border-base border bg-subtle px-3.5 py-1.5"
          style={{ borderColor: 'var(--border)' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-muted">
            Available for full-time roles
          </span>
        </motion.div>

        <motion.p {...fade(0.08)} className="mono-label mb-4">
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          {...fade(0.14)}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div {...fade(0.22)} className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-base text-muted sm:text-xl">
          <span className="text-accent">&gt;</span>
          <span>{profile.roles.join(' · ')}</span>
          <span className="inline-block h-5 w-2 animate-blink bg-accent" />
        </motion.div>

        <motion.div {...fade(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-soft"
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full border-base border px-5 py-2.5 text-sm font-medium transition-colors hover:text-accent"
            style={{ borderColor: 'var(--border)' }}
          >
            View experience
          </a>
        </motion.div>

        <motion.div {...fade(0.46)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-accent" /> {profile.location}
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
            <Mail size={14} /> {profile.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
