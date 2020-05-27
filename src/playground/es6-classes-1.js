class Person  {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
    
        return `Hi. I am ${this.name}`;
    }
    getDescription() {
        return `Hi, my name is ${this.name} and my age is ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, major, location) {
        super(name, age, major);
        this.location = location
    }
    hasLocation() {
        return !!this.location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation) {
            greeting += ` I'm visiting from ${this.location} `;
        }
        return greeting;
    }
    
}

const me = new Traveler('Spencer Harris', 31, 'Software Engineer', 'Spokane Washington');
console.log(me.getGreeting());


const other = new Traveler();
console.log(other.getGreeting());