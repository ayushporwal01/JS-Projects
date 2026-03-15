document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput')
    const addTaskBtn = document.getElementById('add-task-btn')
    const editBtn = document.getElementById('edit-btn')
    const deleteBtn = document.getElementById('delete-btn')
    const taskList = document.getElementById('taskList')

    addTaskBtn.addEventListener("click", () => {
        if(taskInput.value.trim() === "") {
           alert("Please enter a task!")
           return
        }

        addTaskBtn(taskInput.value)
        taskInput.value = ""
    })

    function addTask(taskText) {
        const li = document.createElement("li")

        li.innerHTML = 
        `<span>{${taskText}</span>
        <div>
           <button id="edit-btn">Edit</button>
           <button id="delete-btn">Delete</button>
        </div>
        `
    }
})