// # ---- Strings in Javascript ---- #

// String is Sequence of Characters.
// Types to create Strings
// 1) single Quote ('')
// 2) Double Quote ("")
// 3) Backticks (``) //Ex. `${varName}${HEllO}`

// ex.
// let names = new String("Hello")
// console.log(names)

// # IF we want to print string in string -  (use back slash i.e (\)
// Ex.
// let s = "hello!! \"sanyogita\" how are you? "
// console.log(s)  // Output - hello!! "sanyogita" how are you?

// let p = "hello!! \\sanyogita\\ how are you? "
// console.log(p) // Output - hello!! \sanyogita\ how are you?

// #### Operations on String ####
// 1) Concatanation
// Ex.
// let fname = "sanyogita"
// let sname = "dahale"
// names = fname + " " + sname
// console.log(names)

// 2) Substring
// Used to extract a portion from string.
// Starting from specefic index position to another specifies index position Or to the end of the string.
// EX.
// let a = "Hello!! How are you?"
// console.log(a[0])// Output - H
// console.log(a.substring(2)) // Output - llo!! How are you?
// console.log(a.substring(2, 4)) // Output - ll

// 3) Split Methos on String
// Ex.
// let b = a.split(' ') //Has space
// let c = a.split('') //No Space
// console.log(b) // Output - ['Hello!!', 'How', 'are', 'you?']
// console.log(c) // Output - ['H', 'e', 'l', 'l', 'o', '!', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']

// 4) Join method in String
// Ex.
// let a = "Hello!! How are you?"
// let c = a.split('') //No Space
// console.log(c) // Output - ['H', 'e', 'l', 'l', 'o', '!', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
// console.log(c.join('')) // Output - Hello!! How are you?
// console.log(c.join("#")) // Output - H#e#l#l#o#!#!# #H#o#w# #a#r#e# #y#o#u#?

// 5) length
// Ex. 
// let fname = "sanYogita"
// console.log(fname.length)

// 6) uppercase
// Ex.
// console.log(fname.toUpperCase())

// 7) lowecase 
// Ex.
// console.log(fname.toLowerCase())
