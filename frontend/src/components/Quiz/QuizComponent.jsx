import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const QuizComponent = ({ quiz, onPass, experimentId }) => {
  const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const { markExperimentComplete, refreshUser, isAuthenticated } = useAuth();

  const handleAnswer = (qIdx, aIdx) => {
    const answers = [...userAnswers];
    answers[qIdx] = aIdx;
    setUserAnswers(answers);
  };

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
      console.log(`🎉 Experiment completed! +10 points! Total: ${result.data.points} pts`);
    } else {
      alert(result.error || 'Failed to mark as complete');
      console.log(result.error || 'Failed to mark as complete');
    }
  };

  return (
    <div className="quiz-container">
      {/* Render quiz as before */}
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
      {/* Mark as Complete BUTTON ALWAYS VISIBLE! */}
      {isAuthenticated && !!experimentId && !isCompleted && (
        <button onClick={handleMarkComplete} className="complete-btn">
          ✓ Mark as Complete & Earn 10 Points
        </button>
      )}
      {isCompleted && (
        <p className="completed-message">✅ Already completed!</p>
      )}
    </div>
  );
};

export default QuizComponent;
