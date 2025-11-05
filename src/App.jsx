function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600">
      {/* Header */}
      <header className="absolute top-0 w-full py-6 px-8">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            DHPP
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-white hover:text-pink-200 transition">Features</a>
            <a href="#about" className="text-white hover:text-pink-200 transition">Sobre</a>
            <a href="#contact" className="text-white hover:text-pink-200 transition">Contato</a>
          </div>
          <button className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-pink-100 transition transform hover:scale-105">
            Começar
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crie algo
              <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                incrível
              </span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 max-w-lg">
              Transforme suas ideias em realidade com nossas ferramentas modernas e intuitivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-100 transition transform hover:scale-105 shadow-xl">
                Começar Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-700 transition">
                Saiba Mais
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl transform rotate-6 absolute opacity-50 blur-2xl"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-3xl transform -rotate-6 relative shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">Pronto para Decolar</h3>
                  <p className="text-purple-600">Tecnologia de ponta ao seu alcance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Por que escolher a gente?
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Tudo que você precisa em um só lugar
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Super Rápido</h3>
              <p className="text-gray-600">
                Performance otimizada para entregar a melhor experiência possível aos seus usuários.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Design Moderno</h3>
              <p className="text-gray-600">
                Interface elegante e intuitiva que encanta seus clientes desde o primeiro clique.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Seguro</h3>
              <p className="text-gray-600">
                Segurança de nível empresarial para proteger seus dados e dos seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-700 py-16">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-purple-200">Usuários Ativos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-purple-200">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários satisfeitos e leve seu projeto para o próximo nível.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105 shadow-xl">
            Criar Conta Grátis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">DHPP</h4>
              <p className="text-gray-400">Transformando ideias em realidade.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Produto</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                <li><a href="#" className="hover:text-white transition">Documentação</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Empresa</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Suporte</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DHPP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
