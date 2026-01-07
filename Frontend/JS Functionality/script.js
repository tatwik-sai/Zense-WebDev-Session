let taskCounter = 6;

// Add task functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const taskInput = document.querySelector('input[name="task"]');
    const taskList = document.querySelector('ul');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    });

    // Add event listeners to existing edit and delete buttons
    attachButtonListeners();
});

function addTask(taskText) {
    const taskList = document.querySelector('ul');
    const taskId = 'task' + taskCounter++;
    
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" id="${taskId}">
        <label for="${taskId}">${taskText}</label>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;
    
    taskList.appendChild(li);
    
    // Attach listeners to the new buttons
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    
    editBtn.addEventListener('click', function() {
        editTask(li);
    });
    
    deleteBtn.addEventListener('click', function() {
        deleteTask(li);
    });
}

function attachButtonListeners() {
    const allListItems = document.querySelectorAll('ul li');
    
    allListItems.forEach(function(li) {
        const buttons = li.querySelectorAll('button');
        const editBtn = buttons[0];
        const deleteBtn = buttons[1];
        
        editBtn.addEventListener('click', function() {
            editTask(li);
        });
        
        deleteBtn.addEventListener('click', function() {
            deleteTask(li);
        });
    });
}

function editTask(li) {
    const label = li.querySelector('label');
    const currentText = label.textContent;
    
    const newText = prompt('Edit your task:', currentText);
    
    if (newText !== null && newText.trim() !== '') {
        label.textContent = newText.trim();
    }
}

function deleteTask(li) {
    const label = li.querySelector('label');
    const taskText = label.textContent;
    
    const confirmDelete = confirm(`Are you sure you want to delete "${taskText}"?`);
    
    if (confirmDelete) {
        li.remove();
    }
}
