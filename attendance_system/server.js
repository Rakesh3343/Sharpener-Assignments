const express = require('express');
const path = require('path');
const attendanceRoutes = require('./routes/attendance');

const app = express();

// Parse incoming JSON
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Use attendance API routes
app.use('/api/attendance', attendanceRoutes);

// Optional: test root route
// app.get('/', (req, res) => res.send('Server is running'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
