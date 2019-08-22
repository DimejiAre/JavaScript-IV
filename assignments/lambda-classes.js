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


class Student extends Person{
    constructor(data){
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(subject=>console.log(subject));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

let melqui = new Student({
    name: 'Melqui',
    age: '21',
    location: 'Portugal',
    previousBackground: 'Junior web developer',
    className: 'WEBEU3',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
})

console.log(melqui);
melqui.listsSubjects();
melqui.PRAssignment('CSS');
melqui.sprintChallenge('CSS');


let austin = new Student({
    name: 'Austin',
    age: '32',
    location: 'Kenya',
    previousBackground: 'Footballer',
    className: 'WEBEU3',
    favSubjects: ['Node.js', 'React'],
})

console.log(austin);
austin.listsSubjects();
austin.PRAssignment('CSS');
austin.sprintChallenge('CSS');