const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const experimentRoutes = require('./routes/experiments');
const quizRoutes = require('./routes/quizzes');
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progress');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(morgan('combined'));

// ✅ FIXED: Single CORS configuration with all allowed origins
app.use(cors({
  origin: [
    'http://localhost:3000',  // For local development
    'https://learning-lab-seven.vercel.app',  // Your Vercel domain
    'https://learning-q5wa9xiy6-chidaraboyinaabhirams-projects.vercel.app'  // Current Vercel deployment
    // /https:\/\/.*\.vercel\.app$/  // All Vercel preview deployments (using regex)
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ❌ REMOVED: app.use(cors()); - This was overriding the previous CORS config

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/experiments', experimentRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Learning Lab API',
    endpoints: {
      experiments: '/api/experiments',
      health: '/api/health'
    }
  });
});

app.get('/api/experiments', async (req, res) => {
  try {
    const experiments = await Experiment.find();
    res.json(experiments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Learning Lab API is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📖 Learning Lab API: http://localhost:${PORT}/api`);
});

// ❌ REMOVED: The CORS config at the bottom - it was never executed because it's after app.listen()
