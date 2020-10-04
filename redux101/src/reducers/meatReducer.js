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
  console.log('Meat reducer is running! (Data)');
  console.log(action);
  if (action.type === 'updateMeat') {
    console.log('I care about this action!!!');
    console.log(action);
    // we make a copy of state, becuase we never ever mutate state
    if (action.type === 'updateMeat') {
      const newState = [...state];
      const payload = action.payload;
      newState[payload.index].quantity += payload.qChange;
      return newState;
    } else {
      return state;
    }
  }
};
