import Link from 'next/link'
import Image from 'next/image'
import { FileText } from 'lucide-react'

interface HeroProps {
  badge?: string
  title?: string
  titleAccent?: string
  subtitle?: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string; icon?: boolean }
  backgroundImage?: string
}

export default function Hero({
  badge = 'Clean Air Technology',
  title = 'Removing pollution',
  titleAccent = 'Restoring life.',
  subtitle = "Trasforma le sfide ambientali in opportunità per la tua azienda e dimostra la tua sostenibilità con dati concreti.",
  primaryCTA = { text: 'Prenota una call', href: '#contact' },
  secondaryCTA = { text: 'Business Case', href: '/business-case', icon: true },
  backgroundImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCylqFvfXFtPr4QcdnHWGg8VWDApZnWOW4EV8TKrbAoXL8NBmyQBJlxUb3Lz-IDzSd9fubDjyr4djKfeIKBbKEHIqOT5V63QmSsffnAa2SFrdFVNwU5CzceXe47S7x33ExrZ_ppratKIrVqB_rwJzTCWUJj8JEaAI8zupyQotJYy17_IX7hRxPe33-5TgiMwLIAUVrAp4NLlx1fdx47EioVtzr79lxFu3AJpv7pd-bD1nZml_lZkG4-4mtfBWqAu0Bf3LJtbsIaumc',
}: HeroProps) {
  return (
    <section className="relative bg-slate-900 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        {badge && (
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-blue-400">{titleAccent}</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="px-8 py-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-xl shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {primaryCTA.text}
          </Link>

          <Link
            href={secondaryCTA.href}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {secondaryCTA.icon && <FileText className="w-5 h-5" />}
            {secondaryCTA.text}
          </Link>
        </div>
      </div>
    </section>
  )
}
