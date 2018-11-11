import { roundReducer } from './roundReducer';
import { ADD_BATTLE_MESSAGE, INCREMENT_ROUND } from '../actionCreators';

describe('RoundReducer', () => {
  describe('ADD_BATTLE_MESSAGE', () => {
    it('adds a message to the message array', () => {
      expect(
        roundReducer(
          { infoText: [] },
          { type: ADD_BATTLE_MESSAGE, payload: 'message' }
        )
      ).toEqual({
        infoText: ['message'],
      });
    });

    it('adds a message to the end of the message array', () => {
      expect(
        roundReducer(
          { infoText: ['old message'] },
          { type: ADD_BATTLE_MESSAGE, payload: 'message' }
        )
      ).toEqual({
        infoText: ['old message', 'message'],
      });
    });
  });

  describe('INCREMENT_ROUND', () => {
    it('increments the currentRound', () => {
      expect(
        roundReducer({ currentRound: 0 }, { type: INCREMENT_ROUND })
      ).toEqual({
        currentRound: 1,
      });
    });
  });
});
