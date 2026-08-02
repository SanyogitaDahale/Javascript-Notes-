// ## Loops in Javascript (for each, for in, for of) ##

// #For Each - traverse the array by using for each
// Ex. 1)
// let arr = [1, 2, 3, 5, 6]
// arr.forEach((value, index) => {
//     console.log("Number : ", value, "Index : ", index)
// })

// Ex. 2) - lenght of array
// let arr = [1, 2, 3, 5, 6, 7, 6]
// console.log(arr.length)


// #For In - Suppose we have enumerable (which are in object) properties and we want to iterate on these properties.
// Ex.
// let obj = {
//     name: "sanyo",
//     age: 23,
//     "Full Name ": "SD",
//     greet: function () {
//         console.log("Hello guys")
//     }
// }
// console.log(obj)

// Using for in loop
// for (let key in obj) {
//     console.log(key, " : ", obj[key])
// }


// # For Of - iterable objects(like arrays, strings, etc.)
// Ex. 1)
// let arr = [10, 20, 30, 40]
// for (let value of arr) {
//     console.log(value)
// }

// Ex. 2) 
// let arr = "Hello"
// for (let value of arr) {
//     console.log(value)
// }
// Output - H, e, l, o