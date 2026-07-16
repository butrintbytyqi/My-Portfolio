// Sends the contact form to the Netlify serverless function, which drafts an
// AI reply (Gemini) and delivers it via Resend. All secrets live server-side;
// nothing sensitive is exposed here. See netlify/functions/contact.mjs.
const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact';

export async function sendContactMessage({ name, email, message, company, token }) {
  let res;
  try {
    res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, company, token }),
    });
  } catch {
    throw new Error('network');
  }

  let data = {};
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }

  if (!res.ok || !data.ok) {
    const error = new Error(data.error || `request_failed_${res.status}`);
    error.ownerEmail = data.ownerEmail;
    throw error;
  }
  return data;
}
