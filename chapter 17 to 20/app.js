//question # 1
// var multiarray=[[],[],[]]

//question # 2
// const numbers =[[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]
// for(let i=0;i<numbers.length;i++){
//     for(let j=0;j<numbers[i].length;j++){
//         document.write(numbers[i][j])
//     }
//     document.write("<br/>")
// }

//question # 3
// document.write(`<h3>counting from 1 to 10.</h3>`);
// for(let i= 1; i <=10;i++ ){
//      document.write(i + "<br>");
// }

//question # 4
// let number = +prompt("Enter a number to show its multiplication table:");
// let length = +prompt("Enter the length of multiplication table:");
// document.write(`<h3>Multiplication Table of ${number}</h3>`);
// for(let i = 1;i <= length ; i++){
//     document.write(`${number} x ${i} = ${number*i}<br>`);
// }

//question # 5
// let fruits = ["Apple","Banana","Orange","Mango","Strawberry"];
// First part: print all fruits
// for (let i = 0; i < fruits.length; i++) {
//   document.write(fruits[i] + "<br>");
// }
// document.write("<br>");

// Second part: print index with element
// for (let i = 0; i < fruits.length; i++) {
//   document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

//question # 6
// a. Counting
// document.write("<b>Counting:</b><br>");
// for (let i=1 ; i<=15; i++){
//     document.write(i + (i < 15 ? ", " : ""));
// }
// // b. Reverse counting
// document.write("<b>Reverse counting:</b><br>");
// for (var i = 10; i >= 1; i--) {
//   document.write(i + (i > 1 ? ", " : ""));
// }
// document.write("<br><br>");

// // c. Even numbers
// document.write("<b>Even:</b><br>");
// for (var i = 0; i <= 20; i += 2) {
//   document.write(i + (i < 20 ? ", " : ""));
// }
// document.write("<br><br>");

// // d. Odd numbers
// document.write("<b>Odd:</b><br>");
// for (var i = 1; i < 20; i += 2) {
//   document.write(i + (i < 19 ? ", " : ""));
// }
// document.write("<br><br>");

// // e. Series
// document.write("<b>Series:</b><br>");
// for (var i = 2; i <= 20; i += 2) {
//   document.write(i + "k" + (i < 20 ? ", " : ""));
// }

//question # 7
// let  bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// let user = prompt("Welcomr to ABC bakery:what do you want to order Sir/ma'am?");

// let item = user.toLowerCase();
// let index = bakery.indexOf(item);

// if(index !== -1){
//     alert(`${user} is available at Index ${index} in our Bakery`)
// }
// else{
//       alert(`We are sorry  ${user}  is not available in our bakery.`);

// }

//question # 8
// let A = [24, 53, 78, 91, 12];

// let largest = A[0] 
// for(let i = 1; i < A.length ;i++ ){
//     if(A[i] > largest ){
//     largest = A[i] 
//     }
// }
// //Show in browser
// document.write(`<h2>Array Items:</h2>${A} <br> `);
// document.write("The largest number is " + largest);

//question # 9
// let B = [24, 53, 78, 91, 12];

// let smallest = B[0] 
// for(let i = 1; i < A.length ;i++ ){
//     if(B[i] < smallest ){
//     smallest = A[i] 
//     }
// }
// //Show in browser
// document.write(`<h2>Array Items:</h2>${A} <br> `);
// document.write("The smallest number is " + smallest);

//question # 10
// document.write("<h3>Multiples of 5 (1 to 100)</h3>");
// for( let i = 5 ; i <=100 ; i = i+5 ){
//     document.write(i +(i < 100? "," : ""))
// }
// document.write(`<center><h1>-- END -- </h1> </center> `);