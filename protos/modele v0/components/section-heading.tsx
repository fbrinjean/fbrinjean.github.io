export function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-14 flex items-baseline gap-4 border-b border-border pb-6">
      <span className="font-mono text-xs text-primary">{index}</span>
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
        <h2 className="text-balance font-serif text-2xl font-medium text-foreground md:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  )
}
