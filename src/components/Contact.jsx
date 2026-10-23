import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  Phone
} from 'lucide-react';
import { Github, Linkedin, WhatsApp, PhoneCallIcon } from './Icons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean dispatch & toast
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Bhumika,\n\n${formData.message}\n\nFrom:\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Let's build something impactful together! Whether you have an internship opportunity, a freelance project, or want to discuss AI and full-stack development, feel free to reach out.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-column">
            {/* Phone & WhatsApp Card */}
            <div className="contact-card email-card">
              <div className="contact-icon-bubble">
                <Phone size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Direct Phone & WhatsApp</span>
                <span className="contact-card-value">{personal.phone}</span>
                <div style={{ display: 'flex', gap: '0.65rem', marginTop: '0.45rem' }}>
                  <a
                    href={personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-text-link"
                    style={{ fontSize: '0.82rem', padding: '0.2rem 0.55rem' }}
                  >
                    <WhatsApp size={14} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="social-text-link"
                    style={{ fontSize: '0.82rem', padding: '0.2rem 0.55rem' }}
                  >
                    <PhoneCallIcon size={14} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
              <button
                className="copy-email-btn"
                onClick={handleCopyPhone}
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Email Card */}
            <div className="contact-card email-card">
              <div className="contact-icon-bubble">
                <Mail size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email Address</span>
                <span className="contact-card-value">{personal.email}</span>
              </div>
              <button
                className="copy-email-btn"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Availability Card */}
            <div className="contact-card">
              <div className="contact-icon-bubble">
                <MapPin size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Location & Availability</span>
                <span className="contact-card-value">{personal.location}</span>
              </div>
            </div>

            {/* Social & Profiles Card */}
            <div className="contact-card">
              <div className="contact-icon-bubble">
                <MessageSquare size={22} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Profiles & Networks</span>
                <div className="contact-social-links">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-text-link"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-text-link"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Notice Box */}
            <div className="availability-notice-box">
              <div className="notice-header">
                <Sparkles size={16} className="notice-icon" />
                <span>Immediate Availability</span>
              </div>
              <p className="notice-text">
                Actively seeking summer and semester software engineering internships, with a focus on web apps, mobile dashboards, or data science/AI workflows.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-column">
            <div className="form-wrapper-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">
                Fill in your details below or write to me directly at{' '}
                <a href={`mailto:${personal.email}`} className="text-link">
                  {personal.email}
                </a>
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={44} className="success-icon" />
                  <h4 className="success-title">Message Prepared!</h4>
                  <p className="success-message">
                    Thank you for reaching out, <strong>{formData.name}</strong>. You can also send this note directly via your email client below:
                  </p>
                  <button
                    onClick={handleMailtoDirect}
                    className="btn btn-primary"
                  >
                    <Mail size={16} />
                    <span>Open in Email Client</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-outline"
                    style={{ marginTop: '0.75rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Your Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="form-input"
                        placeholder="e.g. Alex Chen"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your Email <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-input"
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="form-textarea"
                      placeholder="Share a brief overview of your inquiry or role..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
