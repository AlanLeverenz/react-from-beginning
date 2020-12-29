// Supplemental 

const x = {
    name: "Rob"
}

const a = x;
a.name = "Jim"

console.log(x);
// => Jim
// we made a copy of the variable x
// as if we renamed it
// a points to x

// here we spread the x object, which doesn't change x
// it loops through all the key value pairs
const a = {
    ...x
};

a.name = "Jim";

console.log(x);
// => Rob