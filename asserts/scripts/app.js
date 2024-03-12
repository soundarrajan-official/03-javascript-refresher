const userNameData = ["John", "Cena"]

const firstName = userNameData[0]
const lastName = userNameData[1]

console.log(firstName)
console.log(lastName)

const [userFirstName, userLastName] = ["John", "Cena"]

console.log(userFirstName)
console.log(userLastName)

const user = {
    name: "Raj",
    age: 16
}

console.log(user.name)
console.log(user.age)

const {name, age} = {
    name: "Raj",
    age: 16
}

console.log(name)
console.log(age)

const {name: userName, age: userAge} = {
    name: "Raj",
    age: 16
}

console.log(userName)
console.log(userAge)
