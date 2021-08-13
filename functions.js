// We need to declare functions BEFORE using them
// (will throw an error otherwise)

const writeHeader = function(title) {
    console.log(`\n\n]>-------------<[ ${title.toUpperCase()} ]>-------------<[`)
}

writeHeader("Switch-case")


//-------- THE LESSON ACTUALLY STARTED FROM DOWN HERE --------------------
//-------- vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv --------------------

let userName = "Rafael"

let greeting

/*if (userName === "John") {
    greeting = "Good morning, John!"
} else if (userName === "Rafael") {
    greeting = "Bom dia, Rafael!!!"
} else if (userName === "Bogdan") {
    greeting = "Buna ziua, Bogdan!"
} else if (userName === "Lorenzo") {
    greeting = "Buongiorno Lorenzo!"
} else {
    greeting = "Hi " + userName
}*/

switch(userName)
{
    case "John": greeting = "Good morning, John!"; break
    case "Rafael": greeting = "Bom dia, Rafael!"; break
    case "Bogdan": greeting = "Buna ziua, Bogdan!"; break
    case "Lorenzo": greeting = "Buongiorno Lorenzo!"; break
    default: greeting = "Hi " + userName; break
}

console.log("A new user joined.", greeting)


writeHeader("STRING MANIPULATION")

let helloStriversString = "Hello Strivers" // We can access individual characters as if it were an array
                    //     0123456789   <-- these are the indexes

console.log("The seventh character is", helloStriversString[6])

let dilatedString = ""
for (let i = 0; i < helloStriversString.length; i++) {
    
    let currentCharacter = helloStriversString[i]

    if (currentCharacter === " ")
        continue

    if (currentCharacter === "i")
        break

    console.log(currentCharacter)
    dilatedString += currentCharacter + "   "
}

console.log(dilatedString)

// H e l l o

// --------------- SCOPE OF A VARIABLE ---------------
// a variable only exists in its enclosing brackets (scope)

writeHeader("SCOPE OF A VARIABLE")

if (true) 
// else
// while
// for
{
    let scopedVariable = "I'm a scoped variable, I only exist in my enclosing brackets"
    console.log(scopedVariable)
} // As soon as we leave this BLOCK OF CODE {}, all variables declared inside of it will disappear

// console.log(scopedVariable) <<--- this line will throw an error: ReferenceError: scopedVariable is not defined


// --------------- LET VS CONST ---------------
let myEverchangingVariable = "First value"
myEverchangingVariable = "Second value"
myEverchangingVariable = "Third value"

const myFixedVariable = "InitialValue"
// myFixedVariable = "AnotherValue" <<--- this line will throw an error: TypeError: Assignment to constant variable.

// USAGE:
// - when you need a value to be immutable
// - for performance reasons: const consumes less memory. Prefer it when you know in advance that it wouldn't change its value

var myDearOldVar = "Please don't use me anymore"
// - AVOID using VAR. It's the old way to declare variables in JavaScript; has GLOBAL SCOPE (that's BAD)

const myMutableObject = { 
    name: "John",
    surname: "Blox"
 }

myMutableObject.name = "Harry" // CONST doesn't prevent me to modify the object (or array) itself
// myMutableObject = {}   // It only prevents to change it to be ANOTHER object

// --------------- STRING MANIPULATION FUNCTIONS ---------------
writeHeader("STRING MANIPULATION FUNCTIONS")
// More about string functions on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

writeHeader("TO UPPER/LOWER CASE")
let welcomeYell = greeting.toUpperCase()
console.log(welcomeYell)

let whisperYell = greeting.toLowerCase()
console.log(whisperYell)

writeHeader("FINDING THE FIRST OCCURRENCE OF A SUBSTRING")
let indexOfRaf = greeting.indexOf("Raf")
console.log(indexOfRaf)

writeHeader("GETTING A SUBSTRING")
let extractedName = greeting.slice(9, 15)
console.log(extractedName)


writeHeader("SPLIT INTO SEVERAL STRINGS")
let splittedStrings = greeting.split(" ")
console.log(splittedStrings)


writeHeader("JOIN THEM BACK")
let dashedGreeting = splittedStrings.join("---")
console.log(dashedGreeting)



// --------------- CREATING OUR OWN FUNCTIONS ---------------

writeHeader("JOIN STRINGS THROUGH OUR OWN FUNCTION")
const joinTwoStrings = function(firstString, secondString) {
    let result = firstString + " <--> " + secondString
    return result
}

let joinedString = joinTwoStrings("Hi", "Zee")
console.log(joinedString)

joinedString = joinTwoStrings("Hello", "Matteo")
console.log(joinedString)

console.log(joinTwoStrings("Hi", "Rashmi"))