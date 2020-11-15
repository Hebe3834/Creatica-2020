// to do list stuff
var taskIDs = 0;
function sayWelcome(name = 'hardworking person'){
  welcome.innerHTML = "No distractions from this point on, " + name + '!' + '<br>What will you be doing today?';
}
function createTask(){
  var task = document.getElementById("newTask").value;
  if(task){
    var row = document.createElement("tr");
    var box = document.createElement("td");
    var t = document.createTextNode('» '+task+' «');
    box.appendChild(t);
    row.appendChild(box);
    box.setAttribute("id", String(taskIDs));
    box.setAttribute("onclick", "oneDone("+ String(taskIDs) +")");
    box.setAttribute("ondblclick", "clearOne("+ String(taskIDs) +")");
    document.getElementById("toDo").appendChild(row);
    document.getElementById("newTask").value = "";
    taskIDs+=1;
  }
}
function clearAll(){
  document.getElementById("toDo").innerHTML = "";
}
function oneDone(id){
  document.getElementById(id).classList.toggle("done");
}
var lastTask = '';
function clearOne(id){
  let content = document.getElementById(id).innerHTML;
  lastTask = content.substring(2, content.length-2);
  document.getElementById(id).remove();
}
function restoreTask(){
  document.getElementById("newTask").value = lastTask;
  createTask();
  lastTask = '';
}
var username = prompt("Welcome to Acai! What's your name?")
var welcome = document.getElementById("welcome");
username ? sayWelcome(username) : sayWelcome(); 
document.addEventListener("keyup", function(event){
  if(event.keyCode === 13){
    document.getElementById("create").click();
  }
})



//mode things
function changeMode(){
  var theme = document.body;
  theme.classList.toggle("darkMode")
}
