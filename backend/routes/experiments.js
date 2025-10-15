const express = require('express');
const router = express.Router();
const {
  getAllExperiments,
  getExperimentById,
  createExperiment,
  updateExperiment,
  deleteExperiment
} = require('../controllers/experimentController');

// GET /api/experiments - Get all experiments with optional search and pagination
router.get('/', getAllExperiments);

// GET /api/experiments/:id - Get experiment by ID or experiment number
router.get('/:id', getExperimentById);

// POST /api/experiments - Create new experiment
router.post('/', createExperiment);

// PUT /api/experiments/:id - Update experiment
router.put('/:id', updateExperiment);

// DELETE /api/experiments/:id - Delete experiment
router.delete('/:id', deleteExperiment);

module.exports = router;
