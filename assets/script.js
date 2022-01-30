/* Event Listeners  */
/* JQUERY */
var taskSlots = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var taskIds = [];
var clickedEl;
var taskID;

console.log(taskSlots);
console.log(document.getElementById('8am'));

function findMatchingDiv(value) {
  for(i=0; i < taskSlots.length; i++) {           // runs array of task hours
    var x = taskSlots[i];
    console.log(x);
    
    if( x === value){                           // if IDs match

    }
  }
}


$(document).ready(function(){
for(i=0; i < taskSlots.length; i++) {
  var x = "#" + taskSlots[i];
  $(x).click(function(event){
  alert('you have clicked');
  });
}
});
