var liveClock = window.setInterval(function () {
  $('#clock').html(moment().format('ddd MM/DD/y H:mm:ss'))
}, 1000);  

var a = new Date('01/12/2016');
console.log(a);
console.log();

var b = moment('01/12/2016', 'DD/MM/YYYY', true).format();
console.log(b);