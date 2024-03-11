import arrowFunctionGreet from "./util.js"
import { anonymousFunction } from "./util.js";

function greet() {
    console.log("Hello Dude")
}

greet()
greet()

function greetWithUserNameAndMessage(userName, message) {
    console.log(userName)
    console.log(message)
}

greetWithUserNameAndMessage("Max", "Hello")
greetWithUserNameAndMessage("John", "Hey")

function greeting(userName, message = "Hi", message2) {
    console.log(userName)
    console.log(message)
    console.log(message2)
}

greeting("Max")
greeting("John", "Hello, What's up", "Long time, No see")

function createGreeting(userName, message) {
    return "Hello " + userName + " " + message
}

let greeting1 = createGreeting("Maddy", "What's up Bro");
console.log(greeting1)

anonymousFunction()

const arrowFunctionResult = arrowFunctionGreet();
console.log(arrowFunctionResult)

