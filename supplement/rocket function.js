// Supplemental

// Rockets > Arrows

// callback function

// named function
function x() {
    return 1;
}

// anonymous function placed inside
setInterval(function(){
    return 1;
},1000);

// anonymous function using rocket notation
setInterval(()=>{
    return 1;
},1000);

// a constructor
function Rocket(speed){
    this.speed = speed;
}

// const myRocket = new Rocket('30k');
// console.log(myRocket.speed);

// add prototype to the constructor
// Rocket.prototype.blastOff = function(){
//     console.log(this);
//     return "Blast Off!!"
// }

// returns the global "this" using the rocket function
// Rocket.prototype.blastOff = ()=>{
//     console.log(this);
//     return "Blast Off!!"
// }

// can be shortened 
Rocket.prototype.blastOff = () => "Blast Off!!";

// create a new instance, now with the prototype property
const myRocket = new Rocket('30k');
// console.log(myRocket.speed);

console.log(myRocket.blastOff());

const a = [1,2,3,4,5];

a.forEach((item,i)=>{
    console.log(item)
})

// returns an array
a.filter((item,i)=>{
    return item === 4
});

console.log(a.filter((item,i)=>{
    return item === 4
}));

// shorten
console.log(a.filter((item,i)=> item === 4 ));


