const Experiment = require('../models/Experiment');

// Get all experiments
const getAllExperiments = async (req, res) => {
  try {
    const { search, page = 1, limit = 10 } = req.query;
    const query = {};
    
    if (search) {
      query.$text = { $search: search };
    }
    
    const experiments = await Experiment.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ exNo: 1 })
      .select('-__v');
    
    const total = await Experiment.countDocuments(query);
    
    res.json({
      experiments,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get experiment by ID
const getExperimentById = async (req, res) => {
  try {
    const experiment = await Experiment.findOne({ 
      $or: [
        { id: req.params.id },
        { exNo: parseInt(req.params.id) || 0 }
      ]
    }).select('-__v');
    
    if (!experiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    
    res.json(experiment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new experiment
const createExperiment = async (req, res) => {
  try {
    const experiment = new Experiment(req.body);
    const savedExperiment = await experiment.save();
    res.status(201).json(savedExperiment);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Experiment with this ID or number already exists' });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

// Update experiment
const updateExperiment = async (req, res) => {
  try {
    const experiment = await Experiment.findOneAndUpdate(
      { 
        $or: [
          { id: req.params.id },
          { exNo: parseInt(req.params.id) || 0 }
        ]
      },
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!experiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    
    res.json(experiment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete experiment
const deleteExperiment = async (req, res) => {
  try {
    const experiment = await Experiment.findOneAndDelete({
      $or: [
        { id: req.params.id },
        { exNo: parseInt(req.params.id) || 0 }
      ]
    });
    
    if (!experiment) {
      return res.status(404).json({ message: 'Experiment not found' });
    }
    
    res.json({ message: 'Experiment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllExperiments,
  getExperimentById,
  createExperiment,
  updateExperiment,
  deleteExperiment
};
