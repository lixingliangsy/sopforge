export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "SOPForge",
  slug: "sopforge",
  tagline: "Standard operating procedures your team will actually follow",
  description: "Generate clear, step-by-step SOPs for any repeating task \u2014 onboarding, QA checks, client handoffs \u2014 from a one-line description.",
  toolTitle: "Describe the process",
  resultLabel: "Your SOP",
  ctaLabel: "Generate SOP",
  features: [
  "Numbered steps with owners & checks",
  "Roles & tools called out",
  "Risk / gotcha notes"
],
  inputs: [
  {
    "key": "process",
    "label": "Process to document",
    "type": "textarea",
    "placeholder": "e.g. how we onboard a new freelance writer"
  },
  {
    "key": "audience",
    "label": "Who follows it",
    "type": "input",
    "placeholder": "e.g. ops coordinator"
  },
  {
    "key": "depth",
    "label": "Detail level",
    "type": "select",
    "options": [
      "Quick",
      "Standard",
      "Detailed"
    ]
  }
] as InputField[],
  systemPrompt: "You are an operations consultant. Given a process description and audience, write a clear SOP: numbered steps, the role responsible for each, tools used, and a 'watch out' note for common mistakes. Use plain language. Output Markdown.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "1 SOP"
  },
  {
    "tier": "Solo",
    "price": "$12/mo",
    "desc": "Unlimited SOPs"
  },
  {
    "tier": "Studio",
    "price": "$29/mo",
    "desc": "Team, export, versioning"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const p = inputs['process'] || 'your process'
  const a = inputs['audience'] || 'the team'
  const dp = inputs['depth'] || 'Standard'
  return `STANDARD OPERATING PROCEDURE - ${p}
Audience: ${a} | Depth: ${dp}

1. Prep
   - Owner: ${a}
   - Gather the tools and access needed for "${p}".

2. Step-by-step
   1. Do the first action and verify it succeeded.
   2. Hand off to the next owner with a short note.
   3. Record the result.

3. Watch out
   - Most failures happen at handoff - always confirm receipt.

---
(Mock SOP. Add OPENAI_API_KEY for a full AI-generated procedure.)`
}
}
