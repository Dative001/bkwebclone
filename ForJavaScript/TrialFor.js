
// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
        var fontStyle = "color: tomato; font-size: 50px";
        if (reason == 'birthday') {
            console.log(`%cHappy Birthday`, fontStyle);
        } else if (reason == "champions") {
            console.log(`%cCongrats on the title!`, fontStyle);
        } else {
            console.log(message, style);
        }
    }
// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    if (typeof reason === "string") {
        consoleStyler(color, background, fontSize, txt);
        celebrateStyler(reason);
    }
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it', 'champions');
// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log(this.energy);
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log(this.energy);
 }   
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor( name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage
            
    }
    goToWork() {
        this.xp += 10;
        console.log(this.xp);
   } 
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}
 console.log(intern());
// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}
    console.log(manager());

    function logDairy() {

        const logDairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
        for (let dairy of logDairy) {
          console.log(`${dairy}`);
        }
      
      }
      logDairy();
      // Task 2
      const animal = {
          canJump: true
        };
        const bird = Object.create(animal);
        bird.canFly = true;
        bird.hasFeathers = true;
      
      function birdCan() {
        for (let value of Object.keys(bird)) {
        
          console.log(`${value}: ${bird[value]}`)
          // Output Like 
          // canFly: true
          //hasFeathers: true
          
        }
      }
      birdCan();
      
      function animalCan() {
      
        for (let value in bird)
       {     
         console.log(`${value}: ${bird[value]}`);
          }
      }
      animalCan();
      export default message;

