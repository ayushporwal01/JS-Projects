document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput')
    const addTaskBtn = document.getElementById('addTaskBtn')
    const editBtn = document.getElementById('editBtn')
    const deleteBtn = document.getElementById('deleteBtn')
    const taskList = document.getElementById('taskList')

    addTaskBtn.addEventListener("click", () => {
        if(taskInput.value.trim() === "") {
           alert("Please enter a task!")
           return;
        }

        addTaskBtn(taskInput.value)
        taskInput.value = ""

    })
})