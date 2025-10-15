const mongoose = require('mongoose');
const Experiment = require('../models/Experiment');
const experiments = require('./experiments'); // Correct path

require('dotenv').config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/labbooks', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Remove existing
    await Experiment.deleteMany({});
    console.log('Old experiments removed');

    // Insert all with nested data
    await Experiment.insertMany(experiments);
    console.log(`Inserted ${experiments.length} experiments`);

    process.exit(0);
  } catch (err) {
    console.error('Error seeding experiments:', err);
    process.exit(1);
  }
};

// Only run if directly called
if (require.main === module) seedDatabase();
