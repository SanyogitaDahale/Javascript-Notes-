// #----#  Conditional Statement in Js   #----#

// 1) If else
// 2) If else if
// 3) Switch

// 1) If else
// Ex.Voting example
// let age = 19
// if (age > 18) {
//     console.log("You can Vote")
// }
// else {
//     console.log("You can not Vote")
// }

// 2) If else if - use when multiple condition
// Ex.Voting example
// let age = 18
// if (age > 18) {
//     console.log("You can Vote")
// }
// else if (age == 18) {
//     console.log("you are 18, you can vote")
// }
// else {
//     console.log("You can not Vote")
// }


// 3) Nested If else (IMP)
// let num = 5;
// let age = 18;
// if (num == 1) {
//     console.log(1)
// }
// else if (num == 2) {
//     console.log(2)
// }
// else if (num == 3) {
//     console.log(3)
// }
// else if (num == 4) {
//     if (age > 18) {
//         console.log("Vote")
//     }
//     else if (age == 18) {
//         console.log("you are 18, you can vote")
//     }
//     else {
//         console.log("You can not Vote")
//     }
// }
// else {
//     console.log("Done")
// }


// 4) Switch Statement - writing break is imp in switch statement (if u dont then, when condition satisfies its next condition also visible in output to avoid that we use break.)
// Example 
// let num = 3
// switch (num) {
//     case 1: console.log("A");
//         break
//     case 2: console.log("B");
//         break
//     case 3: console.log("C");
//         break
//     default: console.log("D");
// }