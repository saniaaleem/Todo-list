let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task == "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);
    input.value = "";
    showTasks();
}

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += "<li>" + tasks[i] + 
            "<div><button onclick='editTask(" + i + ")'>Edit</button>" +
            "<button onclick='deleteTask(" + i + ")'>Delete</button></div></li>";
    }
}

function editTask(index) {
    let newTask = prompt("Edit your task", tasks[index]);
    if (newTask != "" && newTask != null) {
        tasks[index] = newTask;
        showTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}

function resetList() {
    tasks = [];
    showTasks();
}
