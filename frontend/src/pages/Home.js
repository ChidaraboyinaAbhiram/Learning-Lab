import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllExperiments } from '../services/api';
import SearchBar from '../components/Search/SearchBar';
import '../styles/design-system.css';

const Home = () => {
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchExperiments = async () => {
      try {
        const response = await getAllExperiments(searchTerm);
        setExperiments(response.experiments);
      } catch (error) {
        console.error('Error fetching experiments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiments();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setLoading(true);
  };

  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '80px 20px',
        background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.1) 0%, transparent 70%)'
      }}>
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
          Welcome to Learning Lab
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          Master programming through interactive experiments and hands-on coding
        </p>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <SearchBar onSearch={handleSearch} placeholder="Search experiments..." />
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '80px' }}>
        <h2 className="neon-text" style={{ marginBottom: '30px', fontSize: '2rem' }}>Available Experiments</h2>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-accent)' }}>
            Loading experiments...
          </div>
        ) : experiments.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '20px' }}>No experiments found.</p>
            {searchTerm && (
              <button className="btn-secondary" onClick={() => handleSearch('')}>
                Show all experiments
              </button>
            )}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {experiments.map((experiment) => (
              <div key={experiment._id} className="glass-panel" style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--glow-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{
                    background: 'rgba(0, 242, 255, 0.1)',
                    color: 'var(--primary-color)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    Exp {experiment.exNo}
                  </span>
                  <span style={{
                    color: experiment.difficulty === 'Advanced' ? 'var(--error-color)' :
                      experiment.difficulty === 'Intermediate' ? 'var(--warning-color)' : 'var(--success-color)',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}>
                    {experiment.difficulty || 'Beginner'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'white' }}>{experiment.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', flex: 1 }}>
                  {experiment.objective}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '15px'
                }}>
                  <span>{experiment.subExperiments?.length || 0} Modules</span>
                  <span>{experiment.theory?.length || 0} Concepts</span>
                </div>

                <Link
                  to={`/experiment/${experiment.id}`}
                  className="btn-primary"
                  style={{ textAlign: 'center', display: 'block' }}
                >
                  Start Learning
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div style={{ background: 'var(--bg-secondary)', padding: '80px 0' }}>
        <div className="container">
          <h2 className="gradient-text" style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem' }}>
            Why Choose Learning Lab?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px'
          }}>
            {[
              { icon: '💻', title: 'Hands-on Learning', desc: 'Practice with real code examples and interactive experiments' },
              { icon: '🧪', title: 'Structured Experiments', desc: 'Follow step-by-step experiments designed for progressive learning' },
              { icon: '📊', title: 'Quiz Assessments', desc: 'Test your knowledge with interactive quizzes after each experiment' },
              { icon: '📱', title: 'Responsive Design', desc: 'Learn on any device - desktop, tablet, or mobile' }
            ].map((feature, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{feature.icon}</div>
                <h3 style={{ marginBottom: '15px', color: 'var(--text-primary)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
