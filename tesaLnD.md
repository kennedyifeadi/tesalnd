# Product Requirements Document (PRD)

## Product Title
TESA Literary and Debating Society Recruitment Portal

## Overview
The TESA Literary and Debating Society Recruitment Portal is a web-based application designed to collect, manage, and validate applications from prospective members.

The platform will serve as a structured intake system where applicants can:
- Submit personal and academic details
- Indicate skill levels and interests
- Access society rules
- Complete payment and upload proof
- Submit their application for review

The system will prioritize simplicity, clarity, and a modern user interface while maintaining strict submission requirements.

---

## Objectives

- Streamline recruitment process
- Ensure only serious applicants complete registration
- Digitally collect and store applicant data
- Validate payment before acceptance
- Provide a clean and professional user experience

---

## Target Users

- Undergraduate students interested in:
  - Writing
  - Public speaking
  - Debate
  - Speech delivery

---

## Core Features

### 1. Landing / Application Page

#### UI Requirements:
- Clean, modern design
- Minimalist layout
- Society logo displayed prominently
- Clear heading:
  - "Join Tessa Literary and Debating Society"
- Short description of the society and expectations

---

### 2. Application Form

#### Fields:

1. **Full Name**
   - Type: Text
   - Required

2. **Department**
   - Type: Text / Dropdown
   - Required

3. **Level**
   - Type: Dropdown
   - Options:
     - 100 Level
     - 200 Level
     - 300 Level
     - 400 Level
     - 500 Level
   - Required

4. **Skill Set**
   - Type: Multi-select / Checkboxes
   - Options:
     - Writing
     - Speech Writing
     - Debate
     - Public Speaking
     - Delivery
     - Beginner (Interested in learning)

5. **Short Motivation Statement**
   - Type: Textarea
   - Required
   - Prompt:
     - "Why do you want to join the society?"

---

### 3. Society Rules Section

- Downloadable PDF file
- Label:
  - "Download Society Rules"
- Must be visible before submission
- Optional: Checkbox:
  - "I have read and agree to the rules" (Required)

---

### 4. Payment Section

#### Display:
- Account Name
- Account Number
- Bank Name
- Fee:
  - ₦1,500

#### Instruction Text:
- "Make payment to the account above and upload proof below."

---

### 5. Payment Proof Upload

- Input Type: File Upload
- Accepted Formats:
  - JPG
  - PNG
  - PDF
- Required

---

### 6. Submission

- Submit Button:
  - Label: "Submit Application"
- Validation:
  - All required fields must be completed
  - File upload must be present
  - Rules checkbox must be checked

---

## Backend / Data Handling

### Data Storage Options:

#### Option B: Google Sheets Integration
- Use API (Google Apps Script)
- Each submission creates a new row

#### Data Fields Stored:

- Full Name
- Department
- Level
- Skill Set
- Motivation Statement
- Payment Proof URL
- Timestamp

---

## Workflow

1. User lands on the page
2. Reads introduction
3. Downloads rules
4. Fills form
5. Makes payment externally
6. Uploads proof
7. Submits form
8. Data is stored in database / sheet
9. Optional success message:
   - "Application submitted successfully. Shortlisted candidates will be contacted."

---

## Design Guidelines

- Color Scheme:
  - Dark + Gold OR Deep Blue + White (professional tone)

- Typography:
  - Clean sans-serif (e.g., Inter, Poppins)

- Layout:
  - Centered form
  - Proper spacing
  - Mobile responsive

- UX Principles:
  - No clutter
  - Clear instructions
  - Smooth validation feedback

---

## Tech Stack

### Frontend:
- React.js
- Tailwind CSS (recommended)

### Backend:
- Google Sheets API

---

## Validation Rules

- All fields required except where stated
- File must be uploaded before submission
- Level must be selected
- At least one skill must be selected

---

## Future Enhancements (Optional)

- Admin dashboard to review applicants
- Email notifications upon submission
- Status tracking (Pending / Accepted / Rejected)
- Deadline countdown timer
- Applicant filtering system

---

## Success Metrics

- Number of completed applications
- Drop-off rate before submission
- Number of valid payment uploads
- Conversion rate (views → submissions)

---

## Notes

- Platform must feel exclusive and intentional
- Avoid overly playful UI — keep it authoritative
- Emphasize seriousness of recruitment process