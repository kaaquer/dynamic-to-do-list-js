document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage on page load
    const loadTasks = () => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    };
    loadTasks();

    // Define addTask function to handle task creation and storage
    function addTask(taskText, save = true) {
        if (!taskText) {
            taskText = taskInput.value.trim();
            if (!taskText) {
                alert("Please enter a task.");
                return;
            }
        }
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(listItem);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const index = storedTasks.indexOf(taskText);
            if (index > -1) {
                storedTasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        });

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);
        if (save && taskText === taskInput.value.trim()) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
            taskInput.value = "";
        }
    }

    // Attach event listeners
    addButton.addEventListener("click", () => addTask());
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});