const express = require('express');
const router = express.Router();
const db = require('../db');

// Get list of students with their attendance for a specific date
router.get('/students', (req, res) => {
  const date = req.query.date;

  const sql = `
    SELECT s.id, s.name, a.status
    FROM students s
    LEFT JOIN attendance a ON s.id = a.student_id AND a.date = ?
  `;

  db.query(sql, [date], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// Mark attendance for students
router.post('/mark', (req, res) => {
  const { date, attendance } = req.body;

  const values = attendance.map(a => [a.id, date, a.status]);

  const sql = `
    INSERT INTO attendance (student_id, date, status)
    VALUES ?
    ON DUPLICATE KEY UPDATE status = VALUES(status)
  `;

  db.query(sql, [values], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Attendance marked' });
  });
});

// Get attendance report
router.get('/report', (req, res) => {
  const sql = `
    SELECT s.name,
           COUNT(a.id) AS total,
           SUM(a.status = 'present') AS present,
           ROUND(100 * SUM(a.status = 'present') / COUNT(a.id), 2) AS percentage
    FROM students s
    LEFT JOIN attendance a ON s.id = a.student_id
    GROUP BY s.id
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

module.exports = router;
