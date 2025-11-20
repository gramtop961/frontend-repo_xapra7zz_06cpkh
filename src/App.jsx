import Header from './components/Header'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Recommend from './components/Recommend'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B10] to-[#0F0F18] relative">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_0%_0%,rgba(217,70,239,0.12),transparent),radial-gradient(1000px_500px_at_100%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative">
        <Header />
        <Hero />
        <Solutions />
        <Recommend />
        <Footer />
      </div>
    </div>
  )
}

export default App
