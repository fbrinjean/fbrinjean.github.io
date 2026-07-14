export function Highlight({ children }: { children: React.ReactNode }) {
  return <mark className="editorial-highlight text-foreground">{children}</mark>
}
