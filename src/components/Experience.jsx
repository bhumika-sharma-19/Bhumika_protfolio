import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Terminal } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">Work & Leadership</h2>
          <p className="section-subtitle">
            Hands-on software development experience through engineering internships, technical leadership, and collaborative open-source contributions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experience.map((exp, idx) => (
            <div key={idx} className="experience-timeline-item">
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <Briefcase size={14} />
                </div>
                {idx < experience.length - 1 && <div className="timeline-line"></div>}
              </div>

              {/* Timeline Card */}
              <div className="experience-card">
                <div className="experience-card-header">
                  <div>
                    <span className="experience-type-badge">{exp.type}</span>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-org">{exp.organization}</h4>
                  </div>

                  <div className="experience-meta">
                    <span className="exp-meta-item">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </span>
                    <span className="exp-meta-item">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="experience-desc">{exp.description}</p>

                {/* Achievements list */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="experience-achievements-list">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="experience-achievement-item">
                        <CheckCircle size={15} className="achievement-icon" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech stack used */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="experience-tech-row">
                    <span className="tech-row-label">Technologies:</span>
                    <div className="tech-tags-group">
                      {exp.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag-sm">
                          {tech}
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
    </section>
  );
}
