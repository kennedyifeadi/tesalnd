import { HiMicrophone, HiAcademicCap, HiUsers, HiPencilAlt } from 'react-icons/hi'

export function WhyJoin() {
  const reasons = [
    {
      title: "Master Public Speaking",
      description: "Learn to command attention and deliver persuasive arguments through our intensive workshops and sessions.",
      icon: <HiMicrophone />,
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Critical Thinking",
      description: "Hone your ability to analyze complex topics and see every side of an argument. Critical thinking is at our core.",
      icon: <HiAcademicCap />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Vibrant Community",
      description: "Build lifelong connections with some of the most brilliant minds in Engineering and beyond.",
      icon: <HiUsers />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Literary Excellence",
      description: "Explore the nuances of different literary works and improve your writing through collaborative sessions.",
      icon: <HiPencilAlt />,
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <section id="why-join" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-20 animate-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
            Why Join TESA Literary & <br /><span className="text-amber-500">Debating Society?</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Beyond engineering, we build leaders who can communicate, collaborate, and lead with peak eloquence and confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 animate-reveal"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`w-14 h-14 ${reason.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
