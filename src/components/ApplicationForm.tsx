import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { HiShieldCheck, HiOutlineCloudUpload } from 'react-icons/hi'
import { PaymentDetails } from './PaymentDetails'
import { SuccessMessage } from './SuccessMessage'
import { submitApplication } from '../services/submission'
import { DEPARTMENT_OPTIONS, LEVEL_OPTIONS, SKILL_OPTIONS } from '../utils/constants'
import type { ApplicationFormValues } from '../utils/types'
import { getFileAcceptString, validateApplication } from '../utils/validation'

const initialValues: ApplicationFormValues = {
  fullName: '',
  email: '',
  department: '',
  level: '',
  skills: [],
  motivation: '',
  acknowledgedRules: false,
  paymentProof: null,
}

export function ApplicationForm() {
  const [values, setValues] = useState<ApplicationFormValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormValues, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submittedInfo, setSubmittedInfo] = useState<{ message: string; submittedAt: string } | null>(null)

  const selectedSkillsSet = useMemo(() => new Set(values.skills), [values.skills])

  function handleSkillToggle(skill: string) {
    setValues((current) => {
      const alreadySelected = current.skills.includes(skill)
      return {
        ...current,
        skills: alreadySelected
          ? current.skills.filter((item) => item !== skill)
          : [...current.skills, skill],
      }
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError('')

    const nextErrors = validateApplication(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = Object.keys(nextErrors)[0]
      const element = document.getElementsByName(firstErrorField)[0]
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitApplication(values)
      setSubmittedInfo(result)
      setValues(initialValues)
      setErrors({})
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Submission failed. Please try again.'
      setSubmitError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submittedInfo) {
    return (
      <section id="apply" className="py-24 max-w-2xl mx-auto px-6">
        <SuccessMessage message={submittedInfo.message} submittedAt={submittedInfo.submittedAt} />
      </section>
    )
  }

  return (
    <section id="apply" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        
        <div className="text-center mb-12 animate-reveal">
          <h2 className="font-heading text-4xl font-bold text-slate-900 mb-4">Join the Society</h2>
          <p className="text-slate-600">
            Complete the form below to begin your journey with TESA Literary & Debating Society.
          </p>
        </div>

        <div className="space-y-12">
          {/* Payment Info Card - Now integrated as a step */}
          <div className="animate-reveal">
            <PaymentDetails />
          </div>

          <form onSubmit={handleSubmit} className="neat-card p-8 md:p-10 rounded-3xl space-y-8 animate-reveal" noValidate>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name *</label>
                  <input
                    name="fullName"
                    type="text"
                    value={values.fullName}
                    onChange={(e) => setValues(v => ({ ...v, fullName: e.target.value }))}
                    placeholder="e.g. Jane Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-400"
                  />
                  {errors.fullName && <p className="text-rose-500 text-xs mt-1 ml-1">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => setValues(v => ({ ...v, email: e.target.value }))}
                    placeholder="jane@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-400"
                  />
                  {errors.email && <p className="text-rose-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Department *</label>
                  <select
                    name="department"
                    value={values.department}
                    onChange={(e) => setValues(v => ({ ...v, department: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none"
                  >
                    <option value="">Select Department</option>
                    {DEPARTMENT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.department && <p className="text-rose-500 text-xs mt-1 ml-1">{errors.department}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Level *</label>
                  <select
                    name="level"
                    value={values.level}
                    onChange={(e) => setValues(v => ({ ...v, level: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all appearance-none"
                  >
                    <option value="">Select Level</option>
                    {LEVEL_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.level && <p className="text-rose-500 text-xs mt-1 ml-1">{errors.level}</p>}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-slate-700 ml-1">Skill Set (Pick at least one) *</label>
                <div className="flex flex-wrap gap-2">
                  {SKILL_OPTIONS.map(skill => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                        selectedSkillsSet.has(skill)
                          ? 'bg-amber-500 border-amber-500 text-white shadow-md'
                          : 'bg-white border-slate-200 text-slate-500 hover:border-amber-200 hover:text-amber-600'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
                {errors.skills && <p className="text-rose-500 text-xs mt-1 ml-1">{errors.skills}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Motivation Statement *</label>
                <textarea
                  name="motivation"
                  value={values.motivation}
                  onChange={(e) => setValues(v => ({ ...v, motivation: e.target.value }))}
                  placeholder="Why are you a good fit for the society?"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none placeholder:text-slate-400"
                />
                {errors.motivation && <p className="text-rose-500 text-xs mt-1 ml-1">{errors.motivation}</p>}
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                 <div className="flex items-start gap-3">
                   <input 
                    type="checkbox" 
                    id="rules"
                    checked={values.acknowledgedRules}
                    onChange={(e) => setValues(v => ({ ...v, acknowledgedRules: e.target.checked }))}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                   />
                   <label htmlFor="rules" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                     I have read and agree to the <a href="/assets/rules.pdf" className="text-amber-500 font-bold hover:underline" download>rules and regulations</a>.
                   </label>
                 </div>
                 {errors.acknowledgedRules && <p className="text-rose-500 text-xs mt-1">{errors.acknowledgedRules}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Upload Payment Proof (Max 3MB) *</label>
                <div className="relative group">
                  <input
                    name="paymentProof"
                    type="file"
                    accept={getFileAcceptString()}
                    onChange={(e) => setValues(v => ({ ...v, paymentProof: e.target.files?.[0] ?? null }))}
                    className="w-full opacity-0 absolute inset-0 cursor-pointer z-10"
                  />
                  <div className="w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl px-4 py-10 text-center transition-all group-hover:border-amber-400">
                     <div className="flex flex-col items-center gap-2">
                        <HiOutlineCloudUpload className="text-3xl text-slate-300 group-hover:text-amber-400 transition-colors" />
                        <span className="text-slate-400 text-sm font-medium">
                          {values.paymentProof ? values.paymentProof.name : "Choose file or drag & drop"}
                        </span>
                     </div>
                  </div>
                </div>
                {errors.paymentProof && <p className="text-rose-500 text-xs mt-1 ml-1">{errors.paymentProof}</p>}
              </div>
            </div>

            {submitError && (
              <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm font-medium">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing Submission...' : 'Complete Application'}
            </button>

            <div className="flex items-center justify-center gap-2 text-slate-400">
               <HiShieldCheck className="text-lg" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-center">Verified recruitment portal</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
