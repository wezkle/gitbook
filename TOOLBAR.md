# 🛠️ Toolbar Customizada - DHPP RP

## 📋 Sobre

Toolbar flutuante com quick actions e informações em tempo real para o site do DHPP.

## ✨ Features

### Botões de Ação Rápida
- **⬆️ Voltar ao Topo** - Scroll suave para o início da página
- **🔄 Recarregar** - Atualiza a página
- **🚨 Aplicar** - Navega direto para o formulário de aplicação
- **💡 Tema** - Alterna entre modo claro/escuro
- **📊 Stats** - Scroll para as estatísticas

### Indicadores
- **🟢 Status do Servidor** - Mostra se o servidor está online (animação pulsante)
- **👥 Players Online** - Contador de jogadores ativos (150 players)

## 🎨 Design

- Backdrop blur com glassmorphism
- Bordas neon (azul, verde)
- Hover effects com scale
- Gradientes vibrantes em cada botão
- Posição fixa no canto inferior direito
- Z-index alto para ficar sempre visível

## 🔧 Configuração

### Instalação
```bash
npm install -D @21st-extension/toolbar
```

### Uso no Componente
```jsx
import Toolbar from './components/Toolbar'

function App() {
  return (
    <div>
      <Toolbar />
      {/* Resto do conteúdo */}
    </div>
  )
}
```

## 🎯 Customização

Para modificar a toolbar, edite `src/components/Toolbar.jsx`:

### Adicionar Novo Botão
```jsx
<button 
  onClick={() => {/* sua ação */}}
  className="group relative p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-110 transition-all"
  title="Descrição"
>
  <span className="text-xl">🎯</span>
</button>
```

### Mudar Posição
Altere as classes no div principal:
```jsx
// Canto superior direito
<div className="fixed top-4 right-4 z-50">

// Canto inferior esquerdo
<div className="fixed bottom-4 left-4 z-50">

// Centro inferior
<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
```

### Alterar Players Count
Modifique a parte do contador:
```jsx
<div className="text-blue-400 font-bold">150 Players</div>
```

## 🚀 Recursos Avançados

### Integração com API
Para dados reais de players online:
```jsx
const [playersOnline, setPlayersOnline] = useState(0)

useEffect(() => {
  // Fetch da API do servidor
  fetch('https://api.seuservidor.com/status')
    .then(res => res.json())
    .then(data => setPlayersOnline(data.players))
}, [])
```

### Tema Persistente
Para salvar a preferência de tema:
```jsx
onClick={() => {
  const newTheme = !isDark
  setIsDark(newTheme)
  localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  document.documentElement.classList.toggle('light-mode')
}}
```

## 📱 Responsividade

A toolbar se adapta automaticamente em dispositivos móveis. Para ocultar em telas pequenas:
```jsx
<div className="hidden md:block fixed bottom-4 right-4 z-50">
```

## 🎨 Temas de Cores

### Esquema Atual
- **Azul/Roxo**: Ações principais
- **Vermelho/Laranja**: Ações urgentes (aplicar)
- **Verde/Azul**: Informações positivas
- **Amarelo/Laranja**: Configurações

### Criar Novo Tema
```jsx
// Tema Neon Cyberpunk
className="bg-gradient-to-r from-cyan-600 to-pink-600"

// Tema Militar
className="bg-gradient-to-r from-green-700 to-olive-700"

// Tema Polícia
className="bg-gradient-to-r from-blue-800 to-blue-900"
```

## 🐛 Troubleshooting

### Toolbar não aparece
- Verifique se o componente está importado em App.jsx
- Confira se o z-index é alto o suficiente (z-50)

### Botões não funcionam
- Verifique se os IDs dos elementos existem (#stats, #aplicar)
- Teste as funções onClick no console

### Animações travadas
- Reduza o número de animações simultâneas
- Use `will-change: transform` no CSS

## 📝 To-Do

- [ ] Adicionar mais quick actions
- [ ] Integrar com API real do servidor
- [ ] Modo compacto/expandido
- [ ] Notificações em tempo real
- [ ] Histórico de ações
- [ ] Atalhos de teclado

## 🤝 Contribuindo

Para adicionar novas features na toolbar, edite o arquivo e faça PR!

---

**Desenvolvido para DHPP RP** 🚔💨

