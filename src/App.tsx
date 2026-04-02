import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhyJoin } from './components/WhyJoin'
import { ApplicationForm } from './components/ApplicationForm'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen animated-bg font-sans selection:bg-amber-400 selection:text-slate-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="relative">
          {/* Subtle separator/gradient between sections */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent opacity-50" />
          <ApplicationForm />
        </div>
        
        <WhyJoin />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
