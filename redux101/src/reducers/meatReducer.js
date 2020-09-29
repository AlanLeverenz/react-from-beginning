// All reducers hvae 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
  {
    food: 'chicken',
    quantity: 14,
  },
  {
    food: 'bacon',
    quantity: 11,
  },
  {
    food: 'mahi mahi',
    quantity: 36,
  },
  {
    food: 'salmon',
    quantity: 130,
  },
];
export default (state = seedData, action) => {
  return state;
};

// function frozen(state = [], action) {
//     return state;
// }
// export default frozen;
