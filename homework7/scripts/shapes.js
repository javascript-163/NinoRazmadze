class Shape {
    constructor(name) {
      this.name = name;
    }
    area() {
      console.log("Area calculation not implemented for generic shape.");
    }
  }
  class Circle extends Shape {
    constructor(name, radius) {
      super(name);
      this.radius = radius;
    }
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  class Rectangle extends Shape {
    constructor(name, width, height) {
      super(name);
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
  }
  class Triangle extends Shape {
    constructor(name, base, height) {
      super(name);
      this.base = base;
      this.height = height;
    }
    area() {
      return (this.base * this.height) / 2;
    }
  }
  function calculateArea(name, shape) {
    console.log(
      `The name of this shape is ${shape.name} and the area of ${shape.name} is ${shape.area()}. `
    );
  }
  
  let circle = new Circle("Circle",5)
  let rectangle = new Rectangle("Rectange",5,7)
  let triangle = new Triangle("Triangle",5,3)
  
  
  calculateArea("Circle",circle)
  calculateArea("Rectangle",rectangle)
  calculateArea("Triangle", triangle)