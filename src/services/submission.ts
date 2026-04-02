import type { ApplicationFormValues, SubmissionPayload } from '../utils/types'

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result
      if (typeof result !== 'string') {
        reject(new Error('Unable to read file.'))
        return
      }

      const commaIndex = result.indexOf(',')
      resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result)
    }

    reader.onerror = () => reject(new Error('Unable to process payment proof file.'))
    reader.readAsDataURL(file)
  })
}

function buildPayload(values: ApplicationFormValues, proofBase64: string): SubmissionPayload {
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    department: values.department,
    level: values.level,
    skills: values.skills,
    motivation: values.motivation.trim(),
    acknowledgedRules: values.acknowledgedRules,
    paymentProofName: values.paymentProof?.name ?? '',
    paymentProofType: values.paymentProof?.type ?? '',
    paymentProofBase64: proofBase64,
    submittedAt: new Date().toISOString(),
  }
}

export async function submitApplication(values: ApplicationFormValues) {
  const endpoint = import.meta.env.VITE_SUBMISSION_WEBHOOK_URL

  if (!endpoint) {
    throw new Error('Submission endpoint is not configured. Add VITE_SUBMISSION_WEBHOOK_URL to your .env file.')
  }

  if (!values.paymentProof) {
    throw new Error('Payment proof is missing.')
  }

  const proofBase64 = await toBase64(values.paymentProof)
  const payload = buildPayload(values, proofBase64)

  // We use 'text/plain' to avoid CORS preflight OPTIONS request, 
  // which Google Apps Script does not handle. The script parses the JSON body correctly.
  const response = await fetch(endpoint, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
    redirect: 'follow'
  })

  // Google Apps Script responses after redirects can sometimes be empty or 
  // return HTML if not handled. We'll handle different response cases gracefully.
  const responseText = await response.text().catch(() => '')
  let json: { result?: string; message?: string } | null = null
  
  try {
    json = JSON.parse(responseText)
  } catch {
    // If it's not JSON, it might still have been successful if the status is ok
    if (!response.ok) {
      throw new Error('Submission failed. The server returned an invalid response.')
    }
  }

  if (!response.ok || (json && json.result === 'error')) {
    const serverMessage = json?.message ? ` Server says: ${json.message}` : ''
    throw new Error(`Submission failed.${serverMessage}`)
  }

  return {
    message: json?.message ?? 'Application submitted successfully.',
    submittedAt: payload.submittedAt,
  }
}
