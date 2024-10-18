// api/index.js
const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express server on Vercel!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
