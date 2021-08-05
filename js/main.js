import Task from "./Task.js";
import TaskList from "./TaskList.js";

const taskList = new TaskList("task-list", []);

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

  const btnEdit = document.querySelectorAll(".btn-edit")[Indice]; //botn de edicion
  const btnSave = document.querySelectorAll(".btn-save")[Indice]; //btnSave de guardado
  const inputEdit = document.querySelectorAll(".input-invisible")[Indice]; //input de edicion
  const task = document.querySelectorAll(".nombre")[Indice];
  const Date = document.querySelectorAll('.ml-3.mr-3')[Indice];

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

    Edit(parseFloat(btnSave.value));
  });
};

// Initialize script
main();
