// CODE here for your Lambda Classes

class Person {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(data) {
        super(data);
        this.speciality = data.speciality;
        this.favLanguage = data.favLanguage;
        this.catchPhrase = data.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    adjustGrade(student) {
        while (true) {
            let num = Math.floor(Math.random() * 90) + 1;
            num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            let newgrade = student.grade + (num);
            if (newgrade > 1 && newgrade < 100) {
                student.grade = newgrade;
                break;
            }
        }
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
gabe.speak();
gabe.demo('javascript');
gabe.grade({ name: 'Isaac' }, 'javascript');

let josh = new Instructor({
    name: 'Josh',
    age: '37',
    location: 'Chicago',
    speciality: 'Back-end',
    favLanguage: 'Python',
    catchPhrase: 'Let\'s get this show on the road!!',
});

console.log(josh);
josh.speak();
josh.demo('python');
josh.grade({ name: 'Peter' }, 'python');


class Student extends Person {
    constructor(data) {
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
        this.grade = 50;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate(){
        if(this.grade >= 70){
            console.log('You have Graduated!!')
        } else{
            console.log('Go back to grading assignments to increase score')
        }
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
melqui.speak();
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
austin.speak();
austin.listsSubjects();
austin.PRAssignment('CSS');
austin.sprintChallenge('CSS');


class ProjectManager extends Instructor {
    constructor(data) {
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

let jose = new ProjectManager({
    name: 'Jose',
    age: '32',
    location: 'Lagos',
    speciality: 'Back-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Hope we are recharged!!',
    gradClassName: 'WEBEU2',
    favInstructor: 'Sean',
})

console.log(jose);
jose.speak();
jose.standUp('webeu3_josemaria');
jose.debugsCode({ name: 'Dimeji' }, 'CSS');

let tobi = new ProjectManager({
    name: 'Tobi',
    age: '35',
    location: 'Lagos',
    speciality: 'Front-end',
    favLanguage: 'CSS',
    catchPhrase: 'Beautiful!!!',
    gradClassName: 'WEBEU2',
    favInstructor: 'Gabe',
})

console.log(tobi);
tobi.speak();
tobi.standUp('webeu3_tobi');
tobi.debugsCode({ name: 'Megan' }, 'HTML');