import { motion } from 'framer-motion'

// Subtle scroll-triggered reveal. Kept minimal for the editorial look.
export default function Reveal({
  children,
  delay = 0,
  y = 14,
  className = '',
  as = 'div',
}) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
