/* Logs Current Hour */

var currentHour = moment().hours();

//Live Clock on Header 

var liveClock = window.setInterval(function () {
  $('#currentDay').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);  



