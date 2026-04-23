interface Props { children: React.ReactNode }

export default function SectionLabel({ children }: Props) {
  return (
    <span className="inline-block font-urbanist text-[13px] font-bold tracking-[0.12em] uppercase text-accent bg-accent/10 px-3.5 py-1 rounded-pill mb-4">
      {children}
    </span>
  )
}
