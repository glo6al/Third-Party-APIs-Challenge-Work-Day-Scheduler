This is the readme for my workday scheduler app. I created a function to display the current day and time, a function to color code the schedule based on the present time, and more functions to locally store and retrieve input data. I used javascript to build the hour rows dynamically and used bootstrap, fontawesome, and google API to style the page.

I started by declaring variables that were later called in the different functions. Next, I built a function to display the current day and time. I set intervals to count by seconds and used moment.js to format the time.

Next, I created a for loop to generate hour rows, including textareas and save buttons. The id of each textarea corresponds to the time it is in.

After, I created a function to color code the schedule based on the current time. If the time slot is in the past, it is gray. If it is the present hour, it is red.

When the user inputs data into the textarea and clicks the save button, the data is stored in local storage using the setItem method.

Then, I retrieved the data from local storage using the getItem method and displayed it in the textarea.

![Screenshots](./Assets/Images/Screen%20Shot%202022-05-18%20at%202.37.11%20PM.png)
This is a screenshot of my workday scheduler app. People are seeing a page with a current day and time display, hour rows for scheduling, and input fields for each hour. The schedule is color-coded based on the past/present/future time. Data is stored in local storage and retrieved when the page is reloaded.
