import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  imageSrc: string
  imageAlt: string
  imageBadge?: string
  imageBadgeIcon?: string
  children: ReactNode
  reverse?: boolean
  imageObjectPosition?: string
  priority?: boolean
}

export default function SplitSection({
  imageSrc,
  imageAlt,
  imageBadge,
  imageBadgeIcon = 'ri-image-line',
  children,
  reverse = false,
  imageObjectPosition = 'center',
  priority = false,
}: Props) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[72px] items-center ${
        reverse ? 'lg:[direction:rtl]' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative rounded-lg overflow-hidden shadow-lg ${reverse ? '[direction:ltr]' : ''}`}>
        <div className="relative w-full min-h-[360px] lg:min-h-[460px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: imageObjectPosition }}
          />
        </div>
        {imageBadge && (
          <div className="absolute bottom-6 left-6 bg-accent text-white font-urbanist font-bold text-sm px-5 py-3 rounded-md flex items-center gap-2 z-10">
            <i className={imageBadgeIcon} /> {imageBadge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className={reverse ? '[direction:ltr]' : ''}>{children}</div>
    </div>
  )
}
