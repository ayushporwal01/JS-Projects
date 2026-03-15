document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input')
    const addTaskBtn = document.getElementById('add-task-btn')
    const editBtn = document.getElementById('edit-btn')
    const deleteBtn = document.getElementById('delete-btn')
    const taskList = document.getElementById('task-list')

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    // Load tasks when page opens
    tasks.forEach(task => addTask(task))


    addTaskBtn.addEventListener("click", () => {
        if(taskInput.value.trim() === "") {
           alert("Please enter a task!")
           return
        }
        
        taskText = taskInput.value
        addTask(taskText)

        tasks.push(taskText)
        saveTasks()

        taskInput.value = ""
    })

    addTaskBtn.addEventListener("keydown", (e) => {
        if(e.key === 'Enter') {
           addTask()
        }
    })

    function addTask(taskText) {
        const li = document.createElement("li")

        li.innerHTML = 
        `<span>${taskText}</span>
        <div>
           <button id="edit-btn">Edit</button>
           <button id="delete-btn">Delete</button>
        </div>
        `

        taskList.appendChild(li)

        //Edit
        li.querySelector("#edit-btn").addEventListener("click", () => {
            const newText = prompt("Edit your task: ", taskText)

            if(newText) {
                li.querySelector("span").innerHTML = newText
            
                tasks = tasks.map(task => 
                    task === taskText ? newText : task
                )
            }
            saveTasks()
        })
     
        //Delete
        li.querySelector("#delete-btn").addEventListener("click", () => {
            li.remove()

            tasks = tasks.filter(task => task != taskText)
            
            saveTasks()
        })
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})