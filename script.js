// Pre-step to make sure files are linked and js file is working
console.log("Hello World!");
$(document).ready(function() {

// Set variables

var containerEl = $(".container");
var currentDayEl = $("#currentDay");
var currentHourEl = moment().format("HH");
// console.log(currentHourEl);
let m = moment();

var todaysDate = (moment().format('MMMM Do YYYY, h:mm a'));
console.log(todaysDate);
currentDayEl.text(todaysDate);

var workHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

for (i = 0; i < workHours.length; i++) {
    console.log(workHours[i]);

    // dynamically creating a new row for the hours to display
    var rowEl = $("<div class='row'>");

    var hoursEl = $("<div class='col-sm-1 hour'>").text(workHours[i] + ":00");
    
    rowEl.append(hoursEl);

    containerEl.append(rowEl);

    // dynamically creating the text area to write our comments in
    var textAreaEl = $("<textarea class='description col-sm-10 time-block'>");
    textAreaEl.attr("data-hour", workHours[i]);
    rowEl.append(textAreaEl);
    containerEl.append(rowEl);

    // applying conditions to the text area for it to display the correct colors depending on the hour
    if (textAreaEl.attr("data-hour") == currentHourEl) {
        textAreaEl.addClass("present");
      } else if (textAreaEl.attr("data-hour") < currentHourEl) {
        textAreaEl.addClass("past");
      } else {
        textAreaEl.addClass("future");
      }

      // dynamically creating the save buttons for each text-block






}





});