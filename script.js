// Pre-step to make sure files are linked and js file is working
console.log("Hello World!");
$(document).ready(function() {

// Set variables

var containerEl = $(".container");
var currentDayEl = $("#currentDay");
let m = moment();

var todaysDate = (moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(todaysDate);
currentDayEl.text(todaysDate);





});