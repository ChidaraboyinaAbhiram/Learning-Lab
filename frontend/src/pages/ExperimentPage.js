import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getExperimentById } from '../services/api';
import QuizComponent from '../components/Quiz/QuizComponent';

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

  if (loading) return <div>Loading...</div>;
  if (!experiment) return <div>Experiment not found.</div>;

  return (
    <div className="experiment-page">
      <h1>{experiment.title}</h1>
      <h2>Objective</h2>
      <p>{experiment.objective}</p>

      <h2>Theory</h2>
      <ul>
        {experiment.theory.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <h2>Sub Experiments</h2>
      {experiment.subExperiments.map((sub, idx) => (
        <div key={idx} className="sub-experiment">
          <h3>{sub.title}</h3>
          <p>{sub.description}</p>
          
          {/* Always show the QuizComponent */}
          {sub.quiz && (
            <QuizComponent
              quiz={sub.quiz}
              experimentId={experiment._id}
            />
          )}

          {/* Show code block always */}
          <div style={{ position: 'relative' }}>
            <pre>{sub.code}</pre>
            <button
              className="copy-btn"
              style={{ position: 'absolute', top: 8, right: 15 }}
              onClick={() => handleCopy(sub.code, idx)}
            >
              {copied[idx] ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperimentPage;
