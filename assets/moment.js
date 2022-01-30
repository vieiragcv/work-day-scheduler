var liveClock = window.setInterval(function () {
  $('#currentDay').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);  

var a = new Date('01/12/2016');
console.log(a);


var b = moment('01/12/2016', 'DD/MM/YYYY', true).format();
console.log(b);

