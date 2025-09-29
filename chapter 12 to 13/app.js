// question # 1
// let character = prompt("Enter a character:");
// let ascii = character.charCodeAt(0);
// if(ascii >=48 && ascii<=57){
//     alert("The input is a Number.");
// }
// else if (ascii >= 65 && ascii <=90 ){
//       alert("The input is an Uppercase Letter.");
// }
// else if(ascii >=97 && ascii <= 112){
//      alert("The input is a Lowercase Letter.");
// }
// else{
//      alert("The input is neither a number nor a letter.");
// }

// question # 2
// let num1= +prompt(`Enter first integer:`)
// let num2= +prompt(`Enter second integer:`)
// if (num1>num2){
//      alert("The larger number is: " + num1);
// }
// else if (num2 > num1) {
//       alert("The larger number is: " + num2);
//     } 
//     else {
//       alert("Both numbers are equal");
//     }

// question # 3
// let num= +prompt(`Enter the Number`)
// if (num > 0) {
//       alert("The number is Positive");
//     } 
//     else if (num < 0) {
//       alert("The number is Negative");
//     } 
//     else {
//       alert("The number is Zero");
//     }

// question # 4
// let char = prompt("Enter a character");

// char = char.toLowerCase();

// if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"  ){
//     alert(true);
// }
// else{
//     alert(false);
// }

// question # 5
    // var correctPassword = "abc123";

    // // (b) User se password input lena
    // var userPassword = prompt("Enter your password:");

    // // (c) Validate karna
    // if (!userPassword) {
    //   // (i) Agar user ne password enter hi nahi kiya
    //   alert("Please enter your password");
    // } 
    // else if (userPassword === correctPassword) {
    //   // (ii) Agar dono passwords same hain
    //   alert("Correct! The password you entered matches the original password");
    // } 
    // else {
    //   // Agar password galat hai
    //   alert("Incorrect password");
    // }
// question # 6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

//console.log(greeting);


// question # 7
// var time= +prompt(`Enter time:`)
// if (time>=0 && time<1200){
//     alert("Good morning!");
// }else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } 
// else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } 
// else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
// } 
// else {
//     alert("Invalid time entered!");
// }