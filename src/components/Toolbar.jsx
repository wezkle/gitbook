import { useEffect } from 'react'

function Toolbar() {
  useEffect(() => {
    // Inicializa a toolbar 21st.dev se disponível
    if (window.__21ST_DEV_TOOLBAR__) {
      window.__21ST_DEV_TOOLBAR__.init({
        theme: 'dark',
        position: 'bottom-right'
      })
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex flex-col gap-2">
        {/* Quick Actions Toolbar */}
        <div className="backdrop-blur-md bg-black/80 border border-blue-500/30 rounded-lg p-3 shadow-2xl">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-110 transition-all"
              title="Voltar ao topo"
            >
              <span className="text-xl">⬆️</span>
            </button>
            
            <button 
              onClick={() => window.location.reload()}
              className="group relative p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-110 transition-all"
              title="Recarregar"
            >
              <span className="text-xl">🔄</span>
            </button>
            
            <a 
              href="#aplicar"
              className="group relative p-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 hover:scale-110 transition-all"
              title="Aplicar agora"
            >
              <span className="text-xl">🚨</span>
            </a>
            
            <button 
              onClick={() => {
                const currentTheme = document.documentElement.classList.contains('light-mode')
                document.documentElement.classList.toggle('light-mode')
              }}
              className="group relative p-3 rounded-lg bg-gradient-to-r from-yellow-600 to-orange-600 hover:scale-110 transition-all"
              title="Alternar tema"
            >
              <span className="text-xl">💡</span>
            </button>

            <button 
              onClick={() => {
                const stats = document.getElementById('stats')
                if (stats) stats.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative p-3 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 hover:scale-110 transition-all"
              title="Estatísticas"
            >
              <span className="text-xl">📊</span>
            </button>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="backdrop-blur-md bg-black/80 border border-green-500/30 rounded-lg px-4 py-2 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 font-semibold">SERVIDOR ONLINE</span>
          </div>
        </div>

        {/* Players Online Counter */}
        <div className="backdrop-blur-md bg-black/80 border border-blue-500/30 rounded-lg px-4 py-2 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xl">👥</span>
            <div className="text-xs">
              <div className="text-blue-400 font-bold">150 Players</div>
              <div className="text-gray-400">Online agora</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar

