import { Cpu, ShieldCheck, Sparkles } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeader from './ui/SectionHeader.jsx'
import Card from './ui/Card.jsx'
import Badge from './ui/Badge.jsx'
import Reveal from './ui/Reveal.jsx'

const GROUPS = [
  { key: 'hardSkills', title: 'Hard Skills', icon: Cpu },
  { key: 'securityTools', title: 'Security Tools', icon: ShieldCheck },
  { key: 'softSkills', title: 'Soft Skills', icon: Sparkles },
]

export default function Skills() {
  const { skills } = data

  return (
    <section id="skills" className="container-px py-20 sm:py-24">
      <SectionHeader index="03" subtitle="Toolbox" title="Skills & tools" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, i) => {
          const Icon = group.icon
          return (
            <Reveal key={group.key} delay={i * 0.1}>
              <Card className="h-full p-6">
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
