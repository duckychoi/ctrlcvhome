interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`text-sm font-semibold uppercase tracking-[0.3em] text-violet-600 ${className}`}>
      {text}
    </div>
  )
}