import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Mail, Code, Heart, Phone } from 'lucide-react';
import { Github, Linkedin, WhatsApp, PhoneCallIcon } from './Icons';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top footer row */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="brand-avatar-sm">B</span>
            <div className="footer-brand-info">
              <span className="footer-name">{personal.name}</span>
              <span className="footer-role">{personal.title}</span>
            </div>
          </div>

          <div className="footer-social-group">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsApp size={17} />
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="footer-social-btn"
              aria-label="Phone"
              title={`Call: ${personal.phone}`}
            >
              <PhoneCallIcon size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="footer-social-btn"
              aria-label="Email"
              title="Email"
            >
              <Mail size={17} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Scroll to top of page"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom copyright row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="crafted-text">
            Gyan Ganga College of Technology, Jabalpur • AI & Data Science
          </p>
        </div>
      </div>
    </footer>
  );
}
