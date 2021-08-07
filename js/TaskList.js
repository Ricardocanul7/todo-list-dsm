import Task from "./Task.js";
class TaskList {
  constructor(element_id) {
    this.element_id = element_id;
    /* items<Task> */
    this.items = [];
    this.autoincrementId = 1;

    this.update();
  }

  update(optional_list = null) {
    let listElement = document.getElementById(this.element_id);
    listElement.innerHTML = "";
    let rawTextNodes = "";

    let mainList = [];
    if (optional_list !== null) {
      mainList = [...optional_list];
    }
    else {
      mainList = [...this.items];
    }

    if (mainList.length === 0) {
      rawTextNodes = "No se encontró ningún resultado";
    } else {
      mainList.forEach((element) => {
        rawTextNodes += `
              <div data-id="${element.id}" >
              <input type='text' class='form-control input-invisible' name="${element.id}"></input>
                  <p class='nombre' value="${element.id}" >${element.name}</p>
                  <small class="ml-3 mr-3" value="${element.id}">
                      ${element.date}
                  </small>
                 
                  <button class="btn-edit" value="${element.id}" name="editar"><i class="fas fa-edit"></i></button>
                  <button class="btn-save" value="${element.id}" name="guardar"><i class="fas fa-save"></i></button>
                  <button class="btn btn-danger " value="${element.id}" name="eliminar"><i class="fas fa-trash-alt"></i></button>
              </div>
              `;
      });
    }


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

  edit(object_id, task) {
    this.items = this.items.map((item) => {
      if (item.id === object_id) {
        task.id = item.id;
        return task;
      }
      return item;
    });

    this.update();
  }

  delete(object_id) {
    /* code */
    this.items = this.items.filter((i) => i.id !== object_id);
    this.update();
  }

  search(name) {
    const filtrado = this.items.filter(
      (item) => (item.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
    );

    if (filtrado !== null) {
      this.update(filtrado);
    } else {
      this.update();
    }
  }
}

export default TaskList;
