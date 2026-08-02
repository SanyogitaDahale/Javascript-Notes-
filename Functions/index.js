// ## Functions in Javascript ##
// Function is block of code which performes specific task
// Reduces Duplicate in code
// Makes it more redable
// We can reuse code

// ## Basic Syntax of Function :
// function functionName(parameters) {
//     code in function
// }


// ## declaring and defining function - we declare function using function keyword and define it by writing code in it.
// function Nameis() {
//     console.log("Hello ji!!")
// }
// // #Above function is function with no parameter
// // ## calling function
// Nameis()


// ## Function with Parameter -
// function printNumber(num) {
//     console.log("print : ", num);
// }
// printNumber(5)
// //In above Example num in paramater and 5 is argument in function


// ## Return Functions
// Ex. 1)
// function getSum(a, b, c) {
//     let sum = a + b + c;
//     return sum;
// }
// getSum(1, 2, 3); // will give no output
// // Have to call return function like this
// let a = getSum(1, 2, 3);
// console.log("Sum : ", a) // Output -> Sum : 6

// Ex. 2) Here we havent defined variable type in parameter
// function getMyName(fname, lname) {
//     let Nameis = fname + lname
//     return Nameis
// }
// * Input - 1
// let b = getMyName('Sanyogita', ' Dahale')
// console.log(b)
// * Input - 2
// let c = getMyName(1, ' Dahale') // It will treat 1 like string
// console.log(c)
// * Input - 3
// let d = getMyName(1, 2) // It will treat both like integer
// console.log(d)


// ## Equating Function in Variable (Function Expression)
// Syntax -
// let functionName = function (parameters) {
//     code in function
// }
// call the function
// Ex.
// let multiplys = function (a, b) {
//     return a * b
// }
// console.log(multiplys(2, 4))


// ## Arrow Funcitons
// introduced in ES6
// Syntax - here function name is written like variable.
// function name = parameters => {
//     code 
// }
// Ex. 1)
// let greet = (name) => {
//     return `hey!, ${name} `
// }
// console.log(greet("Sanyo"))

// Ex. 2) 
// let getExp = (x, y) => {
//     return x**y
// }
// console.log(getExp(2,2))