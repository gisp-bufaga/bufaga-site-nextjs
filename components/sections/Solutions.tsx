import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface SolutionsProps {
  tagline?: string
  title?: string
  description?: string
  features?: Feature[]
  ctaText?: string
  ctaHref?: string
  image?: string
}

const defaultFeatures: Feature[] = [
  {
    icon: CheckCircle2,
    title: 'Monitoraggio e Trasparenza',
    description:
      'Misura in tempo reale la qualità dell\'aria e la quantità di inquinamento rimosso, con dati certificati.',
  },
  {
    icon: CheckCircle2,
    title: 'Tecnologia dati',
    description:
      'Dashboard intuitiva per visualizzare trend, report e performance dei tuoi sistemi di purificazione.',
  },
  {
    icon: CheckCircle2,
    title: 'Sostenibilità e Accessibilità',
    description:
      'Contribuisci attivamente al tuo report ESG con dati concreti e verificabili da condividere con stakeholder.',
  },
]

export default function Solutions({
  tagline = 'Le nostre soluzioni',
  title = 'È tempo di cambiare aria',
  description = 'Purificatrici smart che abbattono inquinamento e ti forniscono dati per il tuo bilancio di sostenibilità.',
  features = defaultFeatures,
  ctaText = 'Scopri il progetto',
  ctaHref = '#contact',
  image = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
}: SolutionsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">
            {tagline}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{description}</p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-blue-200">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-900 transition shadow-lg"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right: Image/Device Mockup */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt="E-KONALA Device"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
