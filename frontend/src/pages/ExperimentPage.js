import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getExperimentById } from '../services/api';
import QuizComponent from '../components/Quiz/QuizComponent';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/design-system.css';

const ExperimentPage = () => {
  const { id } = useParams();
  const [experiment, setExperiment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState({});

  useEffect(() => {
    const fetchExperiment = async () => {
      try {
        const data = await getExperimentById(id);
        setExperiment(data);
      } catch (err) {
        setExperiment(null);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiment();
  }, [id]);

  // Copy code handler for each sub-experiment code block
  const handleCopy = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopied(prev => ({ ...prev, [idx]: true }));
    setTimeout(() => setCopied(prev => ({ ...prev, [idx]: false })), 1200);
  };

  if (loading) return (
    <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
      <div className="neon-text">Loading experiment...</div>
    </div>
  );

  if (!experiment) return (
    <div className="container" style={{ paddingTop: '100px', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--error-color)' }}>Experiment not found.</h2>
    </div>
  );

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px' }}>
        <h1 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{experiment.title}</h1>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: 'var(--primary-color)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Objective</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{experiment.objective}</p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: 'var(--secondary-color)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Theory</h2>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)' }}>
            {experiment.theory.map((point, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="neon-text" style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2rem' }}>Sub Experiments</h2>

      {experiment.subExperiments.map((sub, idx) => (
        <div key={idx} className="glass-panel" style={{ padding: '30px', marginBottom: '40px', borderLeft: '4px solid var(--primary-color)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{sub.title}</h3>
          <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>{sub.description}</p>

          {/* Code Block */}
          <div style={{ position: 'relative', marginBottom: '30px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              padding: '8px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>CODE</span>
              <button
                onClick={() => handleCopy(sub.code, idx)}
                style={{
                  background: 'transparent',
                  color: copied[idx] ? 'var(--success-color)' : 'var(--text-primary)',
                  fontSize: '0.8rem',
                  padding: '4px 8px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px'
                }}
              >
                {copied[idx] ? "✓ Copied!" : "Copy Code"}
              </button>
            </div>
            <SyntaxHighlighter
              language="python"
              style={atomDark}
              customStyle={{ margin: 0, borderRadius: 0, background: '#0f0f1a' }}
            >
              {sub.code}
            </SyntaxHighlighter>
          </div>

          {/* Quiz Component */}
          {sub.quiz && (
            <div style={{ marginTop: '20px' }}>
              <QuizComponent
                quiz={sub.quiz}
                experimentId={experiment._id}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperimentPage;
