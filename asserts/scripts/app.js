let message = "Hello"

message = "Hello there!" // new value will be produced, we can't edit the original value
message = message.concat("!!!!") //  new value will be produced, we can't edit the original value


const hobbies = ["Sports", "Travelling"] // address of array stores in variable not the value

// const technically does not mean that the value can't be edited,
hobbies.push("Dancing") // editing the original array value, so array in the address changes but address won't change

// but the variable can't be overwritten
// hobbies = [] // invalid,