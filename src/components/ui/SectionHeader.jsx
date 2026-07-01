import Reveal from './Reveal.jsx'

export default function SectionHeader({ index, title, subtitle }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-8 bg-accent/50" />
        <span className="mono-label">{subtitle}</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  )
}
