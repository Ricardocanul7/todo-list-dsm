import Task from './Task.js';
import TaskList from './TaskList.js';

const taskList = new TaskList('task-list', []);

const addTask = () => {
    let inputElement = document.getElementById('task-name');
    let element = inputElement.value;

    if (element !== '') {
        let name = element.replace(/</g, '&lt;').replace(/>/g, '&gt;')
        let task = new Task(null, name, null);
        taskList.add(task);
        inputElement.value = "";
        inputElement.placeholder = "Task Name";
        inputElement.parentElement.classList.remove('validate');
    } else {
        inputElement.parentElement.classList.add('validate');
        inputElement.placeholder = "Not empty";
    }
}

/* Start function */
const main = () => {
    /* Events */
    document.getElementById('add-task').addEventListener('click', () => {
        addTask();
    });

    document.getElementById('task-name').addEventListener('keyup', () => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
}

// Initialize script
main();
