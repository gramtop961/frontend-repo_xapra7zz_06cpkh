import { useState } from 'react'

export default function Recommend() {
  const [form, setForm] = useState({ industry: '', team_size: 'small', goals: [], processes: [] })
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const toggle = (key, value) => {
    setForm(prev => {
      const arr = new Set(prev[key])
      arr.has(value) ? arr.delete(value) : arr.add(value)
      return { ...prev, [key]: Array.from(arr) }
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      setResults(data)
    } finally {
      setLoading(false)
    }
  }

  const options = {
    goals: [
      { id: 'save_time', label: 'Risparmiare tempo' },
      { id: 'reduce_errors', label: 'Ridurre errori' },
      { id: 'increase_sales', label: 'Aumentare vendite' },
      { id: 'better_visibility', label: 'Migliore visibilità' },
    ],
    processes: [
      { id: 'lead_intake', label: 'Acquisizione lead' },
      { id: 'invoicing', label: 'Fatturazione' },
      { id: 'marketing', label: 'Marketing' },
      { id: 'support', label: 'Supporto' },
      { id: 'hr', label: 'HR' },
      { id: 'inventory', label: 'Magazzino' },
      { id: 'reporting', label: 'Reporting' },
    ]
  }

  return (
    <section id="recommend" className="relative py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-6">Dimmi di te, ti suggerisco l'automazione giusta</h3>
        <form onSubmit={submit} className="rounded-2xl p-6 bg-white/10 border border-white/10 text-white">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-white/70">Settore</label>
              <input value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })} placeholder="Es. e-commerce, SaaS, servizi" className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/70">Dimensione team</label>
              <select value={form.team_size} onChange={e => setForm({ ...form, team_size: e.target.value })} className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                <option value="solo">Solo</option>
                <option value="small">Piccolo</option>
                <option value="medium">Medio</option>
                <option value="enterprise">Grande</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-sm text-white/70 mb-2">Obiettivi</p>
              <div className="flex flex-wrap gap-2">
                {options.goals.map(o => (
                  <button type="button" key={o.id} onClick={() => toggle('goals', o.id)} className={`px-3 py-1.5 rounded-full border ${form.goals.includes(o.id) ? 'bg-fuchsia-500 border-fuchsia-400' : 'bg-black/30 border-white/10'} transition`}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-white/70 mb-2">Processi</p>
              <div className="flex flex-wrap gap-2">
                {options.processes.map(o => (
                  <button type="button" key={o.id} onClick={() => toggle('processes', o.id)} className={`px-3 py-1.5 rounded-full border ${form.processes.includes(o.id) ? 'bg-indigo-500 border-indigo-400' : 'bg-black/30 border-white/10'} transition`}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button disabled={loading} className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold disabled:opacity-60">
              {loading ? 'Elaboro…' : 'Genera suggerimenti'}
            </button>
            <span className="text-white/60 text-sm">Nessun account richiesto. Risposta immediata.</span>
          </div>
        </form>

        {results.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(sol => (
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
