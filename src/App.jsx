import { useState } from 'react'
import Toolbar from './components/Toolbar'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-red-950"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="backdrop-blur-md bg-black/30 border-b border-blue-500/30 sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-lg transform hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-black">DHPP</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-blue-400 uppercase tracking-wider">Servidor RP</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Departamento de Polícia
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-1">
                {['Home', 'Cursos', 'Atuação', 'Hierarquia', 'Recrutamento', 'Galeria'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveTab(item.toLowerCase())}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === item.toLowerCase()
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/50'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <a href="#aplicar" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <button className="relative bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded-lg font-bold shadow-xl transform group-hover:scale-105 transition-all">
                  🚨 APLICAR AGORA
                </button>
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        {activeTab === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="text-center max-w-5xl">
              <div className="mb-8 animate-fade-in">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                  🎮 Servidor de Roleplay
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight animate-slide-up">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BEM-VINDO AO
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">DHPP</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in">
                O departamento mais elite do servidor. Junte-se aos melhores policiais 
                e viva experiências únicas de roleplay de alta qualidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
                <a href="#aplicar" className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl transform group-hover:scale-105 transition-all">
                    🎯 COMEÇAR AGORA
                  </button>
                </a>
                
                <button onClick={() => setActiveTab('atuação')} className="backdrop-blur-md bg-white/10 border-2 border-white/30 px-10 py-5 rounded-xl font-bold text-xl hover:bg-white/20 transition-all transform hover:scale-105">
                  📋 VER ATUAÇÃO
                </button>
              </div>

              <div id="stats" className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    150+
                  </div>
                  <div className="text-gray-400">Membros Ativos</div>
                </div>
                
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-gray-400">Operações</div>
                </div>
                
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                    #1
                  </div>
                  <div className="text-gray-400">no Servidor</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Cursos Section */}
        {activeTab === 'cursos' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    CURSOS & TREINAMENTOS
                  </span>
                </h2>
                <p className="text-xl text-gray-400">Capacitação profissional de alto nível</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '🎯', title: 'Academia de Polícia', desc: 'Treinamento básico obrigatório para todos os recrutas', duration: '2 semanas', vagas: 'Abertas' },
                  { icon: '🔫', title: 'Tiro Tático', desc: 'Especialização em combate armado e precisão', duration: '1 semana', vagas: 'Limitadas' },
                  { icon: '🚗', title: 'Pilotagem Avançada', desc: 'Técnicas de perseguição e direção defensiva', duration: '1 semana', vagas: 'Abertas' },
                  { icon: '🎖️', title: 'Operações Especiais', desc: 'Treinamento SWAT para situações críticas', duration: '3 semanas', vagas: 'Fechadas' },
                  { icon: '🔍', title: 'Investigação Criminal', desc: 'Métodos de investigação e coleta de provas', duration: '2 semanas', vagas: 'Abertas' },
                  { icon: '⚖️', title: 'Legislação e Direito', desc: 'Conhecimento das leis do servidor', duration: '1 semana', vagas: 'Abertas' },
                ].map((curso, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all transform hover:scale-105">
                      <div className="text-6xl mb-4">{curso.icon}</div>
                      <h3 className="text-2xl font-bold mb-3">{curso.title}</h3>
                      <p className="text-gray-400 mb-4">{curso.desc}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-blue-400">⏱️ {curso.duration}</span>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          curso.vagas === 'Abertas' 
                            ? 'bg-green-500/20 text-green-400' 
                            : curso.vagas === 'Limitadas'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {curso.vagas}
                        </span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                        INSCREVER-SE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Atuação Section */}
        {activeTab === 'atuação' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ÁREAS DE ATUAÇÃO
                  </span>
                </h2>
                <p className="text-xl text-gray-400">Especializações e divisões do departamento</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    icon: '🚔', 
                    title: 'Patrulha Ostensiva', 
                    desc: 'Policiamento preventivo nas ruas da cidade',
                    features: ['Rondas 24/7', 'Atendimento de ocorrências', 'Abordagens táticas']
                  },
                  { 
                    icon: '🎯', 
                    title: 'SWAT / BOPE', 
                    desc: 'Operações táticas e situações de alto risco',
                    features: ['Resgates de reféns', 'Neutralização de ameaças', 'Operações especiais']
                  },
                  { 
                    icon: '🔍', 
                    title: 'Investigação', 
                    desc: 'Departamento de investigação criminal',
                    features: ['Crimes graves', 'Operações undercover', 'Inteligência policial']
                  },
                  { 
                    icon: '🚁', 
                    title: 'Suporte Aéreo', 
                    desc: 'Helicópteros para operações táticas',
                    features: ['Perseguições aéreas', 'Reconhecimento', 'Transporte tático']
                  },
                  { 
                    icon: '🚓', 
                    title: 'Trânsito', 
                    desc: 'Fiscalização e controle de tráfego',
                    features: ['Blitzes', 'Controle de velocidade', 'Acidentes de trânsito']
                  },
                  { 
                    icon: '🎖️', 
                    title: 'Comando e Controle', 
                    desc: 'Coordenação de operações e gestão',
                    features: ['Planejamento estratégico', 'Supervisão', 'Recursos humanos']
                  },
                ].map((area, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                      <div className="flex items-start space-x-6">
                        <div className="text-6xl">{area.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold mb-3">{area.title}</h3>
                          <p className="text-gray-400 mb-6">{area.desc}</p>
                          <ul className="space-y-2">
                            {area.features.map((feature, i) => (
                              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                                <span className="text-blue-400">✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Hierarquia Section */}
        {activeTab === 'hierarquia' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-5xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    HIERARQUIA POLICIAL
                  </span>
                </h2>
                <p className="text-xl text-gray-400">Estrutura de comando do departamento</p>
              </div>

              <div className="space-y-4">
                {[
                  { rank: 'Chefe de Polícia', icon: '⭐⭐⭐⭐⭐', color: 'from-yellow-500 to-orange-500' },
                  { rank: 'Superintendente', icon: '⭐⭐⭐⭐', color: 'from-orange-500 to-red-500' },
                  { rank: 'Comandante', icon: '⭐⭐⭐', color: 'from-red-500 to-pink-500' },
                  { rank: 'Capitão', icon: '⭐⭐', color: 'from-purple-500 to-blue-500' },
                  { rank: 'Tenente', icon: '⭐', color: 'from-blue-500 to-cyan-500' },
                  { rank: 'Sargento', icon: '🔷', color: 'from-cyan-500 to-blue-400' },
                  { rank: 'Cabo', icon: '🔹', color: 'from-blue-400 to-blue-300' },
                  { rank: 'Soldado', icon: '🔸', color: 'from-gray-400 to-gray-500' },
                  { rank: 'Recruta', icon: '⚪', color: 'from-gray-500 to-gray-600' },
                ].map((posto, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${posto.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                    <div className="relative backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className={`text-4xl bg-gradient-to-r ${posto.color} p-4 rounded-lg`}>
                          {posto.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{posto.rank}</h3>
                          <p className="text-sm text-gray-400">Nível {9 - index}</p>
                        </div>
                      </div>
                      <div className={`bg-gradient-to-r ${posto.color} px-6 py-2 rounded-full font-bold text-sm`}>
                        {index === 0 ? 'COMANDO' : index < 4 ? 'OFICIAL' : 'PRAÇA'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recrutamento Section */}
        {activeTab === 'recrutamento' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    RECRUTAMENTO ABERTO
                  </span>
                </h2>
                <p className="text-xl text-gray-400">Faça parte da elite policial</p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-2xl">
                <h3 className="text-3xl font-bold mb-8">📋 REQUISITOS</h3>
                
                <div className="space-y-4 mb-10">
                  {[
                    'Mínimo de 18 anos (In-Game)',
                    'Ter microfone funcionando',
                    'Disponibilidade mínima de 20h semanais',
                    'Conhecimento básico das regras do servidor',
                    'Ficha limpa (sem histórico criminal grave)',
                    'Passar no teste psicológico',
                    'Completar a academia de polícia'
                  ].map((req, index) => (
                    <div key={index} className="flex items-center space-x-4 text-lg">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full">
                        <span className="text-white">✓</span>
                      </div>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 p-6 rounded-xl mb-8">
                  <h4 className="text-xl font-bold mb-4">🎯 PROCESSO SELETIVO</h4>
                  <ol className="space-y-3 text-gray-300">
                    <li><strong>1.</strong> Preencher formulário de aplicação</li>
                    <li><strong>2.</strong> Entrevista com oficial recrutador</li>
                    <li><strong>3.</strong> Teste de conhecimento das regras</li>
                    <li><strong>4.</strong> Avaliação psicológica</li>
                    <li><strong>5.</strong> Academia de polícia (2 semanas)</li>
                    <li><strong>6.</strong> Aprovação e integração</li>
                  </ol>
                </div>

                <div className="text-center">
                  <a href="#" className="relative group inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <button className="relative bg-gradient-to-r from-green-600 to-blue-600 px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transform group-hover:scale-105 transition-all">
                      🚨 APLICAR AGORA
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Galeria Section */}
        {activeTab === 'galeria' && (
          <section className="min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl lg:text-6xl font-black mb-4">
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    GALERIA DE MOMENTOS
                  </span>
                </h2>
                <p className="text-xl text-gray-400">Nossas melhores operações e conquistas</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                  <div key={index} className="group relative aspect-video overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
                      <div className="text-center">
                        <div className="text-6xl mb-4">
                          {['🚔', '🚁', '🎖️', '🔫', '🚓', '⚖️', '🎯', '🔍', '👮'][index]}
                        </div>
                        <p className="text-lg font-bold">Operação #{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="backdrop-blur-md bg-black/50 border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-lg">
                    <span className="text-xl font-black">DHPP</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  O departamento mais elite do servidor de roleplay.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition">Home</button></li>
                  <li><button onClick={() => setActiveTab('cursos')} className="hover:text-white transition">Cursos</button></li>
                  <li><button onClick={() => setActiveTab('atuação')} className="hover:text-white transition">Atuação</button></li>
                  <li><button onClick={() => setActiveTab('recrutamento')} className="hover:text-white transition">Recrutamento</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Contato RP</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>📞 190 (In-Game)</li>
                  <li>📧 dhpp@servidor.com</li>
                  <li>💬 Discord</li>
                  <li>🎮 Servidor RP</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Redes Sociais</h4>
                <div className="flex space-x-3">
                  <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">📘</a>
                  <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">🎮</a>
                  <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">💬</a>
                  <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition">📺</a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 DHPP - Departamento de Polícia RP. Todos os direitos reservados.</p>
              <p className="mt-2">Este é um projeto de roleplay fictício</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}

export default App
