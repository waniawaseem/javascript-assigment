//question # 1
// function tellTime(){
//     var today= new Date();
//     document.write(today);
// }
//  tellTime()

// //question # 2
// function greetUser() {
//       let firstName = prompt("Enter your first name:");
//       let lastName = prompt("Enter your last name:");
//       let fullName = firstName + " " + lastName;
//       alert("Hello, " + fullName + "! Welcome!");
//     }

//     greetUser(); // Call the function

// //question # 3
//   function addNumbers() {
//       let num1 = +prompt("Enter the first number:");
//       let num2 = +prompt("Enter the second number:");
//       let sum = num1 + num2;
//       return sum;
//     }

//     let result = addNumbers();
//     alert("The sum of the two numbers is: " + result);

//question # 4
// let num1 = +prompt("Enter first number:");
// let num2 = +prompt("Enter second number:");
// let opera = prompt("Enter operator (+, -, *, /):");
//  function calculator(num1,opera,num2){
//     if(opera==='+'){
//         var result= num1+num2;
//         alert(result)
//     }
//     else if(opera==='-'){
//         var result= num1-num2;
//         alert(result)
//     }
//     else if(opera==='*'){
//         var result= num1*num2;
//         alert(result)
//     }
//     else if(opera==='/'){
//         var result= num1/num2;
//         alert(result)
//     }
//     else{
//         alert('Invalid Operator')
//     }
// }
// calculator(num1,operator,num2);

//question # 5
// function square(num) {
//   return num * num;
// }

// // Example usage:
// let result = square(5);
// console.log(result); 

//question # 6
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1; // Base case
//   } else {
//     return n * factorial(n - 1); 
//   }
// }

// // Example usage:
// let result = factorial(5);
// console.log(result); 

//question # 7
// function showCounting(start, end) {
//       let output = "";
//       for (let i = start; i <= end; i++) {
//         output += i + " "; // add each number with space
//       }
//       document.getElementById("result").innerHTML = output;
//     }

//     // Example usage:
//     showCounting(1, 10);

//question # 8
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(num) {
//     return num * num;
//   }

//   let hypotenuse = Math.sqrt(
//     calculateSquare(base) + calculateSquare(perpendicular)
//   );

//   console.log("Hypotenuse:", hypotenuse);
//   return hypotenuse;
// }

// // Example:
// calculateHypotenuse(3, 4);

//question # 9
// function areaRectangle(width, height) {
//   return width * height;
// }

// console.log("Area:", areaRectangle(5, 10));

//question # 10
// let w = 7;
// let h = 3;
// console.log("Area:", areaRectangle(w, h));

//question # 11
// function isPalindrome(str) {
//   let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let reversed = cleanStr.split("").reverse().join("");
//   return cleanStr === reversed;
// }
// console.log(isPalindrome("madam"));  // true
// console.log(isPalindrome("hello"));  // false

// //question # 12
// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("the quick brown fox"));

// //question # 13
// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longest = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//       longest = words[i];
//     }
//   }
//   return longest;
// }
// console.log(findLongestWord("Web Development Tutorial"));

// //question # 14
// function countLetter(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter("JSResourceS.com", "o"));