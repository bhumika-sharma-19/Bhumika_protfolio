import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Search, 
  Code2, 
  Layers, 
  Database, 
  Terminal, 
  Brain, 
  Check, 
  Cpu, 
  Layout, 
  Smartphone, 
  Server, 
  Zap, 
  Globe, 
  Boxes, 
  Flame, 
  GitBranch, 
  Send, 
  Edit3, 
  Package, 
  Box, 
  Network, 
  Users,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Code2,
  FileCode2: Code2,
  FileCode: Code2,
  Terminal,
  Cpu,
  Database,
  Layout,
  Layers,
  Smartphone,
  Server,
  Zap,
  Globe,
  Boxes,
  Flame,
  GitBranch,
  Container: Package,
  Send,
  Edit3,
  Package,
  Brain,
  Box,
  Network,
  Users,
  Sparkles
};

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontendMobile', label: 'Frontend & App' },
    { id: 'machineLearning', label: 'AI & Machine Learning' },
    { id: 'backendCloud', label: 'Backend & Cloud' },
    { id: 'computerVision', label: 'Computer Vision & OCR' },
    { id: 'tools', label: 'Developer Tools' }
  ];

  // Flatten skills with category metadata
  const allSkillsList = useMemo(() => {
    const list = [];
    Object.entries(skills).forEach(([categoryKey, skillArray]) => {
      skillArray.forEach((s) => {
        list.push({
          ...s,
          category: categoryKey
        });
      });
    });
    return list;
  }, [skills]);

  // Filter skills
  const filteredSkills = useMemo(() => {
    return allSkillsList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        item.level.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [allSkillsList, selectedCategory, searchQuery]);

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Tooling</h2>
          <p className="section-subtitle">
            Verified competencies across programming languages, web & mobile dashboard development, machine learning algorithms, and modern developer tooling.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search Bar */}
        <div className="skills-filter-bar">
          <div className="category-pill-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skills-search-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="skills-search-input"
              placeholder="Search skills (e.g., Python, React, Flask, Scikit-learn)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                title="Clear filter"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length > 0 ? (
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <div key={index} className="skill-card">
                  <div className="skill-card-top">
                    <div className="skill-icon-box">
                      <IconComponent size={20} className="skill-icon" />
                    </div>
                    <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="skill-name">{skill.name}</h3>

                  <div className="skill-category-tag">
                    {categories.find((c) => c.id === skill.category)?.label || skill.category}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-skills-state">
            <p>No skills found matching "{searchQuery}".</p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
