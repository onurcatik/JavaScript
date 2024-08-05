class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === 'string' && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge) {
        if (typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age must be a non-negative number");
        }
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

document.getElementById('person-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = parseInt(document.getElementById('age').value);

    const person = new Person(firstName, lastName, age);

    document.getElementById('display-first-name').textContent = person.firstName;
    document.getElementById('display-last-name').textContent = person.lastName;
    document.getElementById('display-age').textContent = person.age;
    document.getElementById('display-full-name').textContent = person.fullName;

    document.getElementById('person-info').classList.remove('hidden');
});
