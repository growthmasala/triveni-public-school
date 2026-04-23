import Link from 'next/link'
import { ReactNode } from 'react'

type Variant = 'accent' | 'primary' | 'outline' | 'outline-white'
type Size    = 'sm' | 'md' | 'lg'

interface Props {
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
  external?: boolean
}

const variantMap: Record<Variant, string> = {
  'accent':        'bg-accent hover:bg-accent-dark text-white border-accent hover:border-accent-dark hover:shadow-[0_8px_24px_rgba(236,126,52,0.35)]',
  'primary':       'bg-primary hover:bg-primary-dark text-white border-primary hover:border-primary-dark hover:shadow-[0_8px_24px_rgba(39,45,102,0.35)]',
  'outline':       'bg-transparent text-primary border-primary hover:bg-primary hover:text-white',
  'outline-white': 'bg-transparent text-white border-white/60 hover:bg-white/12 hover:border-white',
}

const sizeMap: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-[15px]',
  lg: 'px-10 py-4 text-[17px]',
}

export default function Button({
  href, onClick, variant = 'accent', size = 'md', children, className = '', type = 'button', external,
}: Props) {
  const base = `inline-flex items-center gap-2 font-urbanist font-semibold rounded-pill border-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap ${variantMap[variant]} ${sizeMap[size]} ${className}`

  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{children}</a>
      : <Link href={href} className={base}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  )
}
