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

// ##############################################################################################

/* we have 2 types of memory 
1."Stack" which is used in "Primitive" data type and
2. "Heap" is used in "Non Primitive" */

// stack example

let myChannel="VD"
let anotherChannel= myChannel
anotherChannel="ChaiwithVaibhav"

console.log(myChannel);
console.log(anotherChannel);

// heap example
let userOne={
    email: "user1@google.com",
    upi: "user1@hdfc"
}
 let userSecond = userOne

 userSecond.email = "vaibhav@gmail.com"
 console.log(userOne.email);
 console.log(userSecond.email);