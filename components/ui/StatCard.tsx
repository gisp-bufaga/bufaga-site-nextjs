import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  iconColor?: string
  iconBgColor?: string
}

export default function StatCard({
  icon: Icon,
  value,
  label,
  iconColor = 'text-red-500',
  iconBgColor = 'bg-red-50 group-hover:bg-red-100',
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      {/* Icon */}
      <div
        className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-6 transition-colors`}
      >
        <Icon className={`${iconColor} w-7 h-7`} />
      </div>

      {/* Value */}
      <div className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">
        {value}
      </div>

      {/* Label */}
      <div className="text-slate-500 font-medium">{label}</div>
    </div>
  )
}
