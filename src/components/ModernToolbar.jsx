import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  Users, 
  Radio, 
  FileText, 
  Trophy, 
  Settings, 
  Bell, 
  MessageSquare,
  ChevronUp,
  Star,
  Activity
} from 'lucide-react'
import { useState } from 'react'

function ModernToolbar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [notifications, setNotifications] = useState(3)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 space-y-2"
          >
            {/* Quick Access Cards */}
            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-600/90 to-purple-600/90 border border-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Proteção Ativa</div>
                  <div className="text-blue-100 text-sm">Sistema Online</div>
                </div>
                <Activity className="w-5 h-5 text-green-400 ml-auto animate-pulse" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              className="backdrop-blur-xl bg-gradient-to-r from-purple-600/90 to-pink-600/90 border border-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">150 Agentes</div>
                  <div className="text-purple-100 text-sm">Online Agora</div>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              className="backdrop-blur-xl bg-gradient-to-r from-red-600/90 to-orange-600/90 border border-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-xl relative">
                  <Radio className="w-6 h-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                    {notifications}
                  </div>
                </div>
                <div>
                  <div className="text-white font-bold">Rádio Ativo</div>
                  <div className="text-orange-100 text-sm">{notifications} Chamados</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: -5 }}
              className="backdrop-blur-xl bg-gradient-to-r from-green-600/90 to-blue-600/90 border border-white/20 rounded-2xl p-4 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Ranking #1</div>
                  <div className="text-green-100 text-sm">Melhor Departamento</div>
                </div>
                <Star className="w-5 h-5 text-yellow-300 ml-auto" fill="currentColor" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative backdrop-blur-xl bg-gradient-to-br from-blue-600 to-purple-600 p-5 rounded-full shadow-2xl border-2 border-white/30 group"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ChevronUp className="w-8 h-8 text-white" />
        </motion.div>
        
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-blue-500/50 animate-ping opacity-75"></div>
        
        {/* Notification Badge */}
        {notifications > 0 && !isExpanded && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white"
          >
            {notifications}
          </motion.div>
        )}
      </motion.button>

      {/* Side Actions */}
      <div className="absolute right-24 bottom-0 flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="backdrop-blur-xl bg-yellow-600/90 p-4 rounded-full shadow-xl border border-white/20"
          title="Mensagens"
        >
          <MessageSquare className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="backdrop-blur-xl bg-gray-700/90 p-4 rounded-full shadow-xl border border-white/20"
          title="Configurações"
        >
          <Settings className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="backdrop-blur-xl bg-indigo-600/90 p-4 rounded-full shadow-xl border border-white/20 relative"
          title="Notificações"
        >
          <Bell className="w-5 h-5 text-white" />
          {notifications > 0 && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          )}
        </motion.button>
      </div>
    </div>
  )
}

export default ModernToolbar

