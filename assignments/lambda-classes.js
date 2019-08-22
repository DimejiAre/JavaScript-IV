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

let gabe = new Instructor({
    name: 'Gabe',
    age: '42',
    location: 'Seattle',
    speciality: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'I need my serotonin!!',
});

console.log(gabe);
console.log(gabe.demo('javascript'));
console.log(gabe.grade({name: 'Isaac'}, 'javascript'));

let josh = new Instructor({
    name: 'Josh',
    age: '37',
    location: 'Chicago',
    speciality: 'Back-end',
    favLanguage: 'Python',
    catchPhrase: 'Let\'s get this show on the road!!',
});

console.log(josh);
console.log(josh.demo('python'));
console.log(josh.grade({name: 'Peter'}, 'python'));