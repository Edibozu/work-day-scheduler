// Pre-step to make sure files are linked and js file is working
console.log("Hello World!");
$(document).ready(function() {

// Set variables

var containerEl = $(".container");
var currentDayEl = $("#currentDay");
let m = moment();

var todaysDate = (moment().format('MMMM Do YYYY, h:mm a'));
console.log(todaysDate);
currentDayEl.text(todaysDate);

var workHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (i = 0; i < workHours.length; i++) {
    console.log(workHours[i]);

    // dynamically creating a new row for the hours to display
    var rowEl = $("<div class='row'>");

    var hoursEl = $("<div class='col-sm-1 hour'>").text(workHours[i]);

    rowEl.append(hoursEl);

    containerEl.append(rowEl);

    // dynamically creating the text area to write our comments in
    var textAreaEl = $("<textarea class='description col-sm-10 time-block'>");
    textAreaEl.attr("data-hour", workHours[i]);
    rowEl.append(textAreaEl);
    containerEl.append(rowEl);







}





});