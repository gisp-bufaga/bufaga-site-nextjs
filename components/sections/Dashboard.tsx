import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

interface DashboardProps {
  tagline?: string
  title?: string
  description?: string
  features?: string[]
  dashboardImage?: string
  deviceImage?: string
}

export default function Dashboard({
  tagline = 'La piattaforma',
  title = 'Dashboard per visualizzazione dati',
  description = 'Accedi in tempo reale ai dati raccolti dai tuoi dispositivi per visualizzare i trend e l\'impatto positivo generato.',
  features = [
    'Monitoraggio in Real-Time',
    'Report automatici',
    'Visualizzazione dati',
  ],
  dashboardImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  deviceImage = 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80',
}: DashboardProps) {
  return (
    <section className="py-24 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
              {tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Preview */}
          <div className="relative">
            {/* Main Dashboard Screen */}
            <div className="relative bg-slate-800 rounded-lg p-4 shadow-2xl border border-slate-700">
              <div className="relative h-80 rounded overflow-hidden">
                <Image
                  src={dashboardImage}
                  alt="Dashboard preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Device */}
            <div className="absolute -bottom-8 -left-8 w-32 h-48 bg-white rounded-lg shadow-xl p-3 border border-slate-200">
              <div className="relative h-full rounded overflow-hidden">
                <Image
                  src={deviceImage}
                  alt="Mobile device"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
