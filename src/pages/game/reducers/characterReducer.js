const createRandomPlayer = () => ({
  name: `Character-${Math.floor(Math.random() * 1000)}`,
  health: Math.floor(Math.random() * 10) + 20,
  attackDice: 1,
});

export const characterReducer = (state = createRandomPlayer(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
