// Primitive

// 7 types: String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100

const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);

// Reference (Non primitive)
// Array, Objects, Functions

const heroes=["ironman","thor","shaktiman"];
let myObj={
    name: "Vaibhav",
    age: 26
} 

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);