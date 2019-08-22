// CODE here for your Lambda Classes

class Person {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(data) {
        super(data);
        this.speciality = data.speciality;
        this.favLanguage = data.favLanguage;
        this.catchPhrase = data.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}