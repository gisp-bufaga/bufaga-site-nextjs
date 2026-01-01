import { Search, Eye, Share2, LucideIcon } from 'lucide-react'

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

interface ValuesProps {
  tagline?: string
  title?: string
  values?: Value[]
}

const defaultValues: Value[] = [
  {
    icon: Search,
    title: 'Semplice',
    description:
      'Installiamo i nostri dispositivi nel tuo ambiente e ti forniamo una dashboard chiara e intuitiva per monitorare la qualità dell\'aria.',
  },
  {
    icon: Eye,
    title: 'Misurabile',
    description:
      'Ogni dato è tracciato e certificato. Potrai quantificare l\'impatto positivo e utilizzare le metriche nei tuoi report di sostenibilità.',
  },
  {
    icon: Share2,
    title: 'Condivisibile',
    description:
      'Condividiamo i dati raccolti con tutti gli stakeholders per inserirli nel report di sostenibilità.',
  },
]

export default function Values({
  tagline = 'I nostri valori',
  title = 'Comunica in modo trasparente, evita il greenwashing',
  values = defaultValues,
}: ValuesProps) {
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
          <p className="mt-4 text-lg text-slate-600">
            Rendicontiamo alle tue persone e comunità in modo chiaro e trasparente, utilizzando dati concreti e certificati.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
