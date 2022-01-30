var editTask = function(value) {
  console.log('liveTime is: ' + liveTime);
  console.log('calendarTime is: ' + value);


  if (liveTime > value) {
    console.log('Oops, time machine not found');
    
  }
}

/* function open a label, takes input from user,
 executes changeTaskName ('user-input) */

//function editLabel() {}


/* EDITS TASK NAME - text String as input */

function changeTaskName (value) {
var taskEl = document.querySelector("#task-1");
taskEl.innerHTML ='';
console.log(taskEl);
taskEl.innerHTML = "<p>" + value + "</p>";
console.log(taskEl);
}
changeTaskName('Hello');


/* JQUERY */


$(document).ready(function() {

  $('#task-1').dblclick(function() {
    var x = $('#task-1').html();
    console.log(x)
  });

});

/* checks if task clicked is in the past  */


