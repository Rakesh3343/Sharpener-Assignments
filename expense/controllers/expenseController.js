const db = require('../models/db');

// Get all expenses
exports.getExpenses = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM expenses");
  res.json(rows);
};

// Add a new expense
exports.addExpense = async (req, res) => {
  const { amount, description, category } = req.body;
  await db.query("INSERT INTO expenses (amount, description, category) VALUES (?, ?, ?)", [amount, description, category]);
  res.json({ message: 'Expense added' });
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM expenses WHERE id = ?", [id]);
  res.json({ message: 'Expense deleted' });
};

// Edit expense
exports.editExpense = async (req, res) => {
  const { id } = req.params;
  const { amount, description, category } = req.body;
  await db.query("UPDATE expenses SET amount = ?, description = ?, category = ? WHERE id = ?", [amount, description, category, id]);
  res.json({ message: 'Expense updated' });
};
