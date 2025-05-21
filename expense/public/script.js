document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    let editingId = null;

    async function fetchExpenses() {
        const res = await fetch('/api/expenses');
        const expenses = await res.json();
        displayExpenses(expenses);
    }

    function displayExpenses(expenses) {
        expenseList.innerHTML = '';
        expenses.forEach(exp => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>Amount:</strong> $${exp.amount}
                <strong>Description:</strong> ${exp.description}
                <strong>Category:</strong> ${exp.category}
                <button onclick="editExpense(${exp.id}, '${exp.amount}', '${exp.description}', '${exp.category}')">Edit</button>
                <button onclick="deleteExpense(${exp.id})">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const amount = document.getElementById("exp_amount").value;
        const description = document.getElementById("exp_des").value;
        const category = document.getElementById("exp_cat").value;

        if (editingId) {
            await fetch(`/api/expenses/${editingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, description, category })
            });
            editingId = null;
            form.querySelector("input[type='submit']").value = "Add Expense";
        } else {
            await fetch('/api/expenses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount, description, category })
            });
        }

        form.reset();
        fetchExpenses();
    });

    window.editExpense = function(id, amount, description, category) {
        document.getElementById("exp_amount").value = amount;
        document.getElementById("exp_des").value = description;
        document.getElementById("exp_cat").value = category;
        editingId = id;
        form.querySelector("input[type='submit']").value = "Save Expense";
    };

    window.deleteExpense = async function(id) {
        await fetch(`/api/expenses/${id}`, { method: 'DELETE' });
        fetchExpenses();
    };

    fetchExpenses();
});
