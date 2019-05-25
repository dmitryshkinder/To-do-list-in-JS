let addTaskBtn = document.querySelector('.add-task-icon');
let inputTask = document.querySelector('.write-task-input');
let taskList = document.querySelector('.to-do-list');
let deleteTaskBtn = document.querySelector('.close-icon');
let taskElement = document.querySelector('to-do-list-item');

function addTask() {
  let textValue = inputTask.value;
  let li = document.createElement('li');
  li.classList.add('to-do-list-item');
  let inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.classList.add('checkbox');
  let p = document.createElement('p');
  p.innerText = textValue;
  li.appendChild(inputCheckbox);
  li.appendChild(p);
  taskList.appendChild(li);
}

function deleteTask(e) {
  taskElement.e.target.style.display = none;
}

addTaskBtn.addEventListener('click', function() {
  let textValue = inputTask.value;
  if (inputTask.value === '') {
    alert("You're not write task");
  } else {
    addTask();
  }
});

deleteTaskBtn.addEventListener('click', function(e) {
  deleteTask(e);
});
