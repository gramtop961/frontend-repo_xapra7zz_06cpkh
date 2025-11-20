export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(217,70,239,0.25),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(79,70,229,0.25),transparent)]" />
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Soluzioni di automazione su misura per crescere più velocemente
            </h2>
            <p className="mt-4 text-lg text-white/70">
              RARE analizza i tuoi processi e propone flussi automatici pronti da implementare.
              Meno compiti ripetitivi, più impatto sul tuo business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#recommend" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:scale-[1.01] transition">
                Ottieni raccomandazioni
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition">
                Esplora soluzioni
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3 gap-3 p-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-black/20 border border-white/5" />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white/80 text-sm">
                Esempio di flusso: lead → CRM → email drip → fatturazione
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
