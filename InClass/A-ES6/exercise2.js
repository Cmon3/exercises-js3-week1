class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon(300, 400);
p.sayName();
// console.log('The area of this polygon is ' + p.area);

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
  }

  get area() {
    return this.width * this.height;
  }

  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
console.log('The area of this rectangle is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class Triangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Triangle";
    this.sides = 3;
  }

  get area() {
    return (this.width * this.height) / 2;
  }

  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let t = new Triangle(50, 60);
t.sayName();

console.log(`triangles area is ${t.area}`);

class Circle extends Polygon {
    constructor(radius) {
      super(radius, radius)
      this.sides = Infinity
      this.name = "circle"
    }

    get area() {
      return Math.PI * this.width * this.height 
    }
}

const c = new Circle(30)
c.sayName()
console.log(`The area of my ${c.name} is ${c.area}`)