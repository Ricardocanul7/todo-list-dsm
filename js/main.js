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
  let inputElement = document.getElementById("task-name");
  let element = inputElement.value;

  if (element !== "") {
    let name = element.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let task = new Task(null, name, null);
    taskList.add(task);
    inputElement.value = "";
    inputElement.placeholder = "Task Name";
    inputElement.parentElement.classList.remove("valvalueate");
  } else {
    inputElement.parentElement.classList.add("valvalueate");
    inputElement.placeholder = "Not empty";
  }
};

const editTask = (id) => {
  const btnEdit = document.querySelector(`.btn-edit[value="${id}"]`);
  const btnSave = document.querySelector(`.btn-save[value="${id}"]`);
  const inputEdit = document.querySelector(`.input-invisible[name="${id}"]`);
  const task = document.querySelector(`.nombre[value="${id}"]`);
  const date = document.querySelector(`.ml-3.mr-3[value="${id}"]`);

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
    const object = new Task(
      parseInt(id),
      inputEdit.value,
      date.textContent.trim()
    );
    if (inputEdit.value !== "") {
      taskList.edit(parseInt(id), object);
    }
  }
};

const removeTask = (item_id) => {
  taskList.delete(parseInt(item_id));
}

const searchTask = () => {
  let searchInput = document.getElementById('text-search');
  let getBtnBack = document.getElementById('btn-back');

  if (searchInput.value !== '') {
    taskList.search(searchInput.value);
    searchInput.value = "";
    searchInput.placeholder = "Task Name";
    searchInput.parentElement.classList.remove('validate');
    getBtnBack.innerHTML = '<i class="fas fa-arrow-left" style="margin-right: 10px;"></i>'
  } else {
    searchInput.parentElement.classList.add('validate');
    searchInput.placeholder = "Not empty";
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
    searchTask();
  })

  document.getElementById('text-search').addEventListener('keyup', () => {
    if (event.key === 'Enter') {
      searchTask();
    }
  });

  document.getElementById('btn-back').addEventListener('click', () => {
    taskList.update();
    let getBtnBack = document.getElementById('btn-back');
    getBtnBack.innerHTML = ''
  })


  document.getElementById("task-list").addEventListener("click", (e) => {
    var btnClick = e.target;
    if(btnClick.value === undefined){
      btnClick = e.target.parentNode;
    }

    if (btnClick.name === "editar" || btnClick.name === "guardar") {
      editTask(parseInt(btnClick.value));
    }
    if (btnClick.name === "eliminar") {
      removeTask(parseInt(btnClick.value));
    }
  });
};

// Initialize script
main();
