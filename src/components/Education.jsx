import { GraduationCap } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeader from './ui/SectionHeader.jsx'
import Card from './ui/Card.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Education() {
  const { education } = data

  return (
    <section id="education" className="container-px py-20 sm:py-24">
      <SectionHeader index="04" subtitle="Academics" title="Education" />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={`${edu.degree}-${i}`} delay={i * 0.1}>
            <Card className="h-full p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <GraduationCap size={20} />
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                  GPA {edu.gpa}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{edu.degree}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{edu.institution}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>{edu.location}</span>
                <span className="font-mono">{edu.period}</span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
