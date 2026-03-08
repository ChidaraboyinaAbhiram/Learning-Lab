import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import '../../styles/design-system.css';

const QuizComponent = ({ quiz, experimentId }) => {
  const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const { markExperimentComplete, refreshUser, isAuthenticated } = useAuth();

  const handleAnswer = (qIdx, aIdx) => {
    const answers = [...userAnswers];
    answers[qIdx] = aIdx;
    setUserAnswers(answers);
  };

  const handleSubmit = () => setShowResults(true);

  const handleMarkComplete = async () => {
    if (!isAuthenticated) {
      alert('Please login to track progress');
      return;
    }
    if (!experimentId) {
      alert('Experiment ID not found');
      return;
    }
    const result = await markExperimentComplete(experimentId);
    if (result.success) {
      setIsCompleted(true);
      await refreshUser();
      alert(`🎉 Experiment completed! +10 points! Total: ${result.data.points} pts`);
    } else {
      alert(result.error || 'Failed to mark as complete');
    }
  };

  const correct = quiz.filter((q, i) => userAnswers[i] === q.answer).length;

  return (
    <div className="quiz-container" style={{ marginTop: '20px' }}>
      {!showResults && (
        <>
          {quiz.map((q, idx) => (
            <div className='quiz-options' key={idx} style={{ marginBottom: '20px' }}>
              <strong style={{ display: 'block', marginBottom: '10px', color: 'var(--text-primary)' }}>{q.question}</strong>
              {q.options.map((opt, i) => (
                <label
                  className="quiz-option-label"
                  key={i}
                  style={{
                    display: 'block',
                    padding: '10px 15px',
                    marginBottom: '8px',
                    background: userAnswers[idx] === i ? 'rgba(0, 242, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                    border: userAnswers[idx] === i ? '1px solid var(--primary-color)' : '1px solid var(--border-color)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <input
                    type="radio"
                    checked={userAnswers[idx] === i}
                    onChange={() => handleAnswer(idx, i)}
                    style={{ marginRight: '10px' }}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button className='btn-primary' onClick={handleSubmit} style={{ width: '100%' }}>Submit Quiz</button>
        </>
      )}

      {showResults && (
        <div className="quiz-results" style={{ textAlign: 'center', padding: '20px', background: 'rgba(0, 255, 157, 0.1)', borderRadius: '12px', border: '1px solid var(--success-color)' }}>
          <h3 style={{ color: 'var(--success-color)', marginBottom: '10px' }}>Result: {correct} out of {quiz.length} correct</h3>
          <p>{correct >= Math.ceil(quiz.length * 0.6)
            ? '✅ You passed! Now see the experiment code below:'
            : '❌ Try again for more practice.'
          }</p>
        </div>
      )}

      {/* Button is ALWAYS visible! */}
      {isAuthenticated && !!experimentId && !isCompleted && (
        <button
          onClick={handleMarkComplete}
          className="btn-primary"
          style={{
            marginTop: '20px',
            width: '100%',
            background: 'linear-gradient(135deg, #00ff9d 0%, #00f2ff 100%)',
            color: '#000'
          }}
        >
          ✓ Mark as Complete & Earn 10 Points
        </button>
      )}
      {isCompleted && (
        <p className="completed-message" style={{ marginTop: '16px', textAlign: 'center', color: 'var(--success-color)', fontWeight: 'bold' }}>✅ Already completed!</p>
      )}
    </div>
  );
};

export default QuizComponent;
