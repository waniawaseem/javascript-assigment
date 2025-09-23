//question # 1
// let city = prompt(`enter your city name:`);
// if (city==="karachi|| city === "karachi""){
//     alert (`Welcome to city of lights`);
// }
// else{
//     alert(`welcome to ${city}`);
// }


//question # 2
// let gender= prompt(`whats your gender`)
// if (gender==="male" || gender==="Male"){
// alert(`Good Morning sir`)
// }
// else if (gender==="female"||gender==="Female"){
// alert(`Good Morning Madam`)
// }
// else{
//     alert(`Enter your Gender please`)}


//question # 3
// let color= prompt(`Enter traffic signal color (Red, Yellow, Green):`)
// if (color === "Red" || color === "red") {
//       alert("Must Stop");}
//        else if (color === "Yellow" || color === "yellow") {
//       alert("Ready to move");
//     } 
//     else if (color === "Green" || color === "green") {
//       alert("Move now");
//     } 
//     else {
//       alert("Invalid color entered");
//     }


//question # 4
// let fuel = prompt("Enter remaining fuel in your car (in litres):");
// fuel = parseFloat(fuel);
//  if (fuel < 0.25) {
//       alert("Please refill the fuel in your car");
//     } else {
//       alert("You have enough fuel");
//     }

//question # 5
// a; 
// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }
//b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //c.
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// //d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// //e.
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// //f. 
// if("car" < "cat"){
// alert("car is smaller than cat");
// }
//question # 6
// let sub1 = +prompt("Enter marks for Subject 1 (out of 100):");
//  let sub2 = +prompt("Enter marks for Subject 2 (out of 100):");
//  let sub3 = +prompt("Enter marks for Subject 3 (out of 100):");


//  // Total marks
//  let totalMarks = 300;
//  // Calculate obtained marks
// let obtainedMarks = sub1 + sub2 + sub3;
// // Calculate percentage
// let percentage = (obtainedMarks / totalMarks) * 100;

//  // Variables for grade and remarks
// let grade, remarks;
//  if (percentage >= 80) {
//     grade = "A-one";
//    remarks = "Excellent";
// }
//  else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// }
// else if (percentage >= 60) {
//    grade = "B"
//     remarks = "You need to improve";
// } else {
//      grade = "Fail";
//      remarks = "Sorry";
// }
// //Show the total marks, marks obtained, percentage, grade & remarks
// document.write(`
//               <h1><strong>Marks Sheet</h1></strong>
//               <b>Total marks :</b> ${totalMarks}<br>
//               <b>Marks obtained :</b> ${obtainedMarks}<br>
//               <b>Percentage :</b> ${percentage}%<br>
//                <b>Grade :</b> ${grade}<br>
//                 <b>Remarks :</b> ${remarks}
//                `);
//question # 7
// let secretNumber = 7;
// let guess = +prompt("Guess the secret number (1 to 10):");
// if (guess === secretNumber) {
//       alert("Bingo! Correct answer");
//     } 
//     else if (guess + 1 === secretNumber) {
//       alert("Close enough to the correct answer");
//     } 
//     else if (guess - 1 === secretNumber) {
//       alert("Close enough to the correct answer");
//     } 
//      else {
//       alert("Sorry, try again!");
//     }

//question # 8
// let num = +prompt("Enter a number to check if it is divisible by 3:");
// if( num % 3 === 0){
//     alert( `${num} is divisible by 3 `)
// }
// else{
//     alert(`${num} is not divisible by 3`)
// }
// //question # 9
// let number = +prompt("Please enter any number to check even or odd:");
// if(number % 2 === 0){
//     alert(`${number} is an Even number`)
// } 
// else{
//     alert(`${number}is an Odd number`)
// }
// //question # 10
//  // Take input from user
//  let temp = +prompt("Enter the temperature:");
//  //a. T > 40 then “It is too hot outside.”
//  if(temp > 40 ){
//     alert("It is too hot outside.");
//  }
//  //b. T > 30 then “The Weather today is Normal.”
//  else if(temp > 30){
//     alert("The Weather today is Normal.");
//  }
//  //c. T > 20 then “Today’s Weather is cool.”
//    else if (temp > 20) {
//     alert("Today’s Weather is cool.");
//   } 
//   //d. T > 10 then “OMG! Today’s weather is so Cool.”
//   else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
//   } 
//   else {
//     alert("It's very cold!");
//   }
// //question # 11
//   let num1 = +prompt("Enter the first number:");
//   let num2 = +prompt("Enter the second number:");
//    let operation = prompt("Enter operation (+, -, *, /, %):");

//  let result;
//  // Check operation using if statements
//  if(operation === "+"){
//     result = num1 + num2
//  }
//   if (operation === "-") {
//     result = num1 - num2;
//   }
//   if (operation === "*") {
//     result = num1 * num2;
//   }
//   if (operation === "/") {
//     result = num1 / num2;
//   }
//   if (operation === "%") {
//     result = num1 % num2;
//   }
//    // Show result
//   alert(`Result:  ${result}`);

//   document.write(`<center><h1>-- END -- </h1> </center> `)