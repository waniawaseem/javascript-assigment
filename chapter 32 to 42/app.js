// 1. Power function
    function power(a, b) {
      return Math.pow(a, b);
    }
    console.log("Power (2^3) =", power(2, 3));

    // 2. Leap Year Checker
    function isLeapYear(year) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    console.log("Leap Year 2024:", isLeapYear(2024));

    // 3. Area of Triangle using 2 functions
    function calculateS(a, b, c) {
      return (a + b + c) / 2;
    }
    function areaOfTriangle(a, b, c) {
      let S = calculateS(a, b, c);
      let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
      return area;
    }
    console.log("Area of triangle:", areaOfTriangle(3, 4, 5));

    // 4. Average & Percentage of 3 subjects
    function average(m1, m2, m3) {
      return (m1 + m2 + m3) / 3;
    }
    function percentage(m1, m2, m3) {
      return ((m1 + m2 + m3) / 300) * 100;
    }
    function mainFunction(m1, m2, m3) {
      let avg = average(m1, m2, m3);
      let per = percentage(m1, m2, m3);
      console.log(`Average: ${avg}, Percentage: ${per}%`);
    }
    mainFunction(85, 90, 95);

    // 5. Custom indexOf function
    function customIndexOf(str, ch) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) return i;
      }
      return -1;
    }
    console.log(customIndexOf("hello", "e")); 

    // 6. Delete all vowels from a sentence
    function deleteVowels(sentence) {
      return sentence.replace(/[aeiouAEIOU]/g, "");
    }
    console.log(deleteVowels("This is a test sentence."));

    // 7. Count successive vowels (using switch)
    function countSuccessiveVowels(str) {
      let count = 0;
      for (let i = 0; i < str.length - 1; i++) {
        let vowels = "aeiou";
        let first = str[i].toLowerCase();
        let second = str[i + 1].toLowerCase();
        switch (true) {
          case vowels.includes(first) && vowels.includes(second):
            count++;
            break;
        }
      }
      return count;
    }
    console.log(
      "Successive vowels:",
      countSuccessiveVowels("Pleases read this application and give me gratuity")
    );

    // 8. Distance conversions
    function toMeters(km) {
      return km * 1000;
    }
    function toFeet(km) {
      return km * 3280.84;
    }
    function toInches(km) {
      return km * 39370.1;
    }
    function toCentimeters(km) {
      return km * 100000;
    }

    let distance = 10; 
    console.log(
      `Distance: ${toMeters(distance)} m, ${toFeet(distance)} ft, ${toInches(distance)} in, ${toCentimeters(distance)} cm`
    );

    // 9. Overtime pay calculator
    function overtimePay(hoursWorked) {
      let overtime = 0;
      if (hoursWorked > 40) {
        overtime = (hoursWorked - 40) * 12;
      }
      return overtime;
    }
    console.log("Overtime Pay:", overtimePay(45)); 

    // 10. Cashier program
    function cashier() {
      let amount = parseInt(prompt("Enter amount to withdraw!!"));
      let hundred = Math.floor(amount / 100);
      let fifty = Math.floor((amount % 100) / 50);
      let ten = Math.floor(((amount % 100) % 50) / 10);

      document.write(
        `You will have ${hundred} hundred notes ${fifty} fifty notes ${ten} ten notes.`
      );
    }