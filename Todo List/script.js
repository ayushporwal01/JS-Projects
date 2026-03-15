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
        
        taskText = taskInput.value
        addTask(taskText)

        tasks.push(taskText)
        saveTasks()

        taskInput.value = ""
    })

    function addTask(taskText) {
        const li = document.createElement("li")

        li.innerHTML = 
        `<span>${taskText}</span>
        <div>
           <button class ="edit-btn">Edit</button>
           <button class ="delete-btn">Delete</button>
        </div>
        `

        taskList.appendChild(li)

        const editBtn = document.querySelector('.edit-btn')
        const deleteBtn = document.querySelector('.delete-btn')

        //Edit
        editBtn.addEventListener("click", () => {
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