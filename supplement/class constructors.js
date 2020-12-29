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
}

let aSquare = new Shape (10,10,'square');
console.log(aSquare);
console.log(aSquare.getType())

// a subclass extends the parent
class Square extends Shape {
    constructor(h,w){
        super(h,w,'square'); // calls the parent constructor/super class
    }
}

const actualSquare = new Square(5,5);
console.log(actualSquare);
console.log(actualSquare.getType());