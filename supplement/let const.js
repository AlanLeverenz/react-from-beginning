// Supplemental 

// Using var, which exists outside the statement
for (var i = 0; i < 10; i++) {
  console.log(i)
}
console.log(i);

// Using let, this will produce an error since i is defined inside the for statement
for (let i = 0; i < 10; i++) {
  console.log(i)
}
console.log(i);

// Using let, the y value in the if statement can be stated outside after its value is set
let x = 1;
let y;
if(x === 1) {
  y = 2;
} else {
  y = 3;
}
console.log(y);