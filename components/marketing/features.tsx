interface Feature {
  icon?: string
  title: string
  description: string
}

interface FeaturesProps {
  sectionTitle?: string
  sectionDescription?: string
  layout?: 'grid-2' | 'grid-3' | 'list'
  items: Feature[]
  theme?: 'corporate' | 'sustainability' | 'energy'
}

const themeColors = {
  corporate: {
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  sustainability: {
    accent: 'text-green-600',
    bg: 'bg-green-50',
  },
  energy: {
    accent: 'text-orange-600',
    bg: 'bg-orange-50',
  },
}

export default function Features({
  sectionTitle = 'Perché Scegliere Bufaga',
  sectionDescription,
  layout = 'grid-3',
  items,
  theme = 'corporate',
}: FeaturesProps) {
  const colors = themeColors[theme]

  const gridClass = {
    'grid-2': 'grid-cols-1 md:grid-cols-2',
    'grid-3': 'grid-cols-1 md:grid-cols-3',
    'list': 'grid-cols-1',
  }[layout]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{sectionTitle}</h2>
          {sectionDescription && (
            <p className="text-xl text-gray-600">{sectionDescription}</p>
          )}
        </div>

        <div className={`grid ${gridClass} gap-8 max-w-6xl mx-auto`}>
          {items.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                layout === 'list' ? 'flex gap-4 items-start' : ''
              }`}
            >
              {feature.icon && (
                <div
                  className={`text-5xl mb-4 ${
                    layout === 'list' ? 'mb-0' : ''
                  }`}
                >
                  {feature.icon}
                </div>
              )}
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${colors.accent}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}