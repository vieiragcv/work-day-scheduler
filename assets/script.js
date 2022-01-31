
var taskSlots = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var taskSlotsiD = ['#8am', '#9am', '#10am', '#11am', '#12pm', '#1pm', '#2pm', '#3pm', '#4pm', '#5pm', '#6pm'];
var taskSlotsNum = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var currentHour = moment().hours();


/*          CLICK TO RENAME TASK                       */

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

/*          SETS CORRECT COLOR CODING           */

for(i = 0; i < taskSlotsNum.length; i++){

  if (currentHour > taskSlotsNum[i]) {
    $(taskSlotsiD[i]).addClass('past');
    $(taskSlotsiD[i]).children('form').addClass('past form-8am').children('input').addClass('past');
    console.log('gray' + taskSlotsNum[i])
  }
  else if (currentHour < taskSlotsNum[i]) {
    $(taskSlotsiD[i]).addClass('future');
    $(taskSlotsiD[i]).children('form').addClass('future').children('input').addClass('future');
    console.log('green' + taskSlotsNum[i]);
  }
  else {
    $(taskSlotsiD[i]).addClass('present');
    $(taskSlotsiD[i]).children('form').addClass('present').children('input').addClass('present');
    console.log('red' + taskSlotsNum[i]);
  } 
}




/*                   MODAL                   */

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn"); // Get the button that opens the modal


var span = document.getElementsByClassName("close"); // Get the <span> element that closes the modal
console.log(span);


btn.onclick = function() {                // When the user clicks the button, open the modal 
  modal.style.display = "block";
}


span.onclick = function() {     // When the user clicks on <span> (x), close the modal
  modal.style.display = "none";
}


window.onclick = function(event) {     // When the user clicks anywhere outside of the modal, close it
  if (event.target == modal) {
  modal.style.display = "none";
  }
}