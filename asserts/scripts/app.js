const user = {
    name: "Raj",
    age: "16",
    greet() {
        console.log("Hello I am " + this.name)
        console.log("I am " + this.age + " years old boy")
    }
}

console.log(user)
console.log(user.name)
console.log(user.age)

user.greet()

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log("Hello I am " + this.name)
        console.log("I am " + this.age + " years old boy")
    }
}

const user1 = new User("Raj", 16);

console.log(user1)
console.log(user1.name)
console.log(user1.age)

user1.greet()