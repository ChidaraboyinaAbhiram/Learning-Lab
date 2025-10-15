import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllExperiments } from '../services/api';
import SearchBar from '../components/Search/SearchBar';

const Home = () => {
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchExperiments();
  }, [searchTerm]);

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

  const handleSearch = (term) => {
    setSearchTerm(term);
    setLoading(true);
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Lab Books</h1>
          <p>Learn programming through interactive experiments and hands-on coding</p>
          <div className="hero-search">
            <SearchBar onSearch={handleSearch} placeholder="Search experiments..." />
          </div>
        </div>
      </div>

      <div className="experiments-grid">
        <h2>Available Experiments</h2>
        
        {loading ? (
          <div className="loading">Loading experiments...</div>
        ) : experiments.length === 0 ? (
          <div className="no-results">
            <p>No experiments found.</p>
            {searchTerm && (
              <button onClick={() => handleSearch('')}>
                Show all experiments
              </button>
            )}
          </div>
        ) : (
          <div className="grid">
            {experiments.map((experiment) => (
              <div key={experiment._id} className="experiment-card">
                <div className="card-header">
                  <span className="experiment-number">Experiment {experiment.exNo}</span>
                  <span className={`difficulty ${experiment.difficulty?.toLowerCase()}`}>
                    {experiment.difficulty || 'Beginner'}
                  </span>
                </div>
                
                <h3 className="card-title">{experiment.title}</h3>
                <p className="card-description">{experiment.objective}</p>
                
                <div className="card-stats">
                  <span>{experiment.subExperiments?.length || 0} Sub-experiments</span>
                  <span>{experiment.theory?.length || 0} Theory points</span>
                </div>
                
                <div className="card-footer">
                  <Link 
                    to={`/experiment/${experiment.id}`} 
                    className="btn btn-primary"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="features-section">
        <h2>Why Choose Lab Books?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">💻</div>
            <h3>Hands-on Learning</h3>
            <p>Practice with real code examples and interactive experiments</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">🧪</div>
            <h3>Structured Experiments</h3>
            <p>Follow step-by-step experiments designed for progressive learning</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Quiz Assessments</h3>
            <p>Test your knowledge with interactive quizzes after each experiment</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Learn on any device - desktop, tablet, or mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
