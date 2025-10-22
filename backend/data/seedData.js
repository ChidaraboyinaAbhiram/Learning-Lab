import 'dotenv/config';
import mongoose from 'mongoose';
import Experiment from './models/Experiment.js';
import experimentsData from './data/experiments.js';

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    seedDatabase();
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

async function seedDatabase() {
  try {
    const deleted = await Experiment.deleteMany({});
    console.log(`🗑️  Cleared ${deleted.deletedCount} existing experiments`);

    const inserted = await Experiment.insertMany(experimentsData);
    console.log(`✅ Inserted ${inserted.length} experiments`);

    mongoose.connection.close();
    console.log('👍 Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    mongoose.connection.close();
    process.exit(1);
  }
}
