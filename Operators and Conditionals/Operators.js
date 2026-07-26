
// #----#  Operators  #----#

// operators are symbols which can perform operations
// Here we have
// 1) Arithmetic Operators (+,-,*,/,%,**, ++, -- )
// 2) Assignement Operators ( = , +=, -=, *=, /=)
// 3) Comparison Operators ( ==, ===, <, <=, >, >=, !=, !==)
// 4) Logical Operators
// 5) Bitwise Operators
// 6) Ternary Operators

// lets say  1 + 2, here 1 and 2 are operands and + is Operator.

// #Unary Operators -> ++(increment) and --(decrement)
// Both have two types i.e Pre and Post
// we can say 1)++ -> Pre Increment and Post Increment AND 2) -- -> Pre Increment and Post Increment
// let a = 5
// console.log(++a)
// console.log(a++)
// console.log(--a)
// console.log(a--)


// 3) Comparison Operators ( ==, ===, <, <=, >, >=, !=, !==)
// Comparison Operators always gives output in either True or False Value.
// console.log(10 > 5)
// console.log(10 < 5)
// console.log(10 >= 5)
// console.log(10 <= 5)
// console.log(5 == 5)
// console.log(5 == 4)

// In Comparison Operators we have Loose(== or !=) and Strict (===, !==) euqality or inequality.
// Strict quality means both data type and value should be same (whatever the data type u r using)- return boolean values as output.
// Ex. 1) strict equality -
// let a = "10";
// let b = "10";
// let c = 10;
// console.log(a === b)
// console.log(a === c)

// 2) Loose Equality
// console.log(a == c) // even if data type is different gives output as true

// 3) strict inequality -
// console.log(a !== b)
// console.log(a !== c)


// #4) Logical Operator - Used to connect two expressions/condition to make decision. In which we have AND, OR, NOT.

// - AND(&& or and) -> If all true then answer is true , and if any 1 is false then answer is false.

// - OR(|| or or) -> if any one is true then it will answer true, and if all are false then answer is False.

// - NOT ( ! or not)

// ## Working with non booleans
// falsy - Undefines, Null, 0, false, NAN, " "
// truthy - anything which is not falsy
// console.log(false && "bubbr") // Output - false
// console.log(false || 3) // Output - 3
// console.log(true || "hello") // Output - true

// ## Short Circuiting
// Suppose :
// (false || true || false || true || false)
// Here what will happen only first true condition will be checked and answer will be true
// EX. console.log (false || true || false || true || false)
// console.log (false || 7 || 11 || 5 || false)


// #5) Bitwise Operator - here we have (XOR - ^), (AND - & ), (OR - |), (NOT - ~), (left Shift - <<), (right shift - >>).
// Here, Bit means binary Langauge 0 and 1, which computers understand .
// ** IMP **
// # Left Shift(<<) : Number gets multiply by 2
// # Right Shift (>>) : Number gets divided by 2
// #6) Ternary Operators
// these are used in conditionals
// syntax -
//     (condition) ? value 1(if true condtion) : value 2(if false condition)
// Ex 1)-

// let age = 15;
// let status = (age > 18) ? "u can vote " : "No Voting"
// console.log(status)