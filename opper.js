// Operators -used to perform operations on values and variables
// Arithmetic operators - used to perform mathematical operations
let a = 10;
let b = 3;
let c=3;
let sum = a + b; // addition
let difference = a - b; // subtraction
let product = a * b; // multiplication
let division = a / b; // division
let mod = a % b; //modulus
let exponent = c ** b; // exponentiation
console.log(sum, difference, product, division, mod, exponent) ;

// Assignment operators - used to assign values to variables
let z=9;
z += 4; // z = z + 4
z -= 2; // z = z - 2
z *= 3; // z = z * 3
z /= 3; // z = z / 3
console.log(z);

// Comparison operators - used to compare values
let x = '7';
if (x >= 7) {
    console.log("true");
}else{
    console.log("false");
}

// Logical operators - used to combine multiple conditions
let name = "Alvin";
let age = 25;
if (age > 18 && name === "Alvin") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
// || =-- or
// ??=-not

//string operators - used to concatenate strings
let firstName = "Alvin";
let lastName = "Kibet";
let fullName = firstName + " " + lastName;
console.log(fullName);
