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


//question # 7
let secretNumber = 7;
let guess = +prompt("Guess the secret number (1 to 10):");
if (guess === secretNumber) {
      alert("Bingo! Correct answer");
    } 
    else if (guess + 1 === secretNumber) {
      alert("Close enough to the correct answer");
    } 
    else if (guess - 1 === secretNumber) {
      alert("Close enough to the correct answer");
    } 
     else {
      alert("Sorry, try again!");
    }