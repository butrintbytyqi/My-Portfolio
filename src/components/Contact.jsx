import { useState } from 'react';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';
import { profile } from '../data/profile';
import { sendContactMessage } from '../lib/email';
import './Contact.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please add your name.';
    if (!EMAIL_PATTERN.test(form.email)) nextErrors.email = 'Please add a valid email address.';
    if (!form.message.trim()) nextErrors.message = 'Please add a message.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Honeypot: bots that fill the hidden field get a silent no-op.
    if (form.company) {
      setStatus({ state: 'sent', message: 'Thanks — you’ll get a reply in your inbox shortly.' });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending…' });
    try {
      await sendContactMessage(form);
      setStatus({
        state: 'sent',
        message: 'Thanks — you’ll get a reply in your inbox shortly, and Butrint has been notified.',
      });
      setForm({ name: '', email: '', message: '', company: '' });
    } catch (error) {
      const to = error.ownerEmail || profile.email;
      setStatus({
        state: 'error',
        message: `Couldn’t send just now. Please email me directly at ${to}.`,
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeader number="06" label="Contact" title="Let’s work together" />
        <div className="grid">
          <Reveal className="contact__intro">
            <p className="contact__lead">
              Have a project, a role, or an idea worth automating?
              <em> I’d like to hear about it.</em>
            </p>
            <p className="contact__direct">
              <a className="contact__mail" href={`mailto:${profile.email}`}>{profile.email}</a>
              <span className="mono-label contact__phone">{profile.phone}</span>
            </p>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={0.1}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field-group">
                <label className="mono-label contact__label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  className="contact__field"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mono-label contact__error">{errors.name}</p>
                )}
              </div>

              <div className="contact__field-group">
                <label className="mono-label contact__label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  className="contact__field"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mono-label contact__error">{errors.email}</p>
                )}
              </div>

              <div className="contact__field-group">
                <label className="mono-label contact__label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="contact__field contact__field--area"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mono-label contact__error">{errors.message}</p>
                )}
              </div>

              <div className="contact__honeypot" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__actions">
                <button
                  type="submit"
                  className="mono-label contact__submit"
                  disabled={status.state === 'sending'}
                >
                  {status.state === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                <p
                  className={`mono-label contact__status ${status.state === 'error' ? 'contact__status--error' : ''}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
