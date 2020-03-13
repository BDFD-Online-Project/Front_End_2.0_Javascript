class Rectangle {
  //Set Up
  constructor(_width, _heigh, _color) {
    this.width = _width;
    this.heigh = _heigh;
    this.color = _color;
  }
  getArea() {
    return this.width * this.heigh;
  }
  printDescription() {
    console.log(
      `I am a rectangle of ${this.width}*${this.heigh} and I m ${this.color}`
    );
  }
}
// ${}
let myRetangle1 = new Rectangle(3, 5, 'blue');
console.log(myRetangle1.getArea());
myRetangle1.printDescription();

class SmallSquare {
  //Set Up
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.numOfRequestForArea = 0;
  }
  get area() {
    this.numOfRequestForArea++;
    this.width++;
    this.height++;
    console.log(this.numOfRequestForArea);
    return this.width * this.height;
  }
  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}
let square1 = new SmallSquare(4);
square1.area = 25;
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.numOfRequestForArea);

class Square {
  //Set Up
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }
  static equal(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimension(width, height) {
    return width === height;
  }
}
let square2 = new Square(8);
let square3 = new Square(8);
console.log(Square.equal(square2, square3));

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old.`);
  }
}
class Programmer extends Person {
  constructor(_name, _age, _yearOfExperience) {
    super(_name, _age);
    //Customer Behaviours
    this.yearOfExperience = _yearOfExperience;
  }
  code() {
    console.log(`${this.name} is coding.`);
  }
}
// person1.code(); //TypeError: person1.code is not a function
// programmer1.code();
const programmers = [
  new Programmer('Dom', 56, 12),
  new Programmer('Jeff', 45, 5),
  new Programmer('Jenny', 40, 20)
];
function developSoftware(programmers) {
  //Develop Software
  for (let programmer of programmers) {
    programmer.describe();
    programmer.code();
  }
}
developSoftware(programmers);

class Animal {
  constructor(name) {}
}
