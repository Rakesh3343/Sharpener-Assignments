// Import required modules
const express = require('express');

// Creating Express application
const app = express();
const port = 3000;

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const courses = [
  { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
  { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// Home route
app.get('/', (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Student Router
const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
  const studentNames = students.map(student => student.name).join(', ');
  res.send(`Students: ${studentNames}`);
});

studentRouter.get('/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);
  
  if (student) {
    res.send(`Student: ${student.name}`);
  } else {
    res.send("Student not found");
  }
});

// Course Router
const courseRouter = express.Router();

courseRouter.get('/', (req, res) => {
  const courseNames = courses.map(course => course.name).join(', ');
  res.send(`Courses: ${courseNames}`);
});

courseRouter.get('/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);
  
  if (course) {
    res.send(`Course: ${course.name}, Description: ${course.description}`);
  } else {
    res.send("Course not found");
  }
});

// Register routes
app.use('/students', studentRouter);
app.use('/courses', courseRouter);

// 404 Not Found handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});