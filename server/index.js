const express = require('express');
const cors = require('cors');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// CORS configuration
const allowedOrigins = ['https://lms-1-frontend-2.onrender.com']; // Add your frontend URL(s)

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Example route
app.post('/api/v1/user/login', (req, res) => {
  // Example response
  res.json({ message: 'Login route works!' });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
