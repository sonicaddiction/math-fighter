import { characterInitialState, characterReducer } from './characterReducer';
import { DAMAGE_CHARACTER, SET_CHARACTER_NAME } from '../actionCreators';

describe('CharacterReducer', () => {
  it('Returns the state as default', () => {
    expect(characterReducer(characterInitialState, {})).toEqual(
      characterInitialState
    );
  });

  describe('DAMAGE_CHARACTER', () => {
    it('subtracts the value from the characters health', () => {
      expect(
        characterReducer({ health: 10 }, { type: DAMAGE_CHARACTER, payload: 5 })
      ).toEqual({
        health: 5,
      });
    });

    it('subtracts the value from the characters health and can reduce to below 0', () => {
      expect(
        characterReducer(
          { health: 10 },
          { type: DAMAGE_CHARACTER, payload: 15 }
        )
      ).toEqual({
        health: -5,
      });
    });
  });

  describe('SET_CHARACTER_NAME', () => {
    it('subtracts the value from the characters health', () => {
      expect(
        characterReducer({}, { type: SET_CHARACTER_NAME, payload: 'Name 1' })
      ).toEqual({
        name: 'Name 1',
      });
    });
  });
});
