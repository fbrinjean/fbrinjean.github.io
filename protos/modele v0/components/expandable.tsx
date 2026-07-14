'use client'

import { useState, useId } from 'react'
import { Plus, Minus } from 'lucide-react'

export function Expandable({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <div className="mt-6 border-t border-border pt-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground focus-visible:outline-none"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-primary/50 transition-colors group-hover:border-foreground">
          {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
        </span>
        {open ? 'Réduire' : 'Approfondir'}
      </button>

      {open && (
        <div
          id={id}
          className="mt-5 space-y-4 border-l-2 border-primary/30 pl-5 text-[0.95rem] leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
        >
          {children}
        </div>
      )}
    </div>
  )
}
