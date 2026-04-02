export type ApplicationFormValues = {
  fullName: string
  department: string
  level: string
  motivation: string
  acknowledgedRules: boolean
  email: string
  paymentProof: File | null
  skills: string[]
}

export type SubmissionPayload = {
  fullName: string
  email: string
  department: string
  level: string
  skills: string[]
  motivation: string
  acknowledgedRules: boolean
  paymentProofName: string
  paymentProofType: string
  paymentProofBase64: string
  submittedAt: string
}
