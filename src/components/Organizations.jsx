import data from '../data/portfolio.json'
import SectionHeader from './ui/SectionHeader.jsx'
import Card from './ui/Card.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Organizations() {
  const { organizations } = data

  return (
    <section id="organizations" className="container-px py-20 sm:py-24">
      <SectionHeader index="06" subtitle="Community" title="Organizations" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org, i) => (
          <Reveal key={`${org.name}-${i}`} delay={i * 0.1}>
            <Card className="flex h-full flex-col p-6">
              <span className="font-mono text-xs text-accent">{org.period}</span>
              <h3 className="mt-3 font-semibold leading-snug">{org.name}</h3>
              <p className="mt-1 text-sm text-muted">{org.role}</p>
              <ul className="mt-4 space-y-1.5">
                {org.highlights.map((h, idx) => (
                  <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/70" />
                    {h}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
