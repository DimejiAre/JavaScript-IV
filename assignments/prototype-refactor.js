/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false;
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.

  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.

  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.

  TASK 4

  Use your imagination and come up with constructors that allow to build objects
  With amazing and original capabilities. Build 3 small ones, or a very
  complicated one with lots of state. Surprise us!

*/


/*
TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
*/

// TASK 1 SOLUTION
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  greet() {
    return `Hi! My name is ${this.name} and i'm ${this.age} years old`;
  }
  eat(food) {
    this.stomach.push(food);
  }
  poop() {
    this.stomach = [];
  }
}

// TASK 1 TEST
//   let dimeji = new Person('Dimeji', 15)
//   console.log(dimeji.greet())
//   dimeji.eat('suya')
//   dimeji.eat('cake')
//   dimeji.eat('banana')
//   console.log(dimeji.stomach)
//   dimeji.poop()
//   console.log(dimeji.stomach)



// TASK 2 SOLUTION
class Car {
  constructor(modelName, make) {
    this.model = modelName;
    this.make = make;
    this.odometer = 0;
    this.isCrashed = false;
  }
  drive(distance) {
    if (this.isCrashed === false) {
      this.odometer += distance;
    } else {
      return `I crashed at ${this.odometer} miles!`
    }
  }
  crash() {
    this.isCrashed = true;
  }
  repair() {
    this.isCrashed = false;
  }
}


// TASK 3 SOLUTION
class Baby extends Person2 {
  play() {
    return "Yipeee!!!";
  }
}

// TASK 4 SOLUTION
class Shirt {
  constructor(make, color) {
    this.color = color;
    this.make = make;
    this.isClean = true;
    this.isIroned = true;
    this.numOfWears = 0;
    this.inGoodCondition = true;
  }
  wash() {
    if (this.isClean) {
      return "It is already clean";
    } else {
      this.isClean = true;
    }
  }
  iron() {
    if (this.isIroned) {
      return "It is already ironed";
    } else {
      this.isIroned = true;
    }
  }
  wear() {
    if (this.inGoodCondition) {
      if (this.isClean && this.isIroned) {
        this.numOfWears += 1;
        this.isClean = false;
        this.isIroned = false;
        if (this.numOfWears > 10) {
          this.inGoodCondition = false;
        }
      }
      else {
        return "Make sure your shirt is washed and ironed";
      }
    } else {
      return "You have to mend this shirt before you can wear it"
    }
  }
  mend() {
    this.inGoodCondition = true;
  }
}

/*
 
  STRETCH TASK
 
  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
 
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
  constructor(data) {
    this.createdAt = data.createdAt;
    this.name = data.name;
    this.dimensions = data.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {
  constructor(data) {
    super(data);
    this.healthPoints = data.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats {
  constructor(data) {
    super(data);
    this.team = data.team;
    this.weapons = data.weapons;
    this.language = data.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});
const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});
const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
