import { HiDownload } from 'react-icons/hi'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-100 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-reveal">
          <div className="space-y-4">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm">
              Technology Engineering Students Association
            </h2>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-slate-900">
              Cultivating peak <span className="text-amber-500">Eloquence</span> & Intellect
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-lg leading-relaxed">
              Join TESA Literary and Debating Society. A premier community dedicated to critical thinking, 
              persuasive speaking, and the power of the written word.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#apply" 
              className="px-8 py-4 bg-amber-500 text-white rounded-xl font-bold text-lg hover:bg-amber-600 hover:scale-105 transition-all shadow-lg gold-shadow"
            >
              Join the Society
            </a>
            <a 
              href="/assets/rules.pdf" 
              className="px-8 py-4 border border-slate-200 bg-white text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-2"
              download
            >
              <HiDownload className="text-xl" />
              Download Handbook
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Member" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm font-medium">
              Join <span className="text-slate-900 font-bold">50+</span> active members
            </p>
          </div>
        </div>
        
        <div className="relative animate-reveal" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-linear-to-tr from-amber-100 to-transparent rounded-3xl -rotate-3 scale-105" />
          <div className="relative bg-white p-2 rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <img 
              src="/assets/TESALnD.jpeg" 
              alt="TESA Literary and Debating Society" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl border border-slate-100 shadow-xl hidden lg:block">
            <p className="text-amber-500 font-bold text-3xl font-heading">2026</p>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Recruitment Intake</p>
          </div>
        </div>
      </div>
    </section>
  )
}
