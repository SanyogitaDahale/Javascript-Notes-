
// ##--- Error Handling in Js ---##
// Error Handling means handling errors in your program so that your application doesnt crash unexpectedly and you can give a proper response.

// ## What is an error ? -> An event due to it normal flow of execution disrupts is Error.

// # Types of Error
// 1) Compile-time Error
// 2) Run-time Error
// 3) ReferenceError
// 4) TypeError
// 5) Syntax Error
// 6) RangeError
// 7) URIError

// 1) Compile-time Error : Error which is identified before running, when code is on parse/ parsing stage we get error. (parse - it is code converted in machine understandable form stage).
// i.e Here there is not exectution of program before execution we get the error.
// Ex.
// console.log(1; // syntax error - it is showing error without running that is compile time error.

// 2) Run-time Error : While the code is executing or when code is in running stage we get Run-time error.
// Ex.
// console.log(x); // will give runtime error cause we did not define variable x.

// 3) Reference Error : When you use a variable that doesn't exist.

// 4) TypeError : When you perform an invalid operation on a value.
// Ex. A number doesn't have toUpperCase().
// let num = 10;
// num.toUpperCase();

// 5) SyntaxError : When JavaScript syntax is incorrect.

// 6) RangeError : When a value is outside its allowed range.
// Ex.
// let arr = new Array(-1);

// 7) URIError : Related to incorrect URI functions.
// Ex. decodeURIComponent("%");
// URI functions are, URI stands for Uniform Resource Identifier. A URI is a string used to identify a resource, such as a webpage, file, API endpoint, etc.
// JavaScript provides built-in functions to work with URIs:
// 1. encodeURI() = Used to encode a complete URI.
// 2. decodeURI() = Used to decode an encoded URI.

// ## URI vs URL
// URI → identifies a resource.
// URL → identifies a resource and tells you where/how to access it.


// ## Handling of Errors

// 1) try - catch Block
// Ex.
// try {
//     // We write error in try block which can give us error
//     console.log(x)  // x is not defined.
// }
// catch (e) {
//     // If we get error in code which is in try block, instead of showing that error we can deal with error in catch block.
//     console.log("Error in Code")
// }

// 2) Finally Block
// This will run every time, even if error does not appear.
// Ex.
// try {
//     console.log(2)  // x is not defined.
// }
// catch (e) {
//     console.log("Error in Code")
// }
// finally {
//     // Written after catch{}
//     console.log("Error ho ya na ho me to Chalunga kynki me finally hun ")
// }

// 3) Throw - Block
// Suppose we want to create our Custom error we use throw.
// Usually we combine it with try.....catch Block.
// Ex. 1.
// try {
//     console.log(x) // Reference error
// }
// catch (e) {
//     throw new Error("Delcare variable then print it");
// }

// Ex. 2. 
// let errorCode = 100;
// if (errorCode == 100) {
//     throw new Error("Invalid Json")
// }


