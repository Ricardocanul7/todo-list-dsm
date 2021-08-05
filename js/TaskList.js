import Task from './Task.js';
class TaskList {
    constructor(element_id, items) {
        this.element_id = element_id;
        /* items<Task> */
        this.items = items;
        this.autoincrementId = 1;
        this.name;

        this.update();
    }

    update() {
        let listElement = document.getElementById(this.element_id);
        listElement.innerHTML = '';
        let rawTextNodes = '';

        this.items.forEach(element => {
            rawTextNodes += `
            <div data-id="${element.id}">
                ${element.name}
                <small class="ml-3">
                    ${element.date}
                </small>
            </div>`;
        });

        listElement.innerHTML = rawTextNodes;
    }

    add(task) {
        /* Metodo add se encarga unicamente de guardar datos */
        let date = new Date();
        let hour = ('0' + date.getHours()).slice(-2);
        let minute = ('0' + date.getMinutes()).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let year = date.getFullYear();

        this.items.push(
            new Task(
                this.autoincrementId,
                task.name,
                task.date === null ? `${day}-${month}-${year}, ${hour}:${minute}` : task.date
            )
        );

        this.autoincrementId++;

        this.update();
    }

    edit(object_id) {
        /* code */

        this.update();
    }

    delete(object_id) {
        /* code */

        this.update();
    }

    search(nameEnter) {
        console.log('TaskList.js', nameEnter);
        const filtrado = this.items.filter(element => element.name.toLowerCase().indexOf(nameEnter) > -1);

        if (filtrado !== null) {
            let listElement = document.getElementById(this.element_id);
            listElement.innerHTML = '';
            let rawTextNodes = '';

            if (filtrado.length === 0) {
                rawTextNodes += 'No se encontró ningún resultado'
            } else {
                filtrado.forEach(element => {
                    rawTextNodes += `
                        <div data-id="${element.id}">
                            ${element.name}
                                <small class="ml-3">
                                    ${element.date}
                                </small>
                        </div>`;
                });
            }

            listElement.innerHTML = rawTextNodes;

        } else {
            this.update();
        }
    };
}

export default TaskList;