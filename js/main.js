import Task from './Task.js';
import TaskList from './TaskList.js';

const tasksArray = [
    /* Fake data */
    // remove all items in array when finished program.
    new Task(1, 'tarea 1', '20-07-2021'),
    new Task(2, 'tarea 6', '17-07-2021'),
    new Task(3, 'tarea 14', '08-05-2021'),
    /* End fake data */
];

const taskList = new TaskList('task-list', tasksArray);

/* Start function */
const main = () => {
}

// Initialize script
main();
