// change everything below to the newer Javascript!

// let + const
var a = 'test';  let a = 'test';
var b = true;   let b = true;
var c = 789;    const c  =789;
a = 'test2';     a = " test2";


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;


var {firstName,lastName,age,eyeColor} = person;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(eyeColor);

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


var okobj = {
    a,b,c
}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

var message = `hello ${firstName} have met you before? i think we met in ${city} last summer no ???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

function isValidAge(age=35){
    return `hello my age is ${age} year`;
}
// Symbol
// Create a symbol: "This is my first Symbol"

let a = Symbol("this is my first symbol");
console.log(a.description);

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

let whereAmI = (username,location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}



