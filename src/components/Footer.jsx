export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
        <p>© {new Date().getFullYear()} RARE — Soluzioni di automazione</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Termini</a>
          <a href="/test" className="hover:text-white">Stato</a>
        </div>
      </div>
    </footer>
  )
}
