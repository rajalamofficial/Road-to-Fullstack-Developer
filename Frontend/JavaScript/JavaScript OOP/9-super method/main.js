// class
class Shape{
    constructor(obj){
        this.object = obj;    
    }

    anObject(obj){
        return `This is a ${obj}!`;
    }
}

// class
class Circle extends Shape{
    // super constructor
    constructor(obj){
        super(obj);
    }

    // super method
    anObject(obj){
        return super.anObject(obj);
    }
}

// object instance shape
const shape = new Shape("Shape");
console.log(shape);
console.log(shape.anObject("Shape"));

// object instance circle
const circle = new Circle("Circle");
console.log(circle);
console.log(circle.anObject("Circle"))