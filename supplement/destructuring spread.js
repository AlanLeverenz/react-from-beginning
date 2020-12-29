// Supplemental

// destructuring an object
// spreading an object
// ... unpacks or iterates an array

const moreAbilities = ['speed','smart','telepathy'];

const dataFromApi = {
    name: "Thanos",
    age: "80",
    job: "Super Bad Guy",
    abilities: ['strength',...moreAbilities,'immortal','destruction',]
}

console.log(dataFromApi);

// destructured an object
const { name,age,job} = dataFromApi;
const name = dataFromApi.name
const age = dataFromApi.age
const job = dataFromApi.job

// assigned the destructured variables to another const object
const x = {
    name,
    age,
    job
}
console.log(x);