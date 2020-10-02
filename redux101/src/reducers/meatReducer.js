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
    console.log.log('I care about this action!!!');
    // we make a copy of state, becuase we never ever mutate state
    const newState = [...state];
    if (action.payload.operation === '+') {
      newState[action.payload.index].quantity++;
    } else if (action.payload.operation === '-') {
      newState[action.payload.index].quantity--;
    }
    return newState;
  } else {
    return state;
  }
};

// function frozen(state = [], action) {
//     return state;
// }
// export default frozen;
