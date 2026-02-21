console.log("To find odd or even numbers between 1 to 100:");

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}

console.log("leap year or not:");
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

console.log("Largest of two numbers")
let num1 = 45;
let num2 = 78;

if (num1 > num2) {
    console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is larger than " + num1);
} else {
    console.log("Both numbers are equal.");
}

console.log("Largest of three numbers")
let a = 34;
let b = 67;
let c = 23;

if (a >= b && a >= c) {
    console.log(a + " is the largest number.");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest number.");
} else {
    console.log(c + " is the largest number.");
}

console.log("Positive or Negative number:")
let number = -10;

if (number > 0) {
    console.log(number + " is a positive number.");
} else if (number < 0) {
    console.log(number + " is a negative number.");
} else {
    console.log("The number is zero.");
}   

console.log("Student pass or fail:")
let marks = 75;

if (marks >= 40) {
    console.log("Student has passed.");
} else {
    console.log("Student has failed.");
}
