document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input')
    const addTaskBtn = document.getElementById('add-task-btn')
    const taskList = document.getElementById('task-list')

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    // Load tasks when page opens
    tasks.forEach(task => addTask(task))

    addTaskBtn.addEventListener("click", () => {
        if(taskInput.value.trim() === "") {
           alert("Please enter a task!")
           return
        }
        
        let taskText = taskInput.value
        addTask(taskText)

        tasks.push(taskText)
        saveTasks()

        taskInput.value = ""
    })

    //Add Task On Enter Key
    taskInput.addEventListener('keydown', (e) => {
        if(e.key === "Enter") {
           addTaskBtn.click()
        }
    })

    function addTask(taskText) {
        const li = document.createElement("li")
        const isMobile = window.matchMedia("(max-width: 600px)").matches

        const editLabel = isMobile ? "✏️" : "Edit"
        const deleteLabel = isMobile ? "🗑️" : "Delete"

        li.innerHTML = `
        <span>${taskText}</span>
        <div>
        <button class="edit-btn">${editLabel}</button>
        <button class="delete-btn">${deleteLabel}</button>
        </div>
        `

        li.innerHTML = 
        `<span>${taskText}</span>
        <div>
           <button class="edit-btn">Edit</button>
           <button class="delete-btn">Delete</button>
        </div>
        `

        taskList.appendChild(li)

        const editBtn = li.querySelector('.edit-btn')
        const deleteBtn = li.querySelector('.delete-btn')

        //Edit
        editBtn.addEventListener("click", () => {
            const newText = prompt("Edit your task: ", taskText)

            if(newText) {
                li.querySelector("span").textContent = newText
            
                tasks = tasks.map(task => 
                    task === taskText ? newText : task
                )
            }
            saveTasks()
        })
     
        //Delete
        deleteBtn.addEventListener("click", () => {
            li.remove()

            tasks = tasks.filter(task => task != taskText)
            
            saveTasks()
        })
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})