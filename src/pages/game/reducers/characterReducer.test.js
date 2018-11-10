import { characterInitialState, characterReducer } from './characterReducer';
import { damageCharacter } from '../actionCreators';

describe('CharacterReducer', () => {
  it('Returns the state as default', () => {
    expect(characterReducer(characterInitialState, {})).toEqual(
      characterInitialState
    );
  });

  describe('DAMAGE_CHARACTER', () => {
    it('subtracts the value from the characters health', () => {
      expect(
        characterReducer({ health: 10 }, damageCharacter('player')(5))
      ).toEqual({
        health: 5,
      });
    });

    it('subtracts the value from the characters health and can reduce to below 0', () => {
      expect(
        characterReducer({ health: 10 }, damageCharacter('player')(15))
      ).toEqual({
        health: -5,
      });
    });
  });
});
