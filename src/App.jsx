import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Craft from './components/Craft'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* subtle texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.04),transparent_60%)]" />

      <Navbar />
      <main className="relative pt-16">
        <Hero />
        <Collections />
        <Craft />
        <Footer />
      </main>
    </div>
  )
}

export default App
