let tasks = [];

function addTask() {
    const name = document.getElementById('taskName').value;
    const description = document.getElementById('taskDesc').value;
    
    if (name === '' || description === '') return; // Prevent adding empty tasks

    const task = {
        id: Date.now(),
        name: name,
        description: description,
        completed: false
    };
    
    tasks.push(task);
    
    document.getElementById('taskName').value = '';
    document.getElementById('taskDesc').value = '';
    
    displayTasks();
}

function updateTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            break;
        }
    }
    displayTasks();
}

function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1); // Remove task from array
            break;
        }
    }
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');
    
    taskList.innerHTML = '';
    completedList.innerHTML = '';
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        taskDiv.innerHTML = `
            <span>${task.name}: ${task.description}</span>
            <div class="buttons">
                <button onclick="updateTask(${task.id})">✔</button>
                <button onclick="deleteTask(${task.id})">❌</button>
            </div>
        `;
        
        if (task.completed) {
            taskDiv.classList.add('completed');
            completedList.appendChild(taskDiv);
        } else {
            taskList.appendChild(taskDiv);
        }
    }
}
