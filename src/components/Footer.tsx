import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { HiMail, HiPhone } from 'react-icons/hi'

export function Footer() {
  return (
    <footer className="py-20 border-t border-slate-100 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <img src="/tesalng.png" alt="TESA L&D" className="w-10 h-10 rounded-lg" />
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900">TESA L&D</span>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            The Technology Engineering Students Association (TESA) Literary and Debating Society. 
            Cultivating the next generation of eloquent thinkers and leaders.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-600 font-medium">
            <li className="flex items-center gap-3">
              <HiMail className="text-amber-500 text-lg" /> 
              <a href="mailto:ajiboduoluwatobi@gmail.com" className="hover:text-amber-500 transition-colors underline decoration-slate-200">ajiboduoluwatobi@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <HiPhone className="text-amber-500 text-lg" /> 
              <span>07048972204</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Follow Our Journey</h4>
          <div className="flex gap-4">
            {[
              { icon: <FaXTwitter />, label: 'Twitter' },
              { icon: <FaInstagram />, label: 'Instagram' },
              { icon: <FaLinkedinIn />, label: 'LinkedIn' }
            ].map((social, i) => (
              <a key={i} href="#" aria-label={social.label} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-500 hover:bg-amber-50 transition-all shadow-sm">
                {social.icon}
              </a>
            ))}
          </div>
        </div>    
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-slate-400">
        <p>© 2026 TESA Literary & Debating Society. Designed for Excellence.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}
