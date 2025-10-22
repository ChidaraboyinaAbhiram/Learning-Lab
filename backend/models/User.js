const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: true,
    trim: true,
    minlength: 3
  },
  email: { 
    type: String, 
    unique: true, 
    required: true,
    trim: true,
    lowercase: true
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6
  },
  completedExperiments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Experiment' 
  }],
  points: { 
    type: Number, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('User', userSchema);
