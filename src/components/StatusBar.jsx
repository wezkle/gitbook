import { motion } from 'framer-motion'
import { 
  Wifi, 
  Clock, 
  MapPin, 
  Users2, 
  TrendingUp,
  Zap
} from 'lucide-react'

function StatusBar() {
  const stats = [
    { icon: Users2, value: '150+', label: 'Agentes', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, value: '24/7', label: 'Operações', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, value: '#1', label: 'Ranking', color: 'from-green-500 to-emerald-500' },
    { icon: MapPin, value: 'SP', label: 'Servidor', color: 'from-orange-500 to-red-500' },
  ]

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex items-center space-x-8">
          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-3 h-3 bg-green-500 rounded-full"
            />
            <div className="flex items-center space-x-1">
              <Wifi className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">ONLINE</span>
            </div>
          </div>

          {/* Separator */}
          <div className="w-px h-6 bg-white/10" />

          {/* Stats */}
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${stat.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{stat.value}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                </div>
              </motion.div>
            )
          })}

          {/* Separator */}
          <div className="w-px h-6 bg-white/10" />

          {/* Time */}
          <div className="flex items-center space-x-2 text-gray-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">
              {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default StatusBar

