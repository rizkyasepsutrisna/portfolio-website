import { BadgeCheck } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeader from './ui/SectionHeader.jsx'
import Card from './ui/Card.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Certifications() {
  const { achievements } = data

  return (
    <section id="certifications" className="container-px py-20 sm:py-24">
      <SectionHeader
        index="05"
        subtitle="Credentials"
        title="Certifications & achievements"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.08}>
            <Card className="flex h-full items-start gap-4 p-5">
              <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BadgeCheck size={18} />
              </span>
              <div>
                <h3 className="font-medium leading-snug">{item.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {item.issuer} · {item.year}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
