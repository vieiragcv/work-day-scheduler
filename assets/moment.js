var liveTime = moment().hours();


var editTask = function(value) {
  console.log('liveTime is: ' + liveTime);
  console.log('calendarTime is: ' + value);
  if (liveTime > value) {
    console.log('Oops, time machine not found');
    
  }
}

/* checks if the hour value on the live clock is higher than hour interval  */

var clickEl = document.querySelector("#clickTest");

console.log(clickEl);

var liveClock = window.setInterval(function () {
  $('#currentDay').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);  
