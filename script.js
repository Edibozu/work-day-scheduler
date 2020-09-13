// Pre-step to make sure files are linked and js file is working
console.log("Hello World!");
$(document).ready(function () {
  // Set variables

  var containerEl = $(".container");
  var currentDayEl = $("#currentDay");
  var currentHourEl = moment().format("HH");
  // console.log(currentHourEl);
  let m = moment();
  // displaying the current time on the page
  var todaysDate = moment().format("MMMM Do YYYY, h:mm a");
  console.log(todaysDate);
  currentDayEl.text(todaysDate);
  // variables that the hours is going to pull from and also which hour is going to be displayed.
  // Code is currently set at a 24-hour format, had to override that, so it showes a 12-hour format.
  var workHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
  var displayHours = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];
    // for loop from which data is goingto be pulled from
  for (i = 0; i < workHours.length; i++) {
    console.log(workHours[i]);

    // dynamically creating a new row for the hours to display
    var rowEl = $("<div class='row'>");

    var hoursEl = $("<div class='col-sm-1 hour'>").html(displayHours[i]);

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
    var saveBtnEl = $("<button class='col-sm-1 saveBtn'>");
    var saveIcon = $("<i class='fa fa-save'>");
    saveBtnEl.attr("data-hour", workHours[i]);
    saveBtnEl.append(saveIcon);
    rowEl.append(saveBtnEl);
    containerEl.append(rowEl);
  }
});
