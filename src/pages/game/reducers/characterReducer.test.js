import { characterInitialState, characterReducer } from './characterReducer';
import {
  DAMAGE_CHARACTER,
  SET_CHARACTER_NAME,
  SET_CHARACTER_HEALTH,
  SET_CHARACTER_ATTACK_DICE,
} from '../actionCreators';

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
    it('sets character name', () => {
      expect(
        characterReducer({}, { type: SET_CHARACTER_NAME, payload: 'Name 1' })
      ).toEqual({
        name: 'Name 1',
      });
    });
  });

  describe('SET_CHARACTER_HEALTH', () => {
    it('sets character health', () => {
      expect(
        characterReducer({}, { type: SET_CHARACTER_HEALTH, payload: 50 })
      ).toEqual({
        health: 50,
      });
    });
  });

  describe('SET_CHARACTER_ATTACK_DICE', () => {
    it('sets character', () => {
      expect(
        characterReducer({}, { type: SET_CHARACTER_ATTACK_DICE, payload: 2 })
      ).toEqual({
        attackDice: 2,
      });
    });
  });
});
