import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Mail, MapPin } from 'lucide-react'
import data from '../data/portfolio.json'
import profileImg from '../assets/profile.png'

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

      <div className="container-px relative z-10 grid items-center gap-12 py-24 sm:py-28 lg:grid-cols-[1.3fr_1fr]">
        {/* Left: intro */}
        <div className="order-2 lg:order-1">
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

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-[16rem] sm:max-w-xs">
            {/* accent glow */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/25 via-accent/5 to-transparent blur-2xl" />
            {/* decorative frame offset */}
            <div
              className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-accent/40"
              aria-hidden="true"
            />
            <div
              className="relative overflow-hidden rounded-2xl border bg-card"
              style={{ borderColor: 'var(--border)' }}
            >
              <img
                src={profileImg}
                alt={`Portrait of ${profile.name}`}
                width={440}
                height={640}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            {/* mono caption chip */}
            <div
              className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border bg-card px-3 py-1.5 shadow-sm"
              style={{ borderColor: 'var(--border)' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[11px] text-muted">
                {profile.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
