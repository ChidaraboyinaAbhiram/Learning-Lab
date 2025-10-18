const express = require('express');
const router = express.Router();
const Experiment = require('../models/Experiment');

// Submit quiz answers and get results
router.post('/submit/:expId/:subExpId', async (req, res) => {
  try {
    const { expId, subExpId } = req.params;
    const { answers } = req.body;
    
    const experiment = await Experiment.findOne({ 
      $or: [{ id: expId }, { exNo: parseInt(expId) || 0 }] 
    });
    
    if (!experiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    
    const subExperiment = experiment.subExperiments.find(sub => sub.subNo === subExpId);
    
    if (!subExperiment) {
      return res.status(404).json({ message: 'Sub-experiment not found' });
    }
    
    const quiz = subExperiment.quiz;
    let score = 0;
    const results = [];
    
    quiz.forEach((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === question.answer;
      if (isCorrect) score++;
      
      results.push({
        question: question.question,
        userAnswer: userAnswer,
        correctAnswer: question.answer,
        isCorrect: isCorrect,
        options: question.options
      });
    });
    
    const percentage = Math.round((score / quiz.length) * 100);
    
    res.json({
      score,
      total: quiz.length,
      percentage,
      results,
      passed: percentage >= 60
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;