// All reducers have 2 params:
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
  if (action.type === 'updateMeat') {
    console.log('I care about this action!!!');
    console.log(action);
    // we make a copy of state, because we never ever mutate state
    // if (action.type === 'updateMeat') {
    let newState = [...state];
    const payload = action.payload;
    newState[payload.index].quantity += payload.qChange;
    return newState;
  } else if (action.type === 'clearInventory') {
    let newState = [...state];
    newState.forEach((item, i) => {
      item.quantity = 0;
    });
    return newState;
  } else {
    return state;
  }
};
// };
