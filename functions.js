
console.log(">-------------< SWITCH-CASE >-------------<")

let userName = "Rafael"

let greeting

if (userName === "John") {
    greeting = "Good morning, John!"
} else if (userName === "Rafael") {
    greeting = "Bom dia, Rafael!"
} else if (userName === "Bogdan") {
    greeting = "Buna ziua, Bogdan!"
} else if (userName === "Lorenzo") {
    greeting = "Buongiorno Lorenzo!"
} else {
    greeting = "Hi " + userName
}

switch(userName)
{
    case "John": greeting = "Good morning, John!"; break
    case "Rafael": greeting = "Bom dia, Rafael!"; break
    case "Bogdan": greeting = "Buna ziua, Bogdan!"; break
    case "Lorenzo": greeting = "Buongiorno Lorenzo!"; break
    default: greeting = "Hi " + userName; break
}

console.log(greeting)

