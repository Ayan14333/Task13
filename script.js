// Declare variables
let number;     // to store the input number
let result;     // to store even/odd result

// Assign value
number = 7; // you can change this number
// number = 6; (even)
// number = 15; (odd)

// Check if the number is even or odd

if (number % 2 === 0) {
    result = "Even";
} else {
    result = "Odd";
}

// Display output
console.log("The number " + number + " is " + result);