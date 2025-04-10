function add() {
    const taskInput = document.getElementById('tasks');
    const taskList = document.querySelector('.container');

    const taskText = taskInput.value.trim();

    if (taskText) {
        
        const taskItem = document.createElement('article');
        taskItem.classList.add('b1');
        taskItem.innerHTML = `<h3>${taskText}</h3>`;

        
        taskList.appendChild(taskItem);

        const locals = JSON.parse(localStorage.getItem("container")) || [];
        locals.push(taskText);
        localStorage.setItem("container", JSON.stringify(locals));
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

//THIS IS FOR REMOVING TASK FROM TASK LIST
function removeTask() {
    const taskListContainer = document.querySelector('.container'); // DOM element
    const savedTasks = JSON.parse(localStorage.getItem("container")) || [];

    if (savedTasks.length > 0) {
        savedTasks.pop(); // Remove last task from array
        localStorage.setItem("container", JSON.stringify(savedTasks)); // Update storage

        if (taskListContainer.lastChild) {
            taskListContainer.removeChild(taskListContainer.lastChild); // Remove from DOM
        }
    } else {
        alert('No tasks to remove!');
    }
}


window.onload = function() {
    const savedTasks = JSON.parse(localStorage.getItem("container")) || [];
    const taskListContainer = document.querySelector('.container');

    savedTasks.forEach(task => {
        const taskItem = document.createElement('article');
        taskItem.classList.add('b1');
        taskItem.innerHTML = `<h3>${task}</h3>`;
        taskListContainer.appendChild(taskItem);
    });
};


    


function addTask(taskText) {
    const art = document.createElement("p");
    art.textContent = taskText;
    listOfTask.appendChild(art)

}
