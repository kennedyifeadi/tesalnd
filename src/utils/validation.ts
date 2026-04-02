import type { ApplicationFormValues } from './types'

const MAX_PROOF_BYTES = 3 * 1024 * 1024
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf']

type FormErrors = Partial<Record<keyof ApplicationFormValues, string>>

export function validateApplication(values: ApplicationFormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.department) {
    errors.department = 'Please choose your department.'
  }

  if (!values.level) {
    errors.level = 'Please choose your level.'
  }

  if (!values.skills.length) {
    errors.skills = 'Select at least one skill set.'
  }

  if (!values.motivation.trim()) {
    errors.motivation = 'Motivation statement is required.'
  }

  if (!values.acknowledgedRules) {
    errors.acknowledgedRules = 'You must acknowledge the rules before submitting.'
  }

  if (!values.paymentProof) {
    errors.paymentProof = 'Payment proof is required.'
  } else {
    if (!ALLOWED_TYPES.includes(values.paymentProof.type)) {
      errors.paymentProof = 'Only JPG, PNG, and PDF files are allowed.'
    } else if (values.paymentProof.size > MAX_PROOF_BYTES) {
      errors.paymentProof = 'File size must be 3MB or less.'
    }
  }

  return errors
}

export function getFileAcceptString() {
  return '.jpg,.jpeg,.png,.pdf'
}
