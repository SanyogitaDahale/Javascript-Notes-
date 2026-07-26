// Variables in JS
// Used to store data in it
//Using three ways we can declare varivale which are var, let, const.

// ###  Var  ###
//It is either globally scoped or functional scoped.
// when we use it using var inside a function , we cannot access the variable outside the function.
// Also var allows variable to reassigned and redefine a variable within same scope.This behavior may lead to bugs and unexpected result if we dont use it carefully.
// If we write variable outside function using var we can use it anywhere i.e it is globally scope(in file we can use it anywhere)
// using var redeclaration is not recommended, because it can cause debugging issues.
// EX. 1) variable using var inside function

// function solve() {
//     var a = 5;
//     console.log(a);
// }
// solve()
// console.log(a) // give error as a is not define

// EX. 2) variable using var outside function

// var a = 5;

// if (true) {
//     console.log(a)
// }
// a = 6; // can be reassigned
// var a  = 8 //can be redefined but not recommended
// console.log(a)


// ### Let ###
// Blocked Scope - if created in block then only accessed in block
// Redeclaration is not allowed and redefined is also noy allowed but can be reassigned.
// ex 1) Creates in blocks
// {
//     let a = 10
// }
// console.log(a)

// ex 2)
// {
//     let b = 5
//     console.log(b)
// }


// ### Const ###
// once we assign it , can not be changed later .
// const a = 90;
// console.log(a)