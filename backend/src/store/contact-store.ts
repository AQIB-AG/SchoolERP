export interface ContactFormData {
  name: string;
  email: string;
  schoolName: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  submittedAt: string;
}

const submissions: ContactSubmission[] = [];

export function addSubmission(data: ContactFormData): ContactSubmission {
  const submission: ContactSubmission = {
    ...data,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };
  submissions.push(submission);
  console.log("[SchoolERP Backend] Contact submission stored:", submission);
  return submission;
}

export function getSubmissions(): ContactSubmission[] {
  return [...submissions];
}
