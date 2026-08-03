// ##---- Hoisting in Javascript ----##

// ## Hoisting is a process which shifts to the top in there scope variable declaration and function declaration.


// ## Function Hoisting
// {
//     SayMyName("Sanyogita")

//     function SayMyName(finalName) {
//         console.log(finalName)
//     }
//     //This function will shift(with logic)before function call automatically before compiling
//     //This is called as function hoisting.
// }
// Using Function Expression - Function Hoisting is not possible. (will give reference error)


// ## Variable Hoisting
// In Varible hosisting only 'var age' will shift to top but not the value assigned i.e 25. This is why the output will be undefined

// console.log(age) // output - undefine
// var age = 25

// Now Suppose we create variable using const and let (Varibale Hoisting is not possible using let and const) - It will give Reference Error
// But its always better to use let or const - good for debugging .


// ## Hoisting on Class
// Class is a blueprint.
// Class instance is Object
// Class Hoisiting is NOT POSSIBLE.
// Class -
// class Human{
//     age = 21
//     name = "Sanyogita"
// }
// const object = new Human(); // This is Object
// console.log(object)



// ## ---- Call Stack Function in Javascript  ---- ##

// Stack - Data structure (Last In First Out).
// Whenever we call function it enters in stack (Consider it).
// Function call stack works like Stack Data structure and removes entry like Last in First Out.

// ## Why we say function is a first class citizen ?
// Ans :  assign to variable(function expression), as an argument, return function, use functions in data structure, as a properties can be defined in function, Because of this we call it first class citizen.

// ## How can we pass function ?
// function mee(greet, fulname) {
//     console.log("Hey! ", fulname)
//     greet()
// }
// function greet() {
//     console.log("Hello")
// }
// mee(greet, "Sanyo")

// ## How to store in Data Structure?
// const arr = [
//     function (a, b) {
//         return a + b
//     },
//     function (a, b) {
//         return a - b
//     },
//     function (a, b) {
//         return a * b
//     },
//     function (a, b) {
//         return a % b
//     }
// ]
// let first = arr[0]
// let second = arr[1]
// let third = arr[2]
// let forth = arr[3]
// console.log(first(5, 9))
// console.log(second(5,9))
// console.log(third(5,9))
// console.log(forth(5,9))

// ## How to use in Object - object is basically collection of key-value pair.
// ex.
// let obj = {
//     age: 25,
//     wt: 60,
//     rollno : 188,
//     greet: () => {
//         console.log("Hey")
//     }
// }
// console.log(obj.age)
// obj.greet()


