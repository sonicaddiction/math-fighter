const initialRoundState = {
  currentRound: 0,
  infoText: [],
};

export const roundReducer = (
  state: Battle = initialRoundState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
