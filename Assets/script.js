// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var headerTime = $("#time-date");
var currentTime = $(".present");
var pastTime = $(".past");
var futureTime = $(".future");

var hoursDayEl = [
  $("#9"),
  $("#10"),
  $("#11"),
  $("#12"),
  $("#13"),
  $("#14"),
  $("#15"),
  $("#16"),
  $("#17"),
];

function colorChange() {
  var currentHour = dayjs().format("H");
  for (let i = 0; i < hoursDayEl.length; i++) {
    hoursDayEl[i].removeClass("future past present");
    currentBlock = hoursDayEl[i];

    if (currentHour > i + 9) {
      currentBlock.addClass("past");
    } else if (currentHour === i + 9) {
      currentBlock.addClass("present");
    } else {
      currentBlock.addClass("future");
    }
  }
}
function saveButton(event) {
  event.preventDefault();

  var clicked = $(event.currentTarget);
}

function timeHeader() {
  var todaysDate = dayjs().format(
    " [Date:] MMM DD, YYYY [&] [Time:] hh:mm:ss a"
  );
  headerTime.text(todaysDate);
}
timeHeader();
setInterval(timeHeader, 1000);
colorChange();

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
