function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-lg shadow">
                <span className="text-blue-900 text-2xl font-bold">DHPP</span>
              </div>
              <div className="text-white">
                <div className="text-xs font-light uppercase">Polícia Civil do Estado de São Paulo</div>
                <div className="text-base lg:text-lg font-bold">Departamento de Homicídios e Proteção à Pessoa</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <a href="#sobre" className="text-white hover:text-yellow-300 transition font-medium text-sm lg:text-base">Sobre</a>
              <a href="#atuacao" className="text-white hover:text-yellow-300 transition font-medium text-sm lg:text-base">Atuação</a>
              <a href="#denuncie" className="text-white hover:text-yellow-300 transition font-medium text-sm lg:text-base">Denuncie</a>
              <a href="#contato" className="text-white hover:text-yellow-300 transition font-medium text-sm lg:text-base">Contato</a>
              <a href="tel:190" className="bg-red-600 text-white px-6 py-2 rounded font-bold hover:bg-red-700 transition shadow-lg">
                🚨 190
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Protegendo Vidas,
              <span className="block text-yellow-400">Buscando Justiça</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              O DHPP da Polícia Civil de São Paulo atua na investigação de crimes dolosos contra a vida 
              e na proteção de pessoas ameaçadas, trabalhando incansavelmente pela segurança do cidadão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#denuncie" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-xl">
                Fazer uma Denúncia
              </a>
              <a href="#contato" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition">
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alerta Importante */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-bold">
            ⚠️ Em caso de emergência, ligue imediatamente para <a href="tel:190" className="underline hover:text-yellow-300">190</a> (Polícia Militar)
          </p>
        </div>
      </section>

      {/* Sobre o DHPP */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Sobre o DHPP
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-8 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                O <strong>Departamento Estadual de Homicídios e de Proteção à Pessoa (DHPP)</strong> da Polícia Civil de São Paulo 
                é o órgão responsável por investigar crimes dolosos contra a vida, como homicídios, tentativas de homicídio e latrocínios.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Subordinado à Delegacia-Geral da Polícia Civil, o departamento conta com equipes especializadas, peritos e 
              investigadores que utilizam recursos tecnológicos e métodos avançados de investigação disponíveis na 
              <strong> Brasilândia</strong> para esclarecer casos complexos.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Além de apurar mortes violentas, o DHPP também atua na <strong>proteção de pessoas ameaçadas</strong> e na 
              coordenação de operações conjuntas com outras unidades policiais. Sua estrutura é voltada para garantir 
              eficiência, precisão e agilidade na coleta de provas e na identificação de autores de crimes, contribuindo 
              diretamente para a <strong>redução da impunidade</strong> e o fortalecimento da segurança pública no estado.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Atendimento Contínuo</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Compromisso com Justiça</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">SP</div>
                <div className="text-gray-600">Todo o Estado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="atuacao" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Homicídios</h3>
              <p className="text-gray-600">
                Investigação completa de casos de homicídio doloso com uso de técnicas avançadas de perícia e investigação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Tentativa de Homicídio</h3>
              <p className="text-gray-600">
                Apuração de tentativas de homicídio e crimes graves contra a integridade física das vítimas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Latrocínio</h3>
              <p className="text-gray-600">
                Investigação de roubos seguidos de morte, combinando análise patrimonial e de crimes contra a vida.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proteção à Pessoa</h3>
              <p className="text-gray-600">
                Programas de proteção para testemunhas, vítimas e pessoas ameaçadas de morte.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Perícia Criminal</h3>
              <p className="text-gray-600">
                Análise científica de evidências e provas materiais para elucidação dos crimes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Operações Conjuntas</h3>
              <p className="text-gray-600">
                Coordenação com outras unidades policiais para operações complexas e de grande porte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Denunciar */}
      <section id="denuncie" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Como Fazer uma Denúncia
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>

            <div className="bg-blue-800 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Sua denúncia pode salvar vidas</h3>
              <p className="text-lg mb-4">
                Se você possui informações sobre crimes contra a vida ou conhece alguém em situação de ameaça, 
                denuncie. Todas as informações serão tratadas com sigilo e responsabilidade.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white text-gray-900 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-blue-900">📞 Por Telefone</h4>
                <p className="mb-2"><strong>Emergência:</strong> 190 (Polícia Militar)</p>
                <p className="mb-2"><strong>Disque Denúncia:</strong> 181</p>
                <p className="text-sm text-gray-600">Atendimento 24 horas, todos os dias</p>
              </div>

              <div className="bg-white text-gray-900 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-blue-900">🏢 Presencial</h4>
                <p className="mb-2"><strong>DHPP - Brasilândia</strong></p>
                <p className="mb-2">Compareça à unidade mais próxima</p>
                <p className="text-sm text-gray-600">De segunda a sexta, das 9h às 18h</p>
              </div>

              <div className="bg-white text-gray-900 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-blue-900">💻 Online</h4>
                <p className="mb-2">Delegacia Eletrônica da Polícia Civil</p>
                <p className="mb-2"><a href="https://www.delegaciaeletronica.policiacivil.sp.gov.br" className="text-blue-600 underline hover:text-blue-800">www.delegaciaeletronica.sp.gov.br</a></p>
                <p className="text-sm text-gray-600">Disponível 24 horas</p>
              </div>

              <div className="bg-white text-gray-900 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-blue-900">✉️ Por E-mail</h4>
                <p className="mb-2">dhpp.brasilandia@policiacivil.sp.gov.br</p>
                <p className="text-sm text-gray-600">Resposta em até 48 horas úteis</p>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500 text-gray-900 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-2">⚠️ Importante</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Denúncias anônimas são aceitas</li>
                <li>Forneça o máximo de detalhes possível</li>
                <li>Em caso de emergência, ligue 190 imediatamente</li>
                <li>Todas as informações são sigilosas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Contato e Localização
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">DHPP - Brasilândia</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📍</div>
                    <div>
                      <p className="font-bold">Endereço:</p>
                      <p className="text-gray-700">Brasilândia, São Paulo - SP</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📞</div>
                    <div>
                      <p className="font-bold">Telefone:</p>
                      <p className="text-gray-700">Emergência: 190</p>
                      <p className="text-gray-700">Disque Denúncia: 181</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">✉️</div>
                    <div>
                      <p className="font-bold">E-mail:</p>
                      <p className="text-gray-700">dhpp.brasilandia@policiacivil.sp.gov.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🕐</div>
                    <div>
                      <p className="font-bold">Horário de Atendimento:</p>
                      <p className="text-gray-700">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-gray-700">Emergências: 24 horas (ligue 190)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Links Úteis</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.policiacivil.sp.gov.br" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-2">
                      <span>🔗</span>
                      <span>Polícia Civil de São Paulo</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ssp.sp.gov.br" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-2">
                      <span>🔗</span>
                      <span>Secretaria de Segurança Pública</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.delegaciaeletronica.policiacivil.sp.gov.br" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-2">
                      <span>🔗</span>
                      <span>Delegacia Eletrônica</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gov.br/mdh/pt-br" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-2">
                      <span>🔗</span>
                      <span>Ministério dos Direitos Humanos</span>
                    </a>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-300">
                  <h4 className="font-bold mb-2">Ouvidoria</h4>
                  <p className="text-sm text-gray-700">Para elogios, críticas ou sugestões sobre os serviços do DHPP</p>
                  <p className="text-blue-600 mt-2">📞 0800-xxx-xxxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="bg-white p-2 rounded inline-block mb-4">
                <span className="text-blue-900 text-xl font-bold">DHPP</span>
              </div>
              <p className="text-gray-400 text-sm">
                Departamento Estadual de Homicídios e de Proteção à Pessoa
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Polícia Civil do Estado de São Paulo
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Institucional</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#sobre" className="hover:text-white transition">Sobre o DHPP</a></li>
                <li><a href="#atuacao" className="hover:text-white transition">Áreas de Atuação</a></li>
                <li><a href="#" className="hover:text-white transition">Estrutura</a></li>
                <li><a href="#" className="hover:text-white transition">Transparência</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Atendimento</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#denuncie" className="hover:text-white transition">Como Denunciar</a></li>
                <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
                <li><a href="tel:190" className="hover:text-white transition">Emergência 190</a></li>
                <li><a href="tel:181" className="hover:text-white transition">Disque Denúncia 181</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Emergência</h5>
              <div className="space-y-3">
                <a href="tel:190" className="block bg-red-600 text-center py-3 rounded font-bold hover:bg-red-700 transition">
                  🚨 190 - Polícia Militar
                </a>
                <a href="tel:181" className="block bg-yellow-600 text-center py-3 rounded font-bold hover:bg-yellow-700 transition">
                  📞 181 - Disque Denúncia
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 DHPP - Departamento Estadual de Homicídios e de Proteção à Pessoa
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Polícia Civil do Estado de São Paulo | Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
