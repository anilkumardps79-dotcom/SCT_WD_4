let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function addTask(){

const taskInput =
document.getElementById("taskInput");

const taskDate =
document.getElementById("taskDate");

const taskTime =
document.getElementById("taskTime");

if(taskInput.value.trim()===""){
alert("Enter a task");
return;
}

tasks.push({
text:taskInput.value,
date:taskDate.value,
time:taskTime.value,
completed:false
});

saveTasks();

taskInput.value="";
taskDate.value="";
taskTime.value="";
}

function renderTasks(){

const taskList =
document.getElementById("taskList");

taskList.innerHTML="";

tasks.forEach((task,index)=>{

const li =
document.createElement("li");

li.className="task-item";

li.innerHTML=`
<div class="${task.completed ? "completed" : ""}">
<strong>${task.text}</strong><br>
📅 ${task.date || "No Date"} |
⏰ ${task.time || "No Time"}
</div>

<div class="actions">
<button class="complete"
onclick="toggleComplete(${index})">
✓
</button>

<button class="edit"
onclick="editTask(${index})">
Edit
</button>

<button class="delete"
onclick="deleteTask(${index})">
Delete
</button>
</div>
`;

taskList.appendChild(li);

});

}

function toggleComplete(index){

tasks[index].completed =
!tasks[index].completed;

saveTasks();
}

function editTask(index){

let newTask =
prompt(
"Edit Task",
tasks[index].text
);

if(newTask){

tasks[index].text =
newTask;

saveTasks();
}

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();
}

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

renderTasks();
}