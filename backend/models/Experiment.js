const mongoose = require('mongoose');

const subExperimentSchema = new mongoose.Schema({
  subNo: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  quiz: [{
    question: String,
    options: [String],
    answer: Number
  }]
});

const experimentSchema = new mongoose.Schema({
  exNo: {
    type: Number,
    required: true,
    unique: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  objective: {
    type: String,
    required: true
  },
  theory: [{
    type: String
  }],
  subExperiments: [subExperimentSchema],
  tags: [{
    type: String
  }],
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  }
}, {
  timestamps: true
});

// Index for search functionality
experimentSchema.index({ 
  title: 'text', 
  objective: 'text', 
  'theory': 'text',
  'subExperiments.title': 'text',
  'subExperiments.description': 'text'
});

module.exports = mongoose.model('Experiment', experimentSchema);
