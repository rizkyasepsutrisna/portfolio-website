import { ArrowUp } from 'lucide-react'
import data from '../data/portfolio.json'

export default function Footer() {
  const { profile } = data
  const year = new Date().getFullYear()

  return (
    <footer className="border-base border-t">
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-sm">
          rizky<span className="text-muted">.sutrisna</span>
        </p>
        <p className="text-xs text-muted">
          © {year} {profile.name} · Built with React & Tailwind CSS
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
        >
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  )
}
