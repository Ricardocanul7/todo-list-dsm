import Task from "./Task.js";
import TaskList from "./TaskList.js";

const taskList = new TaskList("task-list");

/* Remove when program gets ready to merge */
/* Only data to test */
taskList.add(new Task(null, "Hola Mundo", null));
taskList.add(new Task(null, "Hola guey", null));
taskList.add(new Task(null, "test", null));
taskList.add(new Task(null, "Que onda", null));
/* Only data to test */

const addTask = () => {
  let inputElement = document.getElementById("task-name"); //el input que guarda el nombre
  let element = inputElement.value; //guarda el valor del input

  if (element !== "") {
    let name = element.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let task = new Task(null, name, null);
    taskList.add(task); //manda como parametro al metodo add el nombre de la tarea
    inputElement.value = "";
    inputElement.placeholder = "Task Name";
    inputElement.parentElement.classList.remove("valvalueate");
  } else {
    inputElement.parentElement.classList.add("valvalueate");
    inputElement.placeholder = "Not empty";
  }
};

const Edit = (parametro) => {

  const Indice = parametro - 1;

  const btnEdit = document.querySelector(`.btn-edit[value="${parametro}"]`); //botn de edicion
  const btnSave = document.querySelector(`.btn-save[value="${parametro}"]`); //btnSave de guardado
  const inputEdit = document.querySelector(`.input-invisible[name="${parametro}"]`); //input de edicion
  const task = document.querySelector(`.nombre[value="${parametro}"]`);
  const Date = document.querySelector(`.ml-3.mr-3[value="${parametro}"]`);

  if (btnEdit) {
    btnEdit.classList.toggle("input-invisible");
    btnSave.classList.toggle("visible");
    inputEdit.classList.toggle("visible");
    task.classList.toggle("input-invisible");
  }
  if (btnSave) {
    btnSave.addEventListener("click", () => {
      if (btnEdit.style.display === "none") {
        btnEdit.classList.toggle("input-invisible");
        btnSave.classList.toggle("visible");
        inputEdit.classList.toggle("visible");
        task.classList.toggle("input-invisible");
      }
    });
  }

  if (inputEdit) {
    const object = { id: parseFloat(parametro), name: inputEdit.value, date: Date.textContent.trim() };
    if (inputEdit.value !== "") {
      taskList.edit(parseFloat(parametro), object);
    }
  }
};

const Delete = (parametro) => {
  taskList.delete(parseFloat(parametro));
}

const search = () => {
  let element = document.getElementById('text-search');
  let nameEnter = element.value.toLowerCase();
  let getBtnBack = document.getElementById('btn-back');

  if (nameEnter !== '') {
    element.value = "";
    element.placeholder = "Task Name";
    element.parentElement.classList.remove('validate');
    taskList.search(nameEnter);
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

  document.getElementById("task-name").addEventListener("keyup", () => {
    if (event.key === "Enter") {
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


  document.getElementById("task-list").addEventListener("click", (e) => {
    var btnSave = e.target.parentNode;
    // ...

    if (btnSave.name === "editar" || btnSave.name === "guardar") {
      Edit(parseFloat(btnSave.value));

    }
  });

  document.getElementById("task-list").addEventListener("click", (e) => {
    var btnDelete = e.target.parentNode;
    // ...

    if (btnDelete.name === "eliminar") {
      Delete(parseFloat(btnDelete.value));
    }
  });


};

// Initialize script
main();
