const express = require('express');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');
const app = express();
const port = 3000;




// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start the server
// Start server
const startServer = () => {
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  };

  module.exports = { app, startServer };

if (require.main === module) {
  startServer();
}