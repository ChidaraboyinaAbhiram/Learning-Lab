import React, { useState } from 'react';

const QuizComponent = ({ quiz, onPass }) => {
  const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (qIdx, aIdx) => {
    const answers = [...userAnswers];
    answers[qIdx] = aIdx;
    setUserAnswers(answers);
  };

  const handleSubmit = () => {
    setShowResults(true);
    const correct = quiz.filter((q, i) => userAnswers[i] === q.answer).length;
    if (correct >= Math.ceil(quiz.length * 0.6)) { // 60% required
      onPass();
    }
  };

  if (showResults) {
    const correct = quiz.filter((q, i) => userAnswers[i] === q.answer).length;
    return (
      <div>
        <h3>Result: {correct} out of {quiz.length} correct</h3>
        {correct >= Math.ceil(quiz.length * 0.6) ? (
          <p>✅ You passed! Now see the experiment code below:</p>
        ) : (
          <p>❌ Try again for more practice.</p>
        )}
      </div>
    );
  }

  return (
    <div>
      {quiz.map((q, idx) => (
        <div className='quiz-options' key={idx}>
          <strong>{q.question}</strong>
          {q.options.map((opt, i) => (
            <label className ="quiz-option-label" key={i}>
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
    </div>
  );
};

export default QuizComponent;
