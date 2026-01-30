//Variables
// var -es5
// let -used when value changes
// const -used when value does not change


//Data Types-tells js what type of data we are working with
//Primitive data types- basic data types that work with single values
// string-text
//let name = "Alvin";
//let city = 'Nairobi';
//console.log(name);
// number-numbers-integers and floats
//let age = 25;
//console.log(age);
// boolean-true or false
let hasPaid=true;
console.log(hasPaid);

//undefined-no value assigned
let test;
console.log(test);
//null-intentional absence of value
let empty = null;
console.log(empty);
//symbol-unique identifier
//let id = Symbol('id');
//console.log(id);
//bigint-large integers
//Non-primitive data types- complex data types that work with multiple values
// array-list of items
let fruits = ['apple', 'banana', 'orange' , 2, 3.5, true];
console.log(fruits[0], fruits[2]);
fruits.push('mango');
console.log(fruits);
// object-used to store key-value pairs
let person = {
    name: 'Alvin',
    age: 25,
    city: 'Nairobi',
};
console.log(person.name, person.age);
person.age = 26;
console.log(person.name);
//function-block of code that performs a specific task