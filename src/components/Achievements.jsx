import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, Trophy, Star, CheckCircle, ExternalLink, ShieldCheck, Briefcase, Layers, Cpu, GraduationCap } from 'lucide-react';

export default function Achievements() {
  const milestones = portfolioData.milestones || portfolioData.achievements || [];

  const getBadgeIcon = (index) => {
    switch (index) {
      case 0:
        return <Briefcase size={20} className="achievement-badge-icon" />;
      case 1:
        return <Layers size={20} className="achievement-badge-icon" />;
      case 2:
        return <Cpu size={20} className="achievement-badge-icon" />;
      default:
        return <GraduationCap size={20} className="achievement-badge-icon" />;
    }
  };

  return (
    <section className="section" id="achievements">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="section-title">Milestones & Distinction</h2>
          <p className="section-subtitle">
            Verifiable milestones achieved across real-world production internships, multi-role system architectures, and secondary board academic excellence.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {milestones.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-card-top">
                <div className="achievement-icon-wrapper">
                  {getBadgeIcon(idx)}
                </div>
                <span className="achievement-badge-tag">{item.badge}</span>
              </div>

              <h3 className="achievement-card-title">{item.title}</h3>
              <div className="achievement-meta">
                <span className="achievement-org">{item.organization}</span>
                <span className="achievement-date-dot">•</span>
                <span className="achievement-date">{item.date}</span>
              </div>

              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
