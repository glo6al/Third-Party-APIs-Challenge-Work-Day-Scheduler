//declare variables
var timeSlots = $("#timeSlots"); // use this to insert the time-blocks into the schedule
var currentHour = parseInt(moment().format("H")); //use this to get the current hour
var todayDate = $("#todayDate"); //use this to place today date in the header
var saveIcon = `<i class="fas fa-save"></i>`; // use this to place the icon in the rows of the schedule
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const saveBtn = document.querySelectorAll("button");

// Display current day and time
function displayDayTime() {
  //set interval to count by seconds
  setInterval(function () {
    //call function from moment.js to power the interval/day time
    todayDate = moment();
    //select todayDay text value visible in header
    $("#todayDate").text(
      //display format for day, month, year, and time
      todayDate.format("dddd, MMMM Do, YYYY h:mm a")
    );
    //sent interval to 1000ms (1second)
  }, 1000);
}
//call function to display current day and time
displayDayTime();

// Create hour of day (adjusts for AM/PM), text area for tasks, and save button
function buildSchedule() {
  //set integer value to start for loop at 0900 and end just before 1800
  for (i = 9; i < 18; i++) {
    //set 1200 to 12 "pm" if current time is equal to 12pm
    if (i === 12) {
      //set variable to inject html into timeSlots in index.html
      var hourRow = `
          <div id="${i}" class= "row time-block" data-time="${i}">
              <div class="hour col-1">${i + " PM"}</div>
              <textarea name="" id="${i}" class="description col-10"></textarea>
              <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
          </div>`;
      //append the newly created html into timeSlots
      $("#timeSlots").append(hourRow);
      //set time PM if i is greater than 12
    } else if (i > 12) {
      //set variable to inject html into timeSlots in index.html
      var hourRow = `
                <div id="${i}" class= "row time-block" data-time="${i}">
                    <div class="hour col-1">${i - 12 + " PM"}</div>
                    <textarea name="" id="${i}" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`;
      //append the newly created html into timeSlots
      $("#timeSlots").append(hourRow);
    } else {
      var hourRow = `
                <div id="${i}" class= "row time-block" data-time="${i}">
                    <div class="hour col-1">${i + " AM"}</div>
                    <textarea name="" id="${i}" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`;
      //append the newly created html into timeSlots
      $("#timeSlots").append(hourRow);
    }
  }
}

buildSchedule();

//color code the schedule based on the current time(hour)
$(".time-block").each(function () {
  //if statement to highlight future hours
  if ($(this).attr("id") > currentHour) {
    $(this).addClass("future");
    // else if statement to highlight past hours
  } else if ($(this).attr("id") < currentHour) {
    $(this).addClass("past");
    //else statement to highlight present hour
  } else {
    $(this).addClass("present");
  }
});

// retrieve localStorage
function localStorageFunctions() {
  for (let index = 0; index < numbers.length; index++) {
    $("textarea")[index].value = localStorage.getItem(
      "textarea" + String(index + 1)
    );
  }
}

//save data to localStorage
$("button").on("click", function (event) {
  event.preventDefault();
  for (let index = 0; index < numbers.length; index++) {
    localStorage.setItem(
      "textarea" + String(index + 1),
      $("textarea")[index].value
    );
  }
});

localStorageFunctions();
