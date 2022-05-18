//declare variables
var timeSlots = $("#timeSlots"); // use this to insert the time-blocks into the schedule
var currentHour = parseInt(moment().format("H")); //use this to get the current hour
var todayDate = $("#todayDate"); //use this to place today date in the header
var saveIcon = `<i class="fas fa-save"></i>`; // use this to place the icon in the rows of the schedule

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
              <textarea name="" id="" class="description col-10"></textarea>
              <button type="button" class="btn btn-primary col-1 saveBtn" onclick="save(event)">${saveIcon}</button>
          </div>`;
      //append the newly created html into timeSlots
      $("#timeSlots").append(hourRow);
      //set time PM if i is greater than 12
    } else if (i > 12) {
      //set variable to inject html into timeSlots in index.html
      var hourRow = `
                <div id="${i}" class= "row time-block" data-time="${i}">
                    <div class="hour col-1">${i - 12 + " PM"}</div>
                    <textarea name="" id="" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn" onclick="save(event)">${saveIcon}</button>
                </div>`;
      //append the newly created html into timeSlots
      $("#timeSlots").append(hourRow);
    } else {
      var hourRow = `
                <div id="${i}" class= "row time-block" data-time="${i}">
                    <div class="hour col-1">${i + " AM"}</div>
                    <textarea name="" id="" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn" onclick="save(event)">${saveIcon}</button>
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

// Add event listener or onclick to save then save to localStorage
$(".description").each(function () {
  localStorage.getItem($(this).parent().attr("id"));
});

function save(event) {
  //console.log("You clicked me!!!", event.target);
  var savedDescription = $(event.target).prev().val();
  var savedTime = $(event.target).parent().data("time");
  var testVar = savedDescription.concat(savedTime);
  //console.log(testVar);
  localStorage.setItem("task", JSON.stringify(testVar));
  //var savedDataObj = JSON.parse(localStorage.getItem(testVar));
  console.log(testVar);
  //return stringified data to empty object below
  return testVar;
}

//use to hold data until saved to localStorage
var savedDataObj = [];

//set variable to get saved data in obj
var displaySavedObj = localStorage.getItem("savedDescriptionObj");
console.log("displaySavedObj").JSON.parse(localStorage.getItem("savedDataObj"));
//add function to display saved data into corresponding hourRow

//TODO make an object wth key time and message and push into object array, then store array in localStorgae
//TODO json.parse to getItem
