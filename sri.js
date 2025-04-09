



function add() {
    const taskInput = document.getElementById('tasks');
    const taskList = document.querySelector('.container');

    const taskText = taskInput.value.trim();

    if (taskText) {
        // Create a new task item
        const taskItem = document.createElement('article');
        taskItem.classList.add('b1');
        taskItem.innerHTML = `<h3>${taskText}</h3>`;

        // Add the new task to the DOM
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
    const taskList = JSON.parse(localStorage.getItem("container")) || [];

    if (taskList.length > 0) {
        taskList.pop();
        localStorage.setItem("container", JSON.stringify(taskList));

        taskList.removeChild(taskList.lastChild);

    } else {
        alert('No tasks to remove!');
    }
}

function addTask(taskText) {
    const art = document.createElement("p");
    art.textContent = taskText;
    listOfTask.appendChild(art)

}