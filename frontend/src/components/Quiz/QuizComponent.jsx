import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

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
    <div className="quiz-container">
      {!showResults && (
        <>
          {quiz.map((q, idx) => (
            <div className='quiz-options' key={idx}>
              <strong>{q.question}</strong>
              {q.options.map((opt, i) => (
                <label className="quiz-option-label" key={i}>
                  <input
                    type="radio"
                    checked={userAnswers[idx] === i}
                    onChange={() => handleAnswer(idx, i)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button className='quiz-submit-btn' onClick={handleSubmit}>Submit Quiz</button>
        </>
      )}

      {/* RESULT always visible if submitted */}
      {showResults && (
        <div className="quiz-results">
          <h3>Result: {correct} out of {quiz.length} correct</h3>
          <p>{correct >= Math.ceil(quiz.length * 0.6)
            ? '✅ You passed! Now see the experiment code below:'
            : '❌ Try again for more practice.'
          }</p>
        </div>
      )}

      {/* Always show the Mark as Complete Button below the results */}
      {isAuthenticated && !!experimentId && !isCompleted && (
        <button onClick={handleMarkComplete} className="complete-btn" style={{marginTop: '16px'}}>
          ✓ Mark as Complete & Earn 10 Points
        </button>
      )}
      {isCompleted && (
        <p className="completed-message" style={{marginTop: '16px'}}>✅ Already completed!</p>
      )}
    </div>
  );
};

export default QuizComponent;
