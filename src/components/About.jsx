import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, BookOpen, Award, CheckCircle, Code2, Sparkles, Layers, Brain, Users } from 'lucide-react';

export default function About() {
  const { stats, education, personal, aboutPillars } = portfolioData;

  const getPillarIcon = (index) => {
    switch (index) {
      case 0:
        return <Layers size={22} className="pillar-icon" />;
      case 1:
        return <Brain size={22} className="pillar-icon" />;
      default:
        return <Users size={22} className="pillar-icon" />;
    }
  };

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Background & Architecture</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            An Artificial Intelligence & Data Science undergraduate who bridges predictive algorithms with real-world, role-driven web and mobile user interfaces.
          </p>
        </div>

        {/* Real Stats Row */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-subtitle">{stat.subtitle}</div>
            </div>
          ))}
        </div>

        {/* 3 Core Engineering Pillars */}
        {aboutPillars && (
          <div className="about-pillars-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            margin: '2.5rem 0'
          }}>
            {aboutPillars.map((pillar, idx) => (
              <div key={idx} className="about-pillar-card" style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                transition: 'all var(--transition-normal)'
              }}>
                <div style={{
                  display: 'inline-flex',
                  padding: '0.65rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-subtle)',
                  color: 'var(--accent-primary)',
                  marginBottom: '1rem'
                }}>
                  {getPillarIcon(idx)}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                  {pillar.title}
                </h3>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--accent-primary)', display: 'block', marginBottom: '0.65rem' }}>
                  {pillar.subtitle}
                </span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Details Grid: Narrative & Education */}
        <div className="about-details-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative-card">
            <h3 className="card-heading">Engineering Focus & Approach</h3>
            <p className="narrative-text">
              Hello! I'm <strong className="highlight-text">{personal.name}</strong>, a B.Tech student in Artificial Intelligence and Data Science at Gyan Ganga College of Technology, Jabalpur. My journey centers around turning computational models into practical, responsive web and mobile software.
            </p>
            <p className="narrative-text">
              During my Software Developer Internship at <strong>Cleanomatics Tech Solutions</strong>, I developed production React dashboard interfaces spanning <strong>Rider, Admin, and Staff</strong> views, while building specialized role workflows for <strong>PestCure</strong> (Technician, Accounts, Sales HOD, and Supervisor). In parallel, I enjoy training regression and machine learning pipelines with Python and Scikit-learn.
            </p>

            <div className="principles-box">
              <h4 className="principles-title">Core Principles I Live By:</h4>
              <ul className="principles-list">
                <li>
                  <CheckCircle size={16} className="check-icon" />
                  <span><strong>Role-Based Usability:</strong> Design every interface with deep awareness of user permissions and day-to-day workflow efficiency.</span>
                </li>
                <li>
                  <CheckCircle size={16} className="check-icon" />
                  <span><strong>Empirical Rigor:</strong> Benchmark and validate multiple algorithms (Random Forest, XGBoost, etc.) to guarantee grounded results.</span>
                </li>
                <li>
                  <CheckCircle size={16} className="check-icon" />
                  <span><strong>Reliable Tooling:</strong> Maintain clean virtual environments, modular scripts, and disciplined Git version control.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Academic Foundation */}
          <div className="about-education-wrapper">
            <h3 className="card-heading flex-heading">
              <GraduationCap size={22} className="accent-icon" />
              <span>Academic Foundation</span>
            </h3>

            <div className="education-timeline">
              {education.map((item, idx) => (
                <div key={idx} className="education-item">
                  <div className="edu-dot"></div>
                  <div className="edu-content">
                    <div className="edu-top-meta">
                      <span className="edu-period">{item.period}</span>
                      <span className="edu-grade-badge">{item.grade}</span>
                    </div>
                    <h4 className="edu-degree">{item.degree}</h4>
                    <p className="edu-institution">{item.institution}</p>
                    <p className="edu-desc">{item.description}</p>

                    {item.coursework && item.coursework.length > 0 && (
                      <div className="coursework-box">
                        <span className="coursework-label">
                          <BookOpen size={13} />
                          <span>Key Coursework & Domains:</span>
                        </span>
                        <div className="coursework-tags">
                          {item.coursework.map((course, cIdx) => (
                            <span key={cIdx} className="coursework-tag">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
