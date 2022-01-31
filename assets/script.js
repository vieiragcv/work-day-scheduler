/* Event Listeners  */
/* JQUERY */
var taskSlots = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var taskSlotsiD = ['#8am', '#9am', '#10am', '#11am', '#12pm', '#1pm', '#2pm', '#3pm', '#4pm', '#5pm', '#6pm'];
var taskSlotsNum = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var currentHour = moment().hours();

$(document).ready(function(){
for(i=0; i < taskSlots.length; i++) {

  var x = "#" + taskSlots[i];
  $(x).dblclick(function(){

  

    $(this).children().remove();

   
    var createEl = document.createElement("input");
    createEl.className = '';
    createEl.type = 'text';
    createEl.value = 'hello hello hello';
    this.append(createEl);
    

    //alert('you have clicked');
  });
}
});

for(i = 0; i < taskSlotsNum.length; i++){
  
  if (currentHour > taskSlotsNum[i]) {
    $(taskSlotsiD[i]).addClass('past');
    console.log('gray' + taskSlotsNum[i])
  }
  else if (currentHour < taskSlotsNum[i]) {
    $(taskSlotsiD[i]).addClass('future');
    console.log('green' + taskSlotsNum[i]);
  }
  else {
    $(taskSlotsiD[i]).addClass('present');
    console.log('red' + taskSlotsNum[i]);
  } 
}







/* MODAL */

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
console.log(span);

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
  modal.style.display = "none";
  }
}