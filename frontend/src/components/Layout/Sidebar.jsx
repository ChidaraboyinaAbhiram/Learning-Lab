import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllExperiments } from '../../services/api';
import '../../styles/design-system.css';

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
      <aside className="sidebar glass-panel" style={{ width: '250px', padding: '20px', height: 'calc(100vh - 70px)', position: 'sticky', top: '70px' }}>
        <div className="sidebar-loading" style={{ color: 'var(--text-secondary)' }}>Loading...</div>
      </aside>
    );
  }

  return (
    <aside className={`sidebar glass-panel ${isCollapsed ? 'collapsed' : ''}`} style={{
      width: isCollapsed ? '60px' : '280px',
      padding: '20px',
      height: 'calc(100vh - 90px)',
      position: 'sticky',
      top: '80px',
      marginLeft: '20px',
      transition: 'width 0.3s ease',
      overflowY: 'auto',
      borderRadius: '16px',
      border: '1px solid var(--border-color)',
      background: 'rgba(22, 22, 37, 0.6)'
    }}>
      <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        {!isCollapsed && <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary-color)' }}>Experiments</h3>}
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {experiments.map((experiment) => (
          <div key={experiment._id} className="sidebar-section" style={{ marginBottom: '15px' }}>
            <Link
              to={`/experiment/${experiment.id}`}
              className={`sidebar-link ${location.pathname === `/experiment/${experiment.id}` ? 'active' : ''}`}
              style={{
                display: 'block',
                padding: '10px',
                borderRadius: '8px',
                color: location.pathname === `/experiment/${experiment.id}` ? 'black' : 'var(--text-secondary)',
                background: location.pathname === `/experiment/${experiment.id}` ? 'var(--gradient-primary)' : 'transparent',
                textDecoration: 'none',
                fontWeight: location.pathname === `/experiment/${experiment.id}` ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
            >
              <span className="experiment-number" style={{ marginRight: '10px', opacity: 0.7 }}>{experiment.exNo}.</span>
              {!isCollapsed && <span className="experiment-title">{experiment.title}</span>}
            </Link>

            {!isCollapsed && experiment.subExperiments && location.pathname.includes(experiment.id) && (
              <div className="sub-experiments" style={{ marginLeft: '20px', marginTop: '5px', borderLeft: '1px solid var(--border-color)', paddingLeft: '10px' }}>
                {experiment.subExperiments.map((subExp) => (
                  <Link
                    key={subExp._id}
                    to={`/experiment/${experiment.id}#${subExp.subNo}`}
                    className="sub-experiment-link"
                    style={{
                      display: 'block',
                      padding: '5px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      textDecoration: 'none'
                    }}
                  >
                    {subExp.subNo}. {subExp.title}
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
