export default function Badge({ children, variant = 'default' }) {
  const base =
    'inline-flex items-center rounded-full px-3 py-1 font-mono text-xs transition-colors'
  const variants = {
    default: 'border-base border text-muted hover:text-accent hover:border-accent/50',
    accent: 'bg-accent/10 text-accent',
  }
  return (
    <span
      className={`${base} ${variants[variant]}`}
      style={variant === 'default' ? { borderColor: 'var(--border)' } : undefined}
    >
      {children}
    </span>
  )
}
