import Task from "./Task.js";
class TaskList {
  constructor(element_id, items) {
    this.element_id = element_id;
    /* items<Task> */
    this.items = items;
    this.autoincrementId = 1;

    this.update();
  }

  update() {
    let listElement = document.getElementById(this.element_id);

    listElement.innerHTML = "";
    let rawTextNodes = "";

    this.items.forEach((element) => {
      rawTextNodes += `
            <div data-id="${element.id}" class="items">
            <input type='text' class='input-invisible' id="${element.id}"></input>
                <p class='nombre' id="${element.id}" >${element.name}</p>
                <small class="ml-3 mr-3">
                    ${element.date}
                </small>
               
                <button class="btn-edit" id="${element.id}"><i class="fas fa-edit"></i></button>
                <button class="btn-save" id="${element.id}"><i class="fas fa-save"></i></button>

            </div>
            `;
    });

    listElement.innerHTML = rawTextNodes;
  }

  //add recibe el nombre de la tarea como parametro
  add(task) {
    /* Metodo add se encarga unicamente de guardar datos */
    let date = new Date();
    let hour = ("0" + date.getHours()).slice(-2);
    let minute = ("0" + date.getMinutes()).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();

    //agrega al array los datos del constructor
    this.items.push(
      new Task(
        this.autoincrementId,
        task.name,
        task.date === null
          ? `${day}-${month}-${year}, ${hour}:${minute}`
          : task.date
      )
    );

    this.autoincrementId++;

    this.update();
  }

  edit(object_id, idBtn) {
    /* code */

    const indice = idBtn - 1;
    // console.log('indice es '+indice)
    const neName = object_id;
    this.items[indice].name = neName;
    console.log(this.items);
    this.update();
  }

  delete(object_id) {
    /* code */

    this.update();
  }
}

export default TaskList;
