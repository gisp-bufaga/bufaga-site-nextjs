'use client'

import { useState, FormEvent } from 'react'

interface FormProps {
  title: string
  description?: string
  fields: string[]
  submitText?: string
  successMessage?: string
  trackingId?: string
  theme?: 'corporate' | 'sustainability' | 'energy'
}

const themeColors = {
  corporate: {
    border: 'border-blue-600',
    button: 'bg-blue-600 hover:bg-blue-700',
    focus: 'focus:border-blue-600 focus:ring-blue-600',
  },
  sustainability: {
    border: 'border-green-600',
    button: 'bg-green-600 hover:bg-green-700',
    focus: 'focus:border-green-600 focus:ring-green-600',
  },
  energy: {
    border: 'border-orange-600',
    button: 'bg-orange-600 hover:bg-orange-700',
    focus: 'focus:border-orange-600 focus:ring-orange-600',
  },
}

const fieldLabels: Record<string, string> = {
  name: 'Nome e Cognome',
  email: 'Email',
  phone: 'Telefono',
  company: 'Azienda',
  message: 'Messaggio',
  sector: 'Settore',
}

export default function Form({
  title,
  description,
  fields,
  submitText = 'Invia',
  successMessage = 'Grazie per averci contattato!',
  trackingId,
  theme = 'corporate',
}: FormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const colors = themeColors[theme]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: trackingId || title,
        form_fields: fields.join(','),
      })
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would send data to your backend
    console.log('Form submitted:', { ...formData, trackingId })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold mb-2 text-green-900">
          Richiesta Inviata!
        </h3>
        <p className="text-green-700">{successMessage}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {description && <p className="text-gray-600 mb-6">{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => {
          if (field === 'message') {
            return (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {fieldLabels[field]}
                </label>
                <textarea
                  id={field}
                  name={field}
                  rows={4}
                  required
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${colors.focus} focus:ring-2 focus:ring-opacity-50`}
                />
              </div>
            )
          }

          if (field === 'sector') {
            return (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {fieldLabels[field]}
                </label>
                <select
                  id={field}
                  name={field}
                  required
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${colors.focus} focus:ring-2 focus:ring-opacity-50`}
                >
                  <option value="">Seleziona...</option>
                  <option value="industria">Industria</option>
                  <option value="logistica">Logistica</option>
                  <option value="parcheggi">Parcheggi</option>
                  <option value="trasporti">Trasporti Pubblici</option>
                  <option value="altro">Altro</option>
                </select>
              </div>
            )
          }

          return (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {fieldLabels[field]}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                id={field}
                name={field}
                required
                onChange={handleChange}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg ${colors.focus} focus:ring-2 focus:ring-opacity-50`}
              />
            </div>
          )
        })}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${colors.button} text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? 'Invio in corso...' : submitText}
        </button>
      </form>
    </div>
  )
}
