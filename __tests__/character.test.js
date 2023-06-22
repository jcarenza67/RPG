import * as characterFuncs from '../src/js/character.js';

describe('character', () => {

  test('should add name and type to character', () => {
    const character = characterFuncs.createCharacter("Billy Bob", "Mage");
    expect(character.name).toEqual("Billy Bob");
    expect(character.type).toEqual("Mage");
    expect(character.intelligence).toEqual(0);
    expect(character.strength).toEqual(0);
    expect(character.magic).toEqual(0);
    expect(character.dexterity).toEqual(0);
    expect(character.health).toEqual(100);
  });

  test('should add intelligence to character', () => {
    let character = characterFuncs.createCharacter("Billy Bob", "Mage");
    character = characterFuncs.stateControl(characterFuncs.addIntelligence);
    expect(character.intelligence).toEqual(1);
  });
});