// 01. Solve Me First
// Q: Write a function that returns the sum of two integers.
var solveMeFirst = function (a, b) {
  return a + b;
};

// 02. Multiply
// Q: Write a function that returns the product of two numbers.
var multiply = function (a, b) {
  return a * b;
};

// 03. Even or Odd
// Q: Write a function that returns "Even" when a number is even and "Odd" when it is odd.
var evenOrOdd = function (number) {
  if (number % 2 != 0) {
    return "odd";
  } else {
    return "even";
  }
};

// 04. Return Negative
// Q: Return the negative value of a number. If it is already negative, keep it negative.
var makeNegative = function (number) {
  if (number > 0) {
    return -number;
  } else {
    return number;
  }
};

// 05. Opposite Number
// Q: Return the opposite of a given number.
var opposite = function (number) {
  if (number > 0) {
    return -number;
  }
  if (number < 0) {
    return -number;
  }
};

// 06. Simple Array Sum
// Q: Return the sum of all integers in an array.
var simpleArraySum = function (ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
};

// 07. sleepIn
// Q: Return true if it is not a weekday or you are on vacation.
var sleepIn = function (weekday, vacation) {
  if (weekday === false || vacation === true) {
    return true;
  } else {
    return false;
  }
};

// 08. monkeyTrouble
// Q: Two monkeys are in trouble if both are smiling or neither is smiling. Return true in that case.
var monkeyTrouble = function (aSmile, bSmile) {
  if (aSmile === true && bSmile === true) {
    return true;
  } else if (aSmile === false && bSmile === false) {
    return true;
  } else {
    return false;
  }
};

// 09. sumDouble
// Q: Return the sum of two integers, but return double the sum when they are equal.
var sumDouble = function (a, b) {
  let sum = 0;
  if (a === b) {
    sum = a + b;
    return sum * 2;
  } else {
    return a + b;
  }
};

// 10. diff21
// Q : Return the absolute difference between n and 21, doubling it when n is greater than 21.
var diff21 = function (n) {
  let subtraction = Math.abs(n - 21);
  if (n > 21) {
    return subtraction * 2;
  }
  return subtraction;
};

// 11. parrotTrouble
// Q : Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.
var parrotTrouble = function (talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

// 12. makes10
// Q : Return true if either number is 10 or their sum is 10.
var makes10 = function (a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

// 13. nearHundred
// Q : Return true if n is within 10 of 100 or within 10 of 200.
var nearHundred = function (n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
};

// 14. posNeg
// Q : Return true when one number is positive and the other is negative. If negative is true, both must be negative.
var posNeg = function (a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
};

// 15. notString
// Q : Add "not " to the beginning of a string unless it already starts with "not".
var notString = function (str) {
  if (str.startsWith("not")) {
    return str;
  } else {
    return "not " + str;
  }
};

// 16. Compare the Triplets
// Q : Compare two three-element score arrays and return how many points each person earns.
var compareTriplets = function (a, b) {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
  }

  return [alice, bob];
};

// 17. A Very Big Sum
// Q : Return the sum of all values in an integer array.
var aVeryBigSum = function (ar) {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;
};

// 18. Staircase
// Q : Create a right-aligned staircase of height n using # characters.
var staircase = function (n) {
  let result = "";

  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);

    result += spaces + hashes;

    if (i < n) {
      result += "\n";
    }
  }

  return result;
};

// 19. Grading Students
// Q : Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.
var gradingStudents = function (grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      continue;
    }

    let nextMultiple = Math.ceil(grades[i] / 5) * 5;

    if (nextMultiple - grades[i] < 3) {
      grades[i] = nextMultiple;
    }
  }

  return grades;
};

// 20. Time Conversion
// Q : Convert a 12-hour AM/PM time string into 24-hour format.
var timeConversion = function (s) {
  let period = s.slice(-2);
  let time = s.slice(0, 8);
  let hour = Number(time.slice(0, 2));

  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  let formattedHour = String(hour).padStart(2, "0");

  return formattedHour + time.slice(2);
};

// // 01
// console.log(solveMeFirst(2, 3));

// // 02
// console.log(multiply(4, 5));

// // 03
// console.log(evenOrOdd(7));

// // 04
// console.log(makeNegative(8));
// console.log(makeNegative(-7));

// // 05
// console.log(opposite(8));
// console.log(opposite(-10));

// // 06
// const arr = [1, 2, 3, 4];
// simpleArraySum(arr);

// // 07
// console.log(sleepIn(true, false));

// // 08
// console.log(monkeyTrouble(true, true));

// // 09
// console.log(sumDouble(3, 3));
// console.log(sumDouble(23, 3));

// // 10
// console.log(diff21(25));

// // 11
// console.log(parrotTrouble(true, 6));
// console.log(parrotTrouble(true, 10));

// // 12
// console.log(makes10(4, 6));

// // 13
// console.log(nearHundred(91));

// // 14
// console.log(posNeg(-1, 1, false));

// // 15
// console.log(notString("bad"));

// // 16
// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

// // 17
// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003]));

// // 18
// console.log(staircase(4));

// // 19
// console.log(gradingStudents([73, 67, 38, 33]));

// // 20
// console.log(timeConversion("07:05:45PM"));
