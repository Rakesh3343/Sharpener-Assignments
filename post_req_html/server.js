// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// GET route to serve the form
app.get('/add-product', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST route to handle product addition
app.post('/api/products', (req, res) => {
  // Get product data from request body
  const productData = req.body;
  
  // Log the data on the server
  console.log('Product added:', productData);
  
  // Return the user-added product as a response
  res.status(201).json({
    message: 'Product added successfully',
    product: productData
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access the form at http://localhost:${PORT}/add-product`);
});