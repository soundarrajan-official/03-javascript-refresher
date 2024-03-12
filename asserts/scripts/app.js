const hobbies = ["Sports", "Travelling", "Trekking"]

console.log(hobbies)
console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])

hobbies.push("Dancing")

console.log(hobbies[3])

const dancingIndexNumber = hobbies.findIndex(hobby => hobby === "Dancing");

console.log(dancingIndexNumber)

let editedHobbies = hobbies.map(hobby => ({hobby: hobby}));

console.log(editedHobbies)
console.log(editedHobbies[0].hobby)
console.log(editedHobbies[1].hobby)
console.log(editedHobbies[2].hobby)
console.log(editedHobbies[3].hobby)

console.log(hobbies)

