import { useEffect, useState } from 'react'

export default function Solutions() {
  const [solutions, setSolutions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/api/solutions`).then(r => r.json()).then(setSolutions).finally(() => setLoading(false))
  }, [])

  return (
    <section id="solutions" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-8">Soluzioni pronte</h3>
        {loading ? (
          <p className="text-white/70">Caricamento…</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(sol => (
              <div key={sol.id} className="rounded-2xl p-6 bg-white/10 border border-white/10 text-white">
                <p className="text-xs uppercase tracking-wider text-white/60">{sol.category}</p>
                <h4 className="text-xl font-semibold mt-1">{sol.title}</h4>
                <p className="text-white/70 mt-2 text-sm">{sol.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sol.tools.map(t => (
                    <span key={t} className="text-xs bg-black/30 border border-white/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-white/60">Complessità: {sol.complexity}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
