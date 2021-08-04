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
    inputElement.parentElement.classList.remove("validate");
  } else {
    inputElement.parentElement.classList.add("validate");
    inputElement.placeholder = "Not empty";
  }
};

const Edit = (parametro) => {
  // console.log("el parametro es " + parametro);
  const Indice = parametro - 1;

  const btnEdit = document.querySelectorAll(".btn-edit")[Indice]; //botn de edicion
  const btnSave = document.querySelectorAll(".btn-save")[Indice]; //btnSave de guardado
  const inputEdit = document.querySelectorAll(".input-invisible")[Indice]; //input de edicion
  const task = document.querySelectorAll(".nombre")[Indice];

  if (
    btnEdit.id === btnSave.id &&
    btnEdit.id === inputEdit.id &&
    btnEdit.id === task.id
  ) {
    btnEdit.classList.toggle("input-invisible");
    btnSave.classList.toggle("visible");
    inputEdit.classList.toggle("visible");
    task.classList.toggle("input-invisible");
  }

  btnSave.addEventListener("click", () => {
    if (btnEdit.getElementsByClassName.display === "none") {
      btnEdit.classList.toggle("input-invisible");
      btnSave.classList.toggle("visible");
      inputEdit.classList.toggle("visible");
      task.classList.toggle("input-invisible");
    }
  });

  if (inputEdit.value !== "") {
    taskList.edit(inputEdit.value, btnSave.id);
  }
};

/* Start function */
const main = () => {
  /* Events */
  document.getElementById("add-task").addEventListener("click", () => {
    addTask();
  });

  document.getElementById("task-name").addEventListener("keyup", () => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  document.getElementById("task-list").addEventListener("click", (e) => {
    var btnSave = e.target.parentNode;
    // ...
    
    Edit(btnSave.id);
  });
};

// Initialize script
main();
