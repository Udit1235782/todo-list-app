// Add a new task to the list
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        
        // Add delete button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.style.background = '#FF0000';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.borderRadius = '3px';
        deleteBtn.style.cursor = 'pointer';

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        document.getElementById('new-task').value = ""; // Clear input
    }
});
