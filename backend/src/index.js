const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Utility Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Core Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    env: process.env.NODE_ENV || 'development'
  });
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the MealBot API Server',
    docs: 'Check /docs for specifications and documentation mappings.'
  });
});

// API Routes placeholder structure
// app.use('/api/teams', require('./routes/teams'));
// app.use('/api/preferences', require('./routes/preferences'));
// app.use('/api/orders', require('./routes/orders'));
// app.use('/api/budget', require('./routes/budget'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
});

// Initialize server
const server = app.listen(PORT, () => {
  console.log(`[MealBot] Express server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});

module.exports = server;
