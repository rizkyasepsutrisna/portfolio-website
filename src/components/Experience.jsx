import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import data from '../data/portfolio.json'
import SectionHeader from './ui/SectionHeader.jsx'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'security', label: 'Security' },
  { id: 'qa', label: 'QA' },
  { id: 'other', label: 'Other' },
]

export default function Experience() {
  const [filter, setFilter] = useState('all')

  const items = useMemo(() => {
    if (filter === 'all') return data.experiences
    return data.experiences.filter((e) => e.type === filter)
  }, [filter])

  return (
    <section id="experience" className="container-px py-20 sm:py-24">
      <SectionHeader index="02" subtitle="Career" title="Where I've worked" />

      <div className="mb-10 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              filter === f.id
                ? 'bg-accent text-white'
                : 'border-base border text-muted hover:text-accent'
            }`}
            style={filter === f.id ? undefined : { borderColor: 'var(--border)' }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <span
          className="absolute left-[7px] top-1 h-full w-px"
          style={{ backgroundColor: 'var(--border)' }}
        />
        <AnimatePresence mode="popLayout">
          {items.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-[color:var(--bg)]" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="font-mono text-xs text-muted">{exp.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {exp.company}
                <span className="text-muted"> — {exp.location}</span>
              </p>
              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
