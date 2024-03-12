function handleTimeout1() {
    console.log("Timeout!")
}

setTimeout(handleTimeout1, 2000)

const handleTimeout2 = () => { console.log("Timeout again!")}

setTimeout(handleTimeout2, 3000)

setTimeout(() => console.log("More Timeout!"), 4000)


function greet(greetFn) {
    greetFn()
}

greet(() => console.log("Hello Buddy"))


