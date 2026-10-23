import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Smartphone, 
  Cpu, 
  Bot,
  Info,
  Lock,
  Building2
} from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile-web', label: 'Enterprise Web & Mobile' },
    { id: 'web', label: 'Full-Stack Management' },
    { id: 'ml', label: 'AI & Machine Learning' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'mobile-web':
        return <Smartphone size={24} />;
      case 'ml':
        return <Bot size={24} />;
      default:
        return <Layers size={24} />;
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Real-World Implementations</span>
          </div>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-subtitle">
            Authentic production-level applications and machine learning workflows built with clean architecture, role-based workflows, and verified algorithms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`project-filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Card Banner */}
              <div className="project-card-banner">
                <div className="banner-icon-circle">
                  {getCategoryIcon(project.category)}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {project.affiliation && (
                    <span className="featured-badge" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'var(--border-subtle)' }}>
                      <Building2 size={12} />
                      <span>{project.affiliation}</span>
                    </span>
                  )}
                  {project.isPrivate ? (
                    <span className="featured-badge" style={{ background: 'rgba(244, 63, 94, 0.12)', color: 'var(--accent-primary)', borderColor: 'var(--accent-badge-border)' }}>
                      <Lock size={12} />
                      <span>Enterprise Codebase</span>
                    </span>
                  ) : (
                    <span className="featured-badge">
                      <Sparkles size={12} />
                      <span>Open Source</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-content">
                <div className="project-header-row">
                  <span className="project-category-slug">{project.category.replace('-', ' & ')}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-subtitle">{project.subtitle}</p>

                {/* Tags */}
                <div className="project-tags-list">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span key={tIdx} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="project-tag-more">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Highlights preview */}
                {project.highlights && (
                  <ul className="project-mini-highlights">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Card Footer / Actions */}
              <div className="project-card-footer">
                <button
                  className="btn-text-link"
                  onClick={() => setSelectedProject(project)}
                >
                  <Info size={15} />
                  <span>Deep Dive</span>
                </button>

                <div className="project-ext-links">
                  {project.isPrivate ? (
                    <span 
                      style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                      title="Proprietary client repository — private code"
                    >
                      <Lock size={14} />
                      <span>Client Protected</span>
                    </span>
                  ) : (
                    <>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link"
                          title="View GitHub Repository"
                          aria-label="View Source Code"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-link"
                          title="Open Application"
                          aria-label="Open Application"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-dive details modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
