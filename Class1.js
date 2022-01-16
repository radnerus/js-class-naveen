// Bone - HTML
// SKin - CSS
// Muscle/brain - JS


// React - HTML + JS - JSX

// JS - FE (React, Vue, ANgular, Vallina, .....) + BE (NodeJS, ExpressJS, Loopback)

// Java - Spring, Struts, J2EE

console.log("Class 1")

// var, let, const

var a = 4;
a = 8;

let b = 5;
b = "Suren";

// const MY_CONST = "SUREN";
// MY_CONST = "test";

console.log(typeof a);
console.log(typeof b);

// npm install -g nodemon

const user = {
    firstName: "Naveen",
    location: "US"
}

console.log(typeof user);

let arr = [12, 2, 3, "suren"]

console.log(typeof arr);

null
undefined

let testNull;
console.log(testNull);

testNull = null;
console.log(testNull);

console.log(user.location);
console.log(user.firstName);
console.log(user.lastName);

user.firstName = "Suren";

greet();


function greet() {
    console.log("Hello");
}

// const greet = () => {
//     console.log("Hello");
// }

// JS Hoisting
// var & function

// let testNumber = 100;

function testFunction() {
    // let testNumber = 200;
    console.log(testNumber)
    testNumber++;
    testNumber = testNumber + 1;
}
testFunction();

var testNumber = 100;
console.log(testNumber);

const add = (num1, num2) => {
    console.log({ num1 });
    console.log({ num2 })
    return num1 + num2;
};

const total = add(5, 10);

console.log(total);

if (total > 10) {
    console.log('> than 10')
}

// if/else
// while
// do-while
// for
//     - convention
//     - for in
//     - for of
// switch

let array = [1, 2, 3, 4, 5];