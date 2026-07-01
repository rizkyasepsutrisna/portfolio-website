import { Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import data from '../data/portfolio.json'
import SectionHeader from './ui/SectionHeader.jsx'
import Card from './ui/Card.jsx'
import Reveal from './ui/Reveal.jsx'

export default function Contact() {
  const { profile } = data

  const channels = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'rizky-asep-sutrisna', href: profile.linkedin },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ]

  return (
    <section id="contact" className="container-px py-20 sm:py-24">
      <SectionHeader index="07" subtitle="Contact" title="Let's work together" />

      <div className="grid gap-8 lg:grid-cols-5 lg:items-center">
        <Reveal className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            Interested in working together or have a security assessment in mind?
            I&apos;m open to full-time roles and freelance engagements.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((c) => {
              const Icon = c.icon
              const inner = (
                <Card className="flex h-full items-center gap-3 p-4 sm:p-5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-muted">{c.label}</p>
                    <p className="truncate text-sm font-medium">{c.value}</p>
                  </div>
                </Card>
              )
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
