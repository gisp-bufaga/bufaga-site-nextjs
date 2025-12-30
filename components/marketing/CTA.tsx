'use client'

interface CTAProps {
  primaryText: string
  primaryLink: string
  secondaryText?: string
  secondaryLink?: string
  style?: 'standard' | 'large' | 'minimal'
  theme?: 'corporate' | 'sustainability' | 'energy'
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

const themeColors = {
  corporate: {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'border-blue-600 text-blue-600 hover:bg-blue-50',
  },
  sustainability: {
    primary: 'bg-green-600 hover:bg-green-700 text-white',
    secondary: 'border-green-600 text-green-600 hover:bg-green-50',
  },
  energy: {
    primary: 'bg-orange-600 hover:bg-orange-700 text-white',
    secondary: 'border-orange-600 text-orange-600 hover:bg-orange-50',
  },
}

const sizeClasses = {
  standard: 'px-6 py-3 text-base',
  large: 'px-8 py-4 text-lg',
  minimal: 'px-4 py-2 text-sm',
}

export default function CTA({
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  style = 'standard',
  theme = 'corporate',
  onPrimaryClick,
  onSecondaryClick,
}: CTAProps) {
  const colors = themeColors[theme]
  const sizes = sizeClasses[style]

  const handlePrimaryClick = () => {
    // Track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: primaryText,
      })
    }
    if (onPrimaryClick) onPrimaryClick()
  }

  const handleSecondaryClick = () => {
    // Track event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click_secondary', {
        event_category: 'engagement',
        event_label: secondaryText,
      })
    }
    if (onSecondaryClick) onSecondaryClick()
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href={primaryLink}
        onClick={handlePrimaryClick}
        className={`${sizes} ${colors.primary} rounded-lg font-semibold transition-colors inline-block`}
      >
        {primaryText}
      </a>
      {secondaryText && secondaryLink && (
        <a
          href={secondaryLink}
          onClick={handleSecondaryClick}
          className={`${sizes} ${colors.secondary} border-2 rounded-lg font-semibold transition-colors inline-block`}
        >
          {secondaryText}
        </a>
      )}
    </div>
  )
}
