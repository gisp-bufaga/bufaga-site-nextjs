'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'

interface ContactFormProps {
  title?: string
  titleHighlight?: string
  subtitle?: string
  submitButtonText?: string
  onSubmit?: (data: FormData) => Promise<void>
}

interface FormData {
  nome: string
  cognome: string
  email: string
}

export default function ContactForm({
  title = "Rimuoviamo l'inquinamento",
  titleHighlight = 'insieme',
  subtitle = 'Compila il form per richiedere maggiori informazioni.',
  submitButtonText = 'Invia richiesta',
  onSubmit,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData: FormData = {
      nome: (e.currentTarget.elements.namedItem('nome') as HTMLInputElement)
        .value,
      cognome: (
        e.currentTarget.elements.namedItem('cognome') as HTMLInputElement
      ).value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement)
        .value,
    }

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        console.log('Form submitted:', formData)
      }
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-12">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Richiesta inviata!
            </h3>
            <p className="text-slate-600">
              Ti contatteremo al più presto per parlare delle tue esigenze.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            {title}{' '}
            <span className="text-primary underline decoration-4 decoration-blue-200 underline-offset-4">
              {titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-slate-600">{subtitle}</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-surface-light p-8 rounded-2xl border border-slate-100 shadow-sm"
        >
          {/* First Row: Nome & Cognome */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-slate-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Mario"
                required
                className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary h-11 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="cognome"
                className="block text-sm font-semibold text-slate-700 mb-1"
              >
                Cognome
              </label>
              <input
                type="text"
                id="cognome"
                name="cognome"
                placeholder="Rossi"
                required
                className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary h-11 px-3"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 mb-1"
            >
              Indirizzo email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="mario.rossi@azienda.it"
              required
              className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-primary focus:ring-primary h-11 px-3"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-white font-bold py-3.5 px-4 rounded-lg hover:bg-blue-900 transition shadow-lg flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Invio in corso...' : submitButtonText}
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
