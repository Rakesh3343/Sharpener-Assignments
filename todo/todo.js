const API_URL = 'https://crudcrud.com/api/e2361eb4ce3045faa5452213cb24c359/tasks'; 

let tasks = []; // Store tasks locally

async function fetchTasks() {
        const response = await fetch(API_URL);
        tasks = await response.json();
        displayTasks();

}

async function addTask() {
    const name = document.getElementById('taskName').value;
    const description = document.getElementById('taskDesc').value;
    if (!name || !description) return;

    const task = { name, description, completed: false };
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        if (response.ok) fetchTasks();

}

async function updateTask(id) {
    const task = tasks.find(t => t._id === id);
    if (!task) return;

    const updatedTask = { name: task.name, description: task.description, completed: true }; // Exclude _id

        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
        });
        fetchTasks();
}

async function deleteTask(id) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        fetchTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');
    taskList.innerHTML = '';
    completedList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <span>${task.name}: ${task.description}</span>
            <div class="buttons">
                ${task.completed ? '' : `<button onclick="updateTask('${task._id}')">✔</button>`}
                <button onclick="deleteTask('${task._id}')">❌</button>
            </div>
        `;
        
        if (task.completed) {
            taskDiv.classList.add('completed');
            completedList.appendChild(taskDiv);
        } else {
            taskList.appendChild(taskDiv);
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchTasks);
