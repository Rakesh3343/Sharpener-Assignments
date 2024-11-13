document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    // Array to hold expenses
    let expenses = [];

    // This will keep track of the index of the expense being edited
    let editingIndex = null;

    // Function to display the expenses list
    function displayExpenses() {
        expenseList.innerHTML = '';  // Clear existing list

        expenses.forEach((expense, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>Amount:</strong> $${expense.amount} 
                <strong>Description:</strong> ${expense.description} 
                <strong>Category:</strong> ${expense.category}
                <button onclick="editExpense(${index})">Edit</button>
                <button onclick="deleteExpense(${index})">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    // Add new expense or save edited expense
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const amount = document.getElementById("exp_amount").value;
        const description = document.getElementById("exp_des").value;
        const category = document.getElementById("exp_cat").value;

        if (editingIndex === null) {
            // Adding a new expense
            const newExpense = { amount, description, category };
            expenses.push(newExpense);
        } else {
            // Editing an existing expense
            expenses[editingIndex] = { amount, description, category };
            // Reset editing index after update
            editingIndex = null;
        }

        // Reset the form fields
        form.reset();

        // Display the updated list of expenses
        displayExpenses();
    });

    // Edit expense
    window.editExpense = function(index) {
        const expense = expenses[index];
        
        // Pre-fill the form with the expense details
        document.getElementById("exp_amount").value = expense.amount;
        document.getElementById("exp_des").value = expense.description;
        document.getElementById("exp_cat").value = expense.category;

        // Set the editingIndex to the index of the expense being edited
        editingIndex = index;

        // Change the submit button to "Save Expense"
        form.querySelector("input[type='submit']").value = "Save Expense";
    };

    // Delete expense
    window.deleteExpense = function(index) {
        expenses.splice(index, 1);  // Remove the expense from the array
        displayExpenses();  // Update the list display
    };

    // Display initial list of expenses
    displayExpenses();
});
