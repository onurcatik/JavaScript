const person = {
  fullName: "Onur Çatık",
  age: 27,
  isStudent: true,
  hobbies: ["karate", "chesse", "cooking"],
  address: {
    street: "124 Conch Street",
    city: "Bikini Bottom",
    country: "International Wars",
  },
};

console.log(person.fullName); // SpongeBob SquarePants
console.log(person.age); // 30
console.log(person.isStudent); // true
console.log(person.hobbies); // ["karate", "jellyfishing", "cooking"]

console.log(person.address); // { street: "124 Conch Street", city: "Bikini Bottom", country: "International Waters" }
console.log(person.address.street); // 124 Conch Street
console.log(person.address.city); // Bikini Bottom
console.log(person.address.country); // International Waters

//  ---------------

for (const property in person.address) {
  console.log(property, person.address[property]);
}

//  -----------------

class Address {
  constructor(name, age,country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const person1 = new Person(
  "SpongeBob",
  30,
  "124 Conch Street",
  "Bikini Bottom",
  "International Waters"
);
const person2 = new Person(
  "Patrick",
  37,
  "128 Conch Street",
  "Bikini Bottom",
  "International Waters"
);
const person3 = new Person(
  "Squidward",
  45,
  "126 Conch Street",
  "Bikini Bottom",
  "International Waters"
);

console.log(person1.name); // SpongeBob
console.log(person1.age); // 30
console.log(person1.address.street); // 124 Conch Street
console.log(person1.address.city); // Bikini Bottom
console.log(person1.address.country); // International Waters

console.log(person3.name); // Squidward
console.log(person3.age); // 45
console.log(person3.address.street); // 126 Conch Street
console.log(person3.address.city); // Bikini Bottom
console.log(person3.address.country); // International Waters
