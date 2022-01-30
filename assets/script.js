var editTask = function(value) {
  console.log('liveTime is: ' + liveTime);
  console.log('calendarTime is: ' + value);


  if (liveTime > value) {
    console.log('Oops, time machine not found');
    
  }
}


var taskEditHandler = function (event) {
  var targetEl = event.target;
 
  if (targetEl.className === "col-8 past") {
    var taskId = targetEl.id;
    console.log(taskId);
    console.log(targetEl);
  }
}

var createTask = function(value) {
  var taskEl = document.createElement("div");
  taskEl.className = "col-8";
  taskEl.id = "task"-value;
}
/* EDITS TASK NAME - text String as input */
/*
function changeTaskName (value) {
var taskEl = document.querySelector("#task-1");
taskEl.innerHTML ='';
console.log(taskEl);
taskEl.innerHTML = "<p>" + value + "</p>";
console.log(taskEl);
}

*/

/* JQUERY */




/* Event Listeners  */


/*
$(document).ready(function() {

  $('#task-1').dblclick(function() {
    taskEditHandler();
    console.log(x)
  });

});                         */

var taskEditEl = document.querySelector("#task-1");
taskEditEl.addEventListener('dblclick', taskEditHandler);
