import StatCard from '../ui/StatCard'
import { Globe, Euro, MapPin, LucideIcon } from 'lucide-react'

interface Stat {
  icon: LucideIcon
  value: string
  label: string
  iconColor?: string
  iconBgColor?: string
}

interface ProblemProps {
  tagline?: string
  title?: string
  description?: string
  stats?: Stat[]
}

const defaultStats: Stat[] = [
  {
    icon: Globe,
    value: '7M+',
    label: 'Morti premature globali',
    iconColor: 'text-red-500',
    iconBgColor: 'bg-red-50 group-hover:bg-red-100',
  },
  {
    icon: Euro,
    value: '750k',
    label: 'Morti premature in Europa',
    iconColor: 'text-orange-500',
    iconBgColor: 'bg-orange-50 group-hover:bg-orange-100',
  },
  {
    icon: MapPin,
    value: '60k',
    label: 'Morti premature in Italia',
    iconColor: 'text-blue-500',
    iconBgColor: 'bg-blue-50 group-hover:bg-blue-100',
  },
]

export default function Problem({
  tagline = 'Il problema',
  title = "Un'emergenza che non possiamo ignorare",
  description = "L'inquinamento atmosferico è il principale rischio ambientale per la salute umana. I numeri parlano chiaro.",
  stats = defaultStats,
}: ProblemProps) {
  return (
    <section className="py-24 bg-surface-light">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              iconColor={stat.iconColor}
              iconBgColor={stat.iconBgColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
