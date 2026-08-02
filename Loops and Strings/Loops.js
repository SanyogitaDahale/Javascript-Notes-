// # ---- Loops in Javascript ---- #

// Loops are used when state of instructions are executed repeatedly

// 1) For loop
// 2) While loop
// 3) do while loop

// 4) for in        These three we will
// 5) for each    - learn when we have
// 6) for of        studies Arrays


// ## 1) For Loop - When Condition is false loop stops.
// syntax:
// for (initialization; Condition; Updation)
// {
//     loop logic
// }

// Ex. This loop will iterate 10 times
// for (let i = 1; i <= 10; i++){
//     console.log("Don", i)
// }

// Ex. Output of for loop 2, 4, 6
// for (let j = 1; j <= 5; j++){
//     j += 1
//     console.log(j)
// }

// #Reverse Counting using for loop
// for (let i = 5; i > 0; i--){
//     console.log(i)
// }


// #We have Two important Keywords - 1) break 2) continue

// 1) break
// when break reach -> stop the code(i.e stop wherever the iteration is) -> go out of loop.
// ex.
// for (let i = 1; i <= 10; i++){
//     if (i == 5) {
//         break;
//     }
//     else {
//         console.log(i);
//     }
// }
// Output will be -1
//                 2
//                 3
//                 4



// 2) continue
// Used when we need to skip current iteration and move ahead.
// ex.
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }
// Output will be: Here 5 is skipped
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10



// ## 2) While Loop
// syntax:
//    intitalization
//    while (condition) {
//        loop logic
//        Updation
//    }

// Ex 1)
// let i = 1;
// while (i < 11) {
//     console.log(i)
//     i++;
// }

// Ex 2)
// let i = 10;
// while (i > 0) {
//     console.log(i)
//     i--;
// }

// Ex 3) - Using break
// let i = 1;
// while (i < 9) {
//     if (i == 6) {
//         break;
//     }
//     else {
//         console.log(i)
//     }
//     i++
// }

// Ex 3) - Using continue
// let i = 1;
// while (i < 5) {
//     if (i == 3) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;
// }


// ## 3) do while loop

// Not used as much as other loops
// Syntax is given below:
// initialization
// do {
//     Logic
//     Updation
// }
// while (condition);

// let i = 1;
// do {
//     console.log(i)
//     i++
// }
// while(i <= 5)

