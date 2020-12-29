// Supplemental

// 'this' creates a local instance of its properties
function Shape(h,w,type){
    this.h = h;
    this.w = w;
    this.type = type;
}

// add methods to an object (constructor)
Shape.prototype.getType = function() {
    return this.type;
}

let aSquare = new Shape(10,10,'square');
console.log(aSquare);
console.log(aSquare.getType());

