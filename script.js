document.addEventListener("DOMContentLoaded", ()=>{
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.querySelector("#task-input");
    const taskList = document.querySelector("#task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            const RemoveBtn = document.createElement("button");
            
            // Set the text content of the list item to the task text
            listItem.textContent = taskText;
            
            // Configure the remove button
            RemoveBtn.classList.add('remote-btn');
            RemoveBtn.textContent = "Remove";
            RemoveBtn.addEventListener("click", () => {
                taskList.removeChild(listItem);
            });
            
            // Append the remove button to the list item
            listItem.appendChild(RemoveBtn);
            
            // Append the list item to the task list
            taskList.appendChild(listItem);
            
            // Clear the input field
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Add event listener for the add button
    addButton.addEventListener("click", addTask);
    
    // Add event listener for the Enter key press on input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});