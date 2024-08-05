const person1 = {
    firstName : "Onur",
    lastName : "Çatık",
    age : 27,
    isEmployed : true
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed),

//  ---------------------

person1.sayHello = function ()  {
    console.log("Hi, I'm Onur")
}

person1.sayHello()

// ------------------------

person1.eat = () => {
    console.log("I'm eating")
}

person1.eat()