interface Stat {
  number: string
  label: string
}

interface StatsProps {
  items: Stat[]
  backgroundColor?: 'dark' | 'light' | 'theme'
  theme?: 'corporate' | 'sustainability' | 'energy'
}

const themeColors = {
  corporate: 'bg-blue-900 text-white',
  sustainability: 'bg-green-900 text-white',
  energy: 'bg-orange-900 text-white',
}

export default function Stats({
  items,
  backgroundColor = 'dark',
  theme = 'corporate',
}: StatsProps) {
  const bgClass =
    backgroundColor === 'dark'
      ? 'bg-gray-900 text-white'
      : backgroundColor === 'light'
      ? 'bg-gray-50 text-gray-900'
      : themeColors[theme]

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-${Math.min(
            items.length,
            4
          )} gap-8 text-center max-w-5xl mx-auto`}
        >
          {items.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <p
                className={
                  backgroundColor === 'light' ? 'text-gray-600' : 'opacity-80'
                }
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}