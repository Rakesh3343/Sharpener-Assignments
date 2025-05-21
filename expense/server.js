const express = require('express');
const app = express();
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/expenses', expenseRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
