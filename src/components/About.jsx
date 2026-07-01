import data from '../data/portfolio.json'
import SectionHeader from './ui/SectionHeader.jsx'
import Reveal from './ui/Reveal.jsx'

export default function About() {
  const { profile, stats } = data

  return (
    <section id="about" className="container-px py-20 sm:py-24">
      <SectionHeader index="01" subtitle="About" title="A bit about me" />

      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        <Reveal className="md:col-span-2">
          <p className="text-xl leading-relaxed sm:text-2xl">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col justify-center gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3">
              <span className="text-4xl font-bold tracking-tight text-accent">
                {s.value}
                {s.suffix}
              </span>
              <span className="text-sm text-muted">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
