

function add() {

    const taskInput = document.getElementById('tasks');
    const taskList = document.querySelector('.container');

    
    const taskText = taskInput.value.trim();

   
    if (taskText) {
       
        const taskItem = document.createElement('article');
        taskItem.classList.add('b1');
        taskItem.innerHTML = `<h3>${taskText}</h3>`;

       
        taskList.appendChild(taskItem);

        
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}


function removeTask() {
    const taskList = document.querySelector('.container');
    
    if (taskList.lastElementChild) {
        taskList.removeChild(taskList.lastElementChild);
    } else {
        alert('No tasks to remove!');
    }
}
