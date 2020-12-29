// Supplemental


const me = "Alan";
const age = "70";
const job = "Arranger"

// const x = {
//     me: me,
//     age: age,
//     job: job
// }

const prop = 'aPropertyName';

// can shorten to this:
// the bracket is a value for a property name
const x = {
    me,
    age,
    job,
    [prop]: 'Hello'
}
console.log(x.me);
console.log(x);

