// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route for products API
app.get('/api/products', (req, res) => {
  // First, console log the required statement
  console.log("Fetching All Products");
  
  // Then send the HTML file from the VIEW folder
  res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Product Server! Navigate to /api/products to see the products page.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/products to see the products page`);
});// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route for products API
app.get('/api/products', (req, res) => {
  // First, console log the required statement
  console.log("Fetching All Products");
  
  // Then send the HTML file from the VIEW folder
  res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Product Server! Navigate to /api/products to see the products page.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/products to see the products page`);
});