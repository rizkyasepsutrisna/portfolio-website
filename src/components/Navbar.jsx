import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import ThemeToggle from './ThemeToggle.jsx'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'organizations', label: 'Orgs' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(['home', ...LINKS.map((l) => l.id)])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-base border-b backdrop-blur-xl' : 'border-b border-transparent'
      }`}
      style={scrolled ? { backgroundColor: 'color-mix(in srgb, var(--bg) 72%, transparent)' } : undefined}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="flex h-2 w-2 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
          rizky<span className="text-muted">.sutrisna</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                activeId === link.id
                  ? 'text-accent'
                  : 'text-muted hover:text-[color:var(--text)]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-[color:var(--border)]" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border-base border"
            style={{ borderColor: 'var(--border)' }}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-base border-t backdrop-blur-xl lg:hidden" style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 92%, transparent)' }}>
          <div className="container-px flex flex-col py-2">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm transition-colors ${
                  activeId === link.id ? 'text-accent' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
