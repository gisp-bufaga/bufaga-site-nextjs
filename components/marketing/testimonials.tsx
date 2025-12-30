'use client'

import { useState } from 'react'

interface Testimonial {
  name: string
  company: string
  role: string
  quote: string
  image?: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  theme?: 'corporate' | 'sustainability' | 'energy'
}

const themeColors = {
  corporate: {
    bg: 'bg-blue-50',
    accent: 'text-blue-600',
    border: 'border-blue-200',
  },
  sustainability: {
    bg: 'bg-green-50',
    accent: 'text-green-600',
    border: 'border-green-200',
  },
  energy: {
    bg: 'bg-orange-50',
    accent: 'text-orange-600',
    border: 'border-orange-200',
  },
}

export default function Testimonials({
  testimonials,
  theme = 'corporate',
}: TestimonialsProps) {
  const [current, setCurrent] = useState(0)
  const colors = themeColors[theme]

  return (
    <section className={`py-20 ${colors.bg}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Cosa Dicono i Nostri Clienti
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Current Testimonial */}
          <div className={`bg-white p-8 rounded-lg shadow-lg border-l-4 ${colors.border}`}>
            <div className="flex items-start gap-4 mb-6">
              {testimonials[current].image ? (
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                  {testimonials[current].name.charAt(0)}
                </div>
              )}
              <div>
                <h3 className="font-semibold text-lg">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-600">
                  {testimonials[current].role} • {testimonials[current].company}
                </p>
              </div>
            </div>

            <blockquote className="text-xl text-gray-700 italic">
              "{testimonials[current].quote}"
            </blockquote>
          </div>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current
                      ? colors.accent.replace('text-', 'bg-')
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Vai a testimonianza ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}