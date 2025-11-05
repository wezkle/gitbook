import { motion } from 'framer-motion'
import { X } from 'lucide-react'

function FloatingCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient = "from-blue-600 to-purple-600",
  onClose,
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ delay, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`backdrop-blur-xl bg-gradient-to-br ${gradient} border border-white/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group cursor-pointer`}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Close Button */}
      {onClose && (
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-colors z-10"
        >
          <X className="w-4 h-4 text-white" />
        </motion.button>
      )}

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start space-x-4">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
            className="bg-white/20 p-4 rounded-xl backdrop-blur-sm"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: [-200, 400] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 2 }}
      />
    </motion.div>
  )
}

export default FloatingCard

