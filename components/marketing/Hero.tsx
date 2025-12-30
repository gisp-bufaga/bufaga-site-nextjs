import Image from 'next/image'

interface HeroProps {
  headline: string
  subheadline?: string
  image?: {
    url: string
    alt: string
  }
  layout?: 'imageRight' | 'imageLeft' | 'background' | 'centered'
  theme?: 'corporate' | 'sustainability' | 'energy'
}

const themeColors = {
  corporate: {
    bg: 'bg-blue-50',
    text: 'text-blue-900',
    accent: 'text-blue-600',
  },
  sustainability: {
    bg: 'bg-green-50',
    text: 'text-green-900',
    accent: 'text-green-600',
  },
  energy: {
    bg: 'bg-orange-50',
    text: 'text-orange-900',
    accent: 'text-orange-600',
  },
}

export default function Hero({
  headline,
  subheadline,
  image,
  layout = 'imageRight',
  theme = 'corporate',
}: HeroProps) {
  const colors = themeColors[theme]

  if (layout === 'centered') {
    return (
      <section className={`py-20 ${colors.bg}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold mb-6 ${colors.text}`}>
            {headline}
          </h1>
          {subheadline && (
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${colors.accent}`}>
              {subheadline}
            </p>
          )}
          {image && (
            <div className="relative w-full h-96 mt-12 rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>
    )
  }

  if (layout === 'background') {
    return (
      <section className="relative h-screen">
        {image && (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl font-bold mb-6">{headline}</h1>
            {subheadline && (
              <p className="text-2xl max-w-2xl mx-auto">{subheadline}</p>
            )}
          </div>
        </div>
      </section>
    )
  }

  // imageRight or imageLeft layouts
  const isImageRight = layout === 'imageRight'

  return (
    <section className={`py-20 ${colors.bg}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
          <div className="flex-1">
            <h1 className={`text-5xl font-bold mb-6 ${colors.text}`}>
              {headline}
            </h1>
            {subheadline && (
              <p className={`text-xl ${colors.accent}`}>{subheadline}</p>
            )}
          </div>
          {image && (
            <div className="flex-1 relative w-full h-96">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
