import { Download, PieChart } from 'lucide-react'

interface SustainabilityProps {
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export default function Sustainability({
  title = 'Contribuiamo al tuo Report di Sostenibilità',
  description = "Contribuiamo attivamente al tuo report di sostenibilità fornendo dati tangibili e concreti riguardo l'inquinamento rimosso, pronti per essere inseriti nel tuo bilancio annuale.",
  ctaText = 'Scarica esempio report',
  ctaHref = '/report-example.pdf',
}: SustainabilityProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 border border-blue-100">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              {description}
            </p>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl hover:bg-blue-900 transition shadow-lg font-semibold"
            >
              <Download className="w-5 h-5" />
              {ctaText}
            </a>
          </div>

          {/* Right: Report Mockup */}
          <div className="flex-1 relative flex justify-center w-full max-w-sm">
            {/* Main Report Card */}
            <div className="bg-secondary text-white rounded-lg p-6 w-56 h-72 shadow-2xl relative z-10 flex flex-col justify-between transform rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="text-xs opacity-70 tracking-widest">
                BUFAGA SRL
              </div>
              <div className="text-center font-bold text-xl mt-4">
                BILANCIO DI
                <br />
                SOSTENIBILITÀ
              </div>
              <div className="mt-auto">
                <div className="h-16 w-full bg-gradient-to-t from-blue-500/50 to-transparent rounded-b-lg" />
              </div>
            </div>

            {/* Floating Chart Icon */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg z-20 flex items-center gap-2 animate-bounce">
              <PieChart className="w-6 h-6 text-blue-500" />
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute bottom-8 -left-8 bg-white p-3 rounded-lg shadow-lg z-20 flex items-center gap-2 text-xs font-bold text-slate-800">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Rimuoviamo Inquinamento - 95%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
