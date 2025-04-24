// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for products API
app.get('/api/products', (req, res) => {
  // Send the HTML file from the VIEW folder
  res.sendFile(path.join(__dirname, 'VIEW', 'product-form.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Product Server! Navigate to /api/products to see the product form.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/products to see the product form`);
});