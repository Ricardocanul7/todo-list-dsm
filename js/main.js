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

const search = () => {
    let element = document.getElementById('text-search');
    let nameEnter = element.value.toLowerCase();
    let getBtnBack = document.getElementById('btn-back');

    if (nameEnter !== '') {
        element.value = "";
        element.placeholder = "Task Name";
        element.parentElement.classList.remove('validate');
        taskList.search(nameEnter)
        console.log('main.js', nameEnter);
        getBtnBack.innerHTML = '<i class="fas fa-arrow-left" style="margin-right: 10px;"></i>'

    } else {
        element.parentElement.classList.add('validate');
        element.placeholder = "Not empty";
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

    document.getElementById('search-task').addEventListener('click', () => {
        search()
    })

    document.getElementById('text-search').addEventListener('keyup', () => {
        if (event.key === 'Enter') {
            search();
        }
    });

    document.getElementById('btn-back').addEventListener('click', () => {
        taskList.update();
        let getBtnBack = document.getElementById('btn-back');
        getBtnBack.innerHTML = ''
    })
}

// Initialize script
main();
