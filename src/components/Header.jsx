import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative z-10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-fuchsia-300">Automation Studio</p>
            <h1 className="text-2xl font-bold text-white tracking-tight">RARE</h1>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#solutions" className="text-white/80 hover:text-white transition-colors">Soluzioni</a>
          <a href="#recommend" className="text-white/80 hover:text-white transition-colors">Raccomandazioni</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contatti</a>
        </nav>
      </div>
    </header>
  )
}
