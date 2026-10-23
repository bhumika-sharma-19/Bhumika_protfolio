import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Layers, Cpu, Lock, ShieldCheck } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span className="modal-category-badge">{project.category.toUpperCase()}</span>
              {project.affiliation && (
                <span className="modal-category-badge" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
                  {project.affiliation}
                </span>
              )}
            </div>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Tags */}
          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* Full Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview & Architecture</h4>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Key Features & Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Architectural Features</h4>
              <ul className="modal-highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="modal-highlight-item">
                    <CheckCircle2 size={16} className="modal-check-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Engineering Challenges */}
          {project.challenges && (
            <div className="modal-challenge-box">
              <div className="challenge-title-row">
                <AlertTriangle size={17} className="challenge-icon" />
                <span className="challenge-header-text">Engineering Challenge & Solution</span>
              </div>
              <p className="challenge-text">{project.challenges}</p>
            </div>
          )}

          {/* Private Repository Notice if applicable */}
          {project.isPrivate && (
            <div style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              marginTop: '1rem'
            }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
                <strong>Proprietary Production Codebase:</strong> This project was developed as part of work with <em>{project.affiliation}</em>. Source code is confidential and protected by company privacy policies, with architecture and workflow highlights showcased above.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer / CTAs */}
        <div className="modal-footer">
          <div className="modal-cta-group">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink size={15} />
              </a>
            )}
            {!project.isPrivate && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={16} />
                <span>Source Code on GitHub</span>
              </a>
            )}
          </div>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
