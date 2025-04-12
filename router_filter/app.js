// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an express application
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a router
const booksRouter = express.Router();

// GET /books route
booksRouter.get('/', (req, res) => {
  console.log('GET request received for books');
  res.status(200).json({ message: 'Here is the list of books!' });
});

// POST /books route
booksRouter.post('/', (req, res) => {
  console.log('Book data received:', req.body);
  res.status(201).json({ message: 'Book has been added!' });
});

// Register the router with a prefix
app.use('/books', booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});