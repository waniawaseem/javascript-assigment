//question # 1
// Create a new Date object
//     let currentDate = new Date();

//     // Display the date and time in the browser
//     document.write("Current Date and Time: " + currentDate);

// //question # 2
 // Array of month names
    // let months = [
    //   "January", "February", "March", "April", "May", "June",
    //   "July", "August", "September", "October", "November", "December"
    // ];

    // // Create Date object
    // let now = new Date();

    // // Get current month index (0–11)
    // let monthIndex = now.getMonth();

    // // Alert the month name
    // alert("Current month is: " + months[monthIndex]);

//question # 3
// Array of day names
    // let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // // Create Date object
    // let now = new Date();

    // // Get current day index (0–6)
    // let dayIndex = now.getDay();

    // // Alert the first 3 letters of the current day
    // alert("Today is: " + days[dayIndex]);

//question # 4
//  // Create Date object
//     let now = new Date();

//     // Get current day index (0 = Sunday, 6 = Saturday)
//     let day = now.getDay();

//     // Check if it's Saturday or Sunday
//     if (day === 0 || day === 6) {
//       alert("It's Fun day 🎉");
//     } else {
//       alert("It's a working day 😅");
//     }

//question # 5
//   // Create Date object
//     let now = new Date();

//     // Get current date (day of the month)
//     let date = now.getDate();

//     // Check if date is less than 16
//     if (date < 16) {
//       alert("First fifteen days of the month");
//     } else {
//       alert("Last days of the month");
//     }

//question # 6
//  // Create a Date object
//     let currentDate = new Date();

//     // Get elapsed milliseconds since Jan 1, 1970
//     elapsedMilliseconds = currentDate.getTime();

//     // Convert milliseconds to minutes
//     elapsedMinutes = elapsedMilliseconds / (1000 * 60);

//     // Display all results
//     document.write("Current Date: " + currentDate + "<br>");
//     document.write("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds + "<br>");
//     document.write("Elapsed minutes since January 1, 1970: " + elapsedMinutes);

//question # 7
// // Create a Date object
//     let now = new Date();

//     // Get current hour (0–23)
//     let hours = now.getHours();

//     // Check if it's before noon
//     if (hours < 12) {
//       alert("It's AM");
//     } else {
//       alert("It's PM");
//     }

//question # 8
// // Create a Date object for the last day of the last month of 2020
// var laterDate = new Date(2020, 11, 31);

// // Display the date
// console.log(laterDate);

//question # 9
// // Create a Date object for the reference date (current date)
// var referenceDate = new Date();

// // Create a Date object for the beginning of 2015
// var beginning2015 = new Date("January 1, 2015");

// // Calculate the difference in milliseconds
// var difference = referenceDate.getTime() - beginning2015.getTime();

// // Convert milliseconds to seconds
// var secondsElapsed = Math.floor(difference / 1000);

// // Display the result in the browser
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

//question # 10
// // Create a Date object for the current date and time
// var currentDate = new Date();

// // Extract the current hour
// var currentHour = currentDate.getHours();

// // Set the date object one hour ahead
// currentDate.setHours(currentHour + 1);

// // Display the updated date object in the browser
// document.write("The date and time one hour ahead is: " + currentDate);

//question # 11
// // Create a Date object for the current date and time
// var currentDate = new Date();

// // Reset the year to 100 years back
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// // Show the updated date in an alert box
// alert("Date 100 years back: " + currentDate);

//question # 12
// // Create a Date object for the current date and time
// var currentDate = new Date();

// // Reset the date 100 years back
// currentDate.setFullYear(currentDate.getFullYear() - 100);

// // Show the updated date in an alert box
// alert("Date 100 years back: " + currentDate);

//question # 13
// // Ask the user for their age
// var age = prompt("Please enter your age:");

// // Get the current year
// var currentYear = new Date().getFullYear();

// // Calculate birth year
// var birthYear = currentYear - age;

// // Display the result in the browser
// document.write("Your birth year is: " + birthYear);

//question # 14
// // KE Bill Generator

// // a. Customer Name
// var customerName = prompt("Enter Customer Name:");

// // b. Current Month
// var months = ["January", "February", "March", "April", "May", "June", "July", 
//                "August", "September", "October", "November", "December"];
// var currentMonth = months[new Date().getMonth()];

// // c. Number of units
// var units = parseFloat(prompt("Enter number of units consumed:"));

// // d. Charges per unit
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

// // e. Net Amount Payable (within Due Date)
// var netAmount = units * chargesPerUnit;

// // f. Late Payment Surcharge
// var latePaymentSurcharge = 350; // fixed or you can set any value

// // g. Gross Amount Payable (after Due Date)
// var grossAmount = netAmount + latePaymentSurcharge;

// // Display Bill in Browser
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<b>Customer Name:</b> " + customerName + "<br>");
// document.write("<b>Month:</b> " + currentMonth + "<br>");
// document.write("<b>Number of Units:</b> " + units.toFixed(2) + "<br>");
// document.write("<b>Charges per Unit:</b> " + chargesPerUnit.toFixed(2) + "<br><br>");
// document.write("<b>Net Amount Payable (within Due Date):</b> " + netAmount.toFixed(2) + "<br>");
// document.write("<b>Late Payment Surcharge:</b> " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("<b>Gross Amount Payable (after Due Date):</b> " + grossAmount.toFixed(2));
