# Tessa Literary and Debating Society Recruitment App

This project is a React + Tailwind recruitment portal for the Tessa Literary and Debating Society.
Applicants complete a form, upload payment proof, agree to society rules, and submit data to a webhook that stores entries in Google Sheets and sends confirmation email.

## Features

- Landing section with society description and logo placeholder
- Recruitment form with:
  - Full name
  - Email address
  - Department dropdown
  - Level dropdown (100-500)
  - Skill set multi-select
  - Motivation statement
  - Rules acknowledgement
  - Payment proof upload (JPG, PNG, PDF; max 3MB)
- Payment details panel with fee display
- Client-side validation for required fields and file restrictions
- Submission to configurable webhook endpoint
- Success and failure status messages
- Mobile responsive UI

## Local Setup

1. Install dependencies.

```bash
npm install
```

2. Create `.env` from `.env.example` and provide your webhook URL.

```env
VITE_SUBMISSION_WEBHOOK_URL=https://script.google.com/macros/s/your-web-app-id/exec
```

3. Start development server.

```bash
npm run dev
```

4. Build for production.

```bash
npm run build
```

## Webhook Contract

The frontend posts JSON to `VITE_SUBMISSION_WEBHOOK_URL`.

Payload fields:

- `fullName`
- `email`
- `department`
- `level`
- `skills` (array)
- `motivation`
- `acknowledgedRules` (boolean)
- `paymentProofName`
- `paymentProofType`
- `paymentProofBase64`
- `submittedAt` (ISO timestamp)

Expected success response:

```json
{
  "message": "Application submitted successfully"
}
```

If the endpoint responds with non-2xx, the app shows an error message.

## Google Sheets + Email Integration (Recommended)

Use Google Apps Script as the submission webhook.

1. Create a new Apps Script project tied to your Google account.
2. Create a target sheet with columns matching the payload fields.
3. In Apps Script, implement a `doPost(e)` handler to:
   - Parse JSON payload.
   - Append a row to the Google Sheet.
   - Decode and optionally store payment proof to Drive.
   - Send confirmation email to applicant via `MailApp.sendEmail`.
4. Deploy as Web App with access allowing anonymous POST requests.
5. Copy deployment URL into `VITE_SUBMISSION_WEBHOOK_URL`.

## Placeholder Assets

- Logo placeholder: `public/assets/logo-placeholder.svg`
- Rules placeholder: `public/assets/rules-placeholder.pdf`

Replace both with official assets before production launch.

## Notes

- This app assumes payment verification is done manually by admins.
- For production hardening, consider adding bot protection (reCAPTCHA or honeypot) and duplicate submission checks on the webhook side.
