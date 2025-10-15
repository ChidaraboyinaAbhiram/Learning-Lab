import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllExperiments } from '../../services/api';

const Sidebar = () => {
  const [experiments, setExperiments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchExperiments();
  }, []);

  const fetchExperiments = async () => {
    try {
      const response = await getAllExperiments();
      setExperiments(response.experiments);
    } catch (error) {
      console.error('Error fetching experiments:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <aside className="sidebar">
        <div className="sidebar-loading">Loading...</div>
      </aside>
    );
  }

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3>Experiments</h3>
        <button 
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {experiments.map((experiment) => (
          <div key={experiment._id} className="sidebar-section">
            <Link 
              to={`/experiment/${experiment.id}`}
              className={`sidebar-link ${
                location.pathname === `/experiment/${experiment.id}` ? 'active' : ''
              }`}
            >
              <span className="experiment-number">{experiment.exNo}</span>
              <span className="experiment-title">{experiment.title}</span>
            </Link>
            
            {experiment.subExperiments && (
              <div className="sub-experiments">
                {experiment.subExperiments.map((subExp) => (
                  <Link
                    key={subExp._id}
                    to={`/experiment/${experiment.id}#${subExp.subNo}`}
                    className="sub-experiment-link"
                  >
                    {experiment.exNo}.{subExp.subNo} {subExp.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
