document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define addTask function to handle task creation and removal
    function addTask() {
        // Retrieve and trim input value
        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert("Please enter a task.");
            return;
        }

        // Create and configure new task elements
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(listItem);
        });

        // Append elements and clear input
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }

    // Attach event listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});