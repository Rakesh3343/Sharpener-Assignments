const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '3343',
  database: 'expense_db'
});

const db = pool.promise();

// Create expenses table if it doesn't exist
(async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS expenses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        amount DECIMAL(10, 2) NOT NULL,
        description VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL
      )
    `);
    console.log('✅ expenses table is ready');
  } catch (err) {
    console.error('❌ Error creating table:', err);
  }
})();

module.exports = db;
