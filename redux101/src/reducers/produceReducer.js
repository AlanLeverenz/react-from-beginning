// All reducers hvae 2 params:
// 1. Current State, usually provide a default state
// 2. Info that came from any action

const seedData = [
  {
    food: 'lettuce',
    quantity: 12,
  },
  {
    food: 'turnips',
    quantity: 24,
  },
  {
    food: 'apples',
    quantity: 35,
  },
  {
    food: 'cilantro',
    quantity: 135,
  },
];
export default (state = seedData, action) => {
  console.log('Produce reducer is running! (Data)');
  console.log(action);
  if (action.type === 'updateProduce') {
    console.log('I care about this action!!!');
    // we make a copy of state, because we never ever mutate state
    const payload = action.payload;
    const newState = [...state];
    newState[action.payload.index].quantity += payload.qChange;
    return newState;
  } else {
    return state;
  }
};
