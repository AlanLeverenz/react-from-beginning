// All reducers hvae 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
  {
    food: 'TV Dinners',
    quantity: 10,
  },
  {
    food: 'Frozen Veggies',
    quantity: 21,
  },
  {
    food: 'Frozen Pizzas',
    quantity: 25,
  },
];
export default (state = seedData, action) => {
  return state;
};

// function frozen(state = [], action) {
//     return state;
// }
// export default frozen;
