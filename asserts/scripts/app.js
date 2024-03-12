const hobbies = ["Sports", "Travelling"]
const newHobbies = ["Dancing"]

const mergedHobbies1 = [hobbies, newHobbies]

console.log(mergedHobbies1)

const mergedHobbies2 = [...hobbies, ...newHobbies]

console.log(mergedHobbies2)

const user = {
    name: "Raj",
    age: 16
}

const extendedUser1 = {
    isAdmin: true,
    user
}

console.log(extendedUser1)

const extendedUser2 = {
    isAdmin: true,
    ...user
}

console.log(extendedUser2)



