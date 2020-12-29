// Supplemental

// defining methods inside the class (not outside)
class Shape {
    constructor(h,w,type){
        this.h = h;
        this.w = w;
        this.type = type;
    }
    getType(){
        return this.type;
    }
    getArea(){
        return this.h * this.w;
    }
}

// a subclass extends the parent
class Square extends Shape {
    constructor(s){
        super(s,s,'square'); // calls the parent constructor/super class
    }
    // override getArea function
    getArea(){
        return this.h**2;
    }
}

const actualSquare = new Square(5);
console.log(actualSquare);
console.log(actualSquare.getType());
console.log(actualSquare.getArea());

let aRectangle = new Shape(10,5,'rectangle');
console.log(aRectangle);
console.log(aRectangle.getType());
console.log(aRectangle.getArea());