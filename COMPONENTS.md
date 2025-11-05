# 🎨 Biblioteca de Componentes Modernos - DHPP RP

Componentes criados com **Lucide Icons** e **Framer Motion** para o site de polícia RP.

## 📦 Componentes Disponíveis

### 1. 🛠️ ModernToolbar

Toolbar flutuante expansível com animações e indicadores em tempo real.

**Features:**
- ✨ Expansão animada com Spring physics
- 🎯 4 Quick Access Cards com gradientes
- 🔔 Badge de notificações
- 💫 Animações de hover e tap
- 📊 Indicadores de status ao vivo
- ⚡ Botões laterais (Mensagens, Configurações, Notificações)

**Uso:**
```jsx
import ModernToolbar from './components/ModernToolbar'

<ModernToolbar />
```

**Cards inclusos:**
- 🛡️ **Proteção Ativa** - Sistema Online
- 👥 **150 Agentes** - Online Agora
- 📡 **Rádio Ativo** - Chamados pendentes
- 🏆 **Ranking #1** - Melhor Departamento

**Customização:**
```jsx
// Mudar número de notificações
const [notifications, setNotifications] = useState(3)

// Adicionar novo card
<motion.div whileHover={{ scale: 1.05, x: -5 }}>
  {/* seu conteúdo */}
</motion.div>
```

---

### 2. 📊 StatusBar

Barra de status no topo com informações em tempo real.

**Features:**
- 🟢 Indicador de status online com pulse
- 📈 4 stats com ícones e cores
- 🕐 Relógio ao vivo
- 💫 Animação de entrada suave
- 🎨 Glassmorphism design

**Uso:**
```jsx
import StatusBar from './components/StatusBar'

<StatusBar />
```

**Stats inclusos:**
- 👥 **150+ Agentes** (azul/ciano)
- ⚡ **24/7 Operações** (roxo/rosa)
- 📈 **#1 Ranking** (verde/esmeralda)
- 📍 **SP Servidor** (laranja/vermelho)

**Customização:**
```jsx
const stats = [
  { 
    icon: Users2, 
    value: '150+', 
    label: 'Agentes', 
    color: 'from-blue-500 to-cyan-500' 
  },
  // adicione mais...
]
```

---

### 3. 💳 FloatingCard

Card flutuante reutilizável com animações e efeitos.

**Features:**
- 🌟 Entrada animada com spring
- ✨ Shine effect (brilho deslizante)
- 🎯 Hover effects com scale e elevação
- 🎨 Gradientes customizáveis
- ❌ Botão de fechar opcional
- 🔄 Ícone animado

**Uso:**
```jsx
import FloatingCard from './components/FloatingCard'
import { Shield } from 'lucide-react'

<FloatingCard
  icon={Shield}
  title="Título do Card"
  description="Descrição aqui"
  gradient="from-blue-600 to-purple-600"
  onClose={() => console.log('Fechou')}
  delay={0.2}
/>
```

**Props:**
- `icon` - Componente de ícone do Lucide
- `title` - Título do card
- `description` - Descrição/texto
- `gradient` - Classes Tailwind de gradiente
- `onClose` - Função callback (opcional)
- `delay` - Delay da animação em segundos

**Gradientes Disponíveis:**
```jsx
// Polícia
gradient="from-blue-600 to-purple-600"

// Emergência
gradient="from-red-600 to-orange-600"

// Sucesso
gradient="from-green-600 to-emerald-600"

// Aviso
gradient="from-yellow-600 to-orange-600"

// Escuro
gradient="from-gray-700 to-gray-900"
```

---

## 🎯 Ícones Disponíveis (Lucide React)

### Polícia & Segurança
```jsx
import { 
  Shield,         // Escudo/Proteção
  Radio,          // Rádio
  Users,          // Usuários
  User,           // Usuário único
  UserCheck,      // Usuário verificado
  AlertTriangle,  // Alerta
  Bell,           // Notificação
  Lock,           // Bloqueio
  Unlock,         // Desbloqueado
} from 'lucide-react'
```

### Navegação & UI
```jsx
import {
  ChevronUp,      // Seta pra cima
  ChevronDown,    // Seta pra baixo
  Menu,           // Menu hamburguer
  X,              // Fechar
  Settings,       // Configurações
  Search,         // Buscar
  Filter,         // Filtro
  Home,           // Casa
} from 'lucide-react'
```

### Comunicação
```jsx
import {
  MessageSquare,  // Mensagem
  Phone,          // Telefone
  Mail,           // Email
  Send,           // Enviar
  Mic,            // Microfone
  Video,          // Vídeo
} from 'lucide-react'
```

### Status & Indicadores
```jsx
import {
  Activity,       // Atividade
  TrendingUp,     // Subindo
  TrendingDown,   // Descendo
  CheckCircle,    // Check
  XCircle,        // X
  AlertCircle,    // Alerta circular
  Info,           // Informação
  Zap,            // Raio
} from 'lucide-react'
```

### Localização & Tempo
```jsx
import {
  MapPin,         // Pin no mapa
  Map,            // Mapa
  Clock,          // Relógio
  Calendar,       // Calendário
  Compass,        // Bússola
  Navigation,     // Navegação
} from 'lucide-react'
```

### Arquivos & Dados
```jsx
import {
  FileText,       // Arquivo texto
  File,           // Arquivo
  Folder,         // Pasta
  Download,       // Download
  Upload,         // Upload
  Database,       // Banco de dados
  Archive,        // Arquivo
} from 'lucide-react'
```

### Redes Sociais
```jsx
import {
  Facebook,       // Facebook
  Twitter,        // Twitter/X
  Instagram,      // Instagram
  Youtube,        // YouTube
  Twitch,         // Twitch
  Github,         // GitHub
} from 'lucide-react'
```

---

## 🎬 Animações Disponíveis (Framer Motion)

### Entrada/Saída Básica
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
/>
```

### Scale & Bounce
```jsx
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: 'spring', stiffness: 200 }}
/>
```

### Slide (Deslizar)
```jsx
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 100, opacity: 0 }}
/>
```

### Hover Effects
```jsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  whileTap={{ scale: 0.95 }}
/>
```

### Pulse (Pulsar)
```jsx
<motion.div
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
/>
```

### Rotate (Girar)
```jsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
/>
```

### Sequência
```jsx
<motion.div
  animate={{
    x: [0, 100, 0],
    y: [0, -50, 0],
  }}
  transition={{ duration: 2 }}
/>
```

---

## 🎨 Paleta de Cores

### Gradientes do Tema
```css
/* Azul/Roxo - Principal */
from-blue-600 to-purple-600

/* Roxo/Rosa - Secundário */
from-purple-600 to-pink-600

/* Vermelho/Laranja - Urgente */
from-red-600 to-orange-600

/* Verde/Azul - Sucesso */
from-green-600 to-blue-600

/* Amarelo/Laranja - Aviso */
from-yellow-600 to-orange-600

/* Ciano/Azul - Info */
from-cyan-500 to-blue-500

/* Verde/Esmeralda - Ativo */
from-green-500 to-emerald-500
```

---

## 💡 Exemplos de Uso

### Exemplo 1: Notificação Animada
```jsx
import { motion } from 'framer-motion'
import { Bell } from 'lucide-react'

<motion.div
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl"
>
  <Bell className="w-6 h-6" />
  <p>Nova notificação!</p>
</motion.div>
```

### Exemplo 2: Card de Status
```jsx
import FloatingCard from './components/FloatingCard'
import { Users } from 'lucide-react'

<FloatingCard
  icon={Users}
  title="150 Agentes Online"
  description="O departamento está operando em capacidade máxima"
  gradient="from-blue-600 to-purple-600"
/>
```

### Exemplo 3: Botão Interativo
```jsx
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded-xl"
>
  <Zap className="inline w-5 h-5 mr-2" />
  Ação Rápida
</motion.button>
```

---

## 🚀 Próximos Componentes

- [ ] Modal animado
- [ ] Notificação toast
- [ ] Progress bar
- [ ] Loading spinner
- [ ] Dropdown menu
- [ ] Tabs animadas
- [ ] Carousel
- [ ] Search bar

---

**Desenvolvido com ❤️ para DHPP RP** 🚔💨

