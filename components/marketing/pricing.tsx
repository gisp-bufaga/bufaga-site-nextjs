interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
  ctaLink?: string
}

interface PricingProps {
  tiers: PricingTier[]
  theme?: 'corporate' | 'sustainability' | 'energy'
}

const themeColors = {
  corporate: {
    highlight: 'border-blue-600 bg-blue-50',
    button: 'bg-blue-600 hover:bg-blue-700',
    buttonOutline: 'border-blue-600 text-blue-600 hover:bg-blue-50',
  },
  sustainability: {
    highlight: 'border-green-600 bg-green-50',
    button: 'bg-green-600 hover:bg-green-700',
    buttonOutline: 'border-green-600 text-green-600 hover:bg-green-50',
  },
  energy: {
    highlight: 'border-orange-600 bg-orange-50',
    button: 'bg-orange-600 hover:bg-orange-700',
    buttonOutline: 'border-orange-600 text-orange-600 hover:bg-orange-50',
  },
}

export default function Pricing({ tiers, theme = 'corporate' }: PricingProps) {
  const colors = themeColors[theme]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Piani e Prezzi</h2>
          <p className="text-xl text-gray-600">
            Scegli la soluzione perfetta per le tue esigenze
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-lg p-8 ${
                tier.highlighted
                  ? `border-2 ${colors.highlight} shadow-xl`
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {tier.highlighted && (
                <div className="text-center mb-4">
                  <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    PIÙ POPOLARE
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && (
                  <span className="text-gray-600">/mese</span>
                )}
              </div>
              <p className="text-gray-600 mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaLink || '#contatto'}
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.highlighted
                    ? `${colors.button} text-white`
                    : `border-2 ${colors.buttonOutline}`
                }`}
              >
                {tier.ctaText || 'Inizia Ora'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}