
console.log(">-------------< SWITCH-CASE >-------------<")

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


console.log(">-------------< STRING MANIPULATION FUNCTIONS >-------------<")

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

    console.log(currentCharacter, " ")
    dilatedString += currentCharacter + "   "
}

console.log(dilatedString)

// H e l l o