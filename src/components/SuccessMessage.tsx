import { HiCheckCircle } from 'react-icons/hi'

type SuccessMessageProps = {
  submittedAt: string
  message: string
}

export function SuccessMessage({ submittedAt, message }: SuccessMessageProps) {
  const submittedDate = new Date(submittedAt).toLocaleString()

  return (
    <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 text-center animate-reveal">
      <div className="flex flex-col items-center gap-4">
        <HiCheckCircle className="text-6xl text-emerald-500" />
        <div className="space-y-2">
          <h2 className="font-heading text-3xl font-bold text-slate-900">Application Submitted</h2>
          <p className="text-emerald-700 font-medium">{message}</p>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-emerald-100/50 space-y-4">
        <p className="text-slate-500 text-sm italic">
          Submitted on {submittedDate}
        </p>
        <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
          A confirmation email has been requested for your address. 
          Please check your <span className="font-bold">inbox and spam folder</span>.
        </p>
      </div>

      <div className="mt-10">
        <button 
          onClick={() => window.location.href = '#hero'}
          className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md"
        >
          Return to Home
        </button>
      </div>
    </div>
  )
}
