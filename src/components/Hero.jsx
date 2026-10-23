import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Code, 
  Copy, 
  Check, 
  Terminal as TerminalIcon,
  Sparkles,
  ExternalLink,
  Phone
} from 'lucide-react';
import { Github, Linkedin, WhatsApp, PhoneCallIcon } from './Icons';

export default function Hero() {
  const { personal, codeSnippet } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('bhumika.js');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const terminalTabs = [
    { id: 'bhumika.js', label: 'BhumikaSharma.js' },
    { id: 'skills.json', label: 'skills.json' },
    { id: 'status.sh', label: 'status.sh' }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'skills.json':
        return `{\n  "name": "Bhumika Sharma",\n  "languages": ["Python", "JavaScript", "HTML5/CSS3"],\n  "web_and_app": ["React.js", "React Native", "Expo", "Firebase"],\n  "ai_and_ml": ["Scikit-learn", "Pandas", "NumPy", "Flask"],\n  "cv_tools": ["OpenCV", "Pytesseract"],\n  "tooling": ["Git", "GitHub", "VS Code", "Antigravity"],\n  "status": "ready_to_contribute"\n}`;
      case 'status.sh':
        return `#!/bin/bash\n# Bhumika Sharma — Candidate Verification\necho "Engineer: ${personal.name}"\necho "Role: Software Developer & AI/Data Science Engineer"\necho "University: GGCT Jabalpur (B.Tech AIDS)"\necho "Internship: Cleanomatics Tech Solutions (Completed)"\necho "Status: ${personal.statusBadge}"\necho "Location: ${personal.location}"\necho "Open for: Remote & Relocation Opportunities"`;
      default:
        return codeSnippet;
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="bg-gradient-glow" />
      <div className="container hero-container">
        {/* Left Column: Hero Intro */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot-pulse"></span>
            <span className="status-text">{personal.statusBadge}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
            <br />
            <span className="hero-subtitle-role">{personal.title}</span>
          </h1>

          <p className="hero-description">
            {personal.tagline} {personal.bioSummary}
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Projects</span>
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <span>Get In Touch</span>
              <Mail size={16} />
            </a>

            <a
              href={personal.resumeUrl}
              download="Bhumika_Sharma_Resume.pdf"
              className="btn btn-outline"
              title="Download Bhumika Sharma's Resume"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Icons Bar */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="socials-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Direct WhatsApp Message"
                title="Chat on WhatsApp"
              >
                <WhatsApp size={18} />
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="social-icon-btn"
                aria-label="Call Direct"
                title={`Call: ${personal.phone}`}
              >
                <PhoneCallIcon size={18} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Terminal Card */}
        <div className="hero-terminal-wrapper">
          <div className="code-terminal-card">
            {/* Window title bar */}
            <div className="terminal-header">
              <div className="window-dots">
                <span className="window-dot red"></span>
                <span className="window-dot yellow"></span>
                <span className="window-dot green"></span>
              </div>

              {/* Tabs */}
              <div className="terminal-tabs">
                {terminalTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`terminal-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                className="terminal-copy-btn"
                title="Copy snippet"
                aria-label="Copy snippet"
              >
                {copied ? (
                  <>
                    <Check size={14} className="copy-check" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="terminal-body">
              <pre className="terminal-pre">
                <code>{getTabContent()}</code>
              </pre>
            </div>

            {/* Terminal status bar */}
            <div className="terminal-footer">
              <div className="footer-status">
                <span className="branch-name">git:(main)</span>
                <span className="status-clean">✔ clean</span>
              </div>
              <div className="footer-info">
                <span>UTF-8</span>
                <span>JavaScript & Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
