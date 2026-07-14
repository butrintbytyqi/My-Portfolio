import emailjs from '@emailjs/browser';

// EmailJS browser credentials are public by design; abuse is limited via
// the dashboard's origin allowlist (see README).
export const EMAILJS_PUBLIC_KEY = 'r3gRnZ6XVat2N2Lsi';
export const EMAILJS_SERVICE_ID = 'service_q02df5d';
export const EMAILJS_TEMPLATE_ID = 'template_28odamw';

let initialized = false;

export function sendContactMessage({ name, email, message }) {
  if (!initialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    initialized = true;
  }
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name: name,
    from_email: email,
    message,
  });
}
