export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};


export const canSwingSword = (character) => {
  const state = {
    swingSword: function() {
      return `${character} swings their sword at you!`;
    }
  };
  return state;
};

export const canCastSpell = (character) => {
  const state = {
    castSpell: function() {
      return `${character} casts a spell on you!`;
    }
  };
  return state;
}; 

export const canThrowNinjaStars = (character) => {
  const state = {
    throwNinjaStars: function() {
      return `${character} flings ninja stars at you!`;
    }
  };
  return state;
};

export const canBodySlam = (character) => {
  const state = {
    bodySlam: function() {
      return `${character} body slams you!`;
    }
  };
  return state;
};


export const swordSwingingSpellCastingCharacter = (name) => {
  let obj = {
    name
  };
  return {...obj, ...canSwingSword(obj), ...canCastSpell(obj)};
};

export const bodySlammingNinjaStarringCharacter = (name) => {
  let obj = {
    name
  };
  return {...obj, ...canBodySlam(obj), ...canThrowNinjaStars(obj)};
};




export const intelligence = changeState("intelligence");
export const addIntelligence = intelligence(1);

export const strength = changeState("strength");
export const addStrength = strength(1);

export const magic = changeState("magic");
export const addMagic = magic(1);

export const dexterity = changeState("dexterity");
export const addDexterity = dexterity(1);

export const health = changeState("health");
export const addHealth = health(1);

export const createCharacter = (name, type) => state => ({
  ...state,
  name,
  type,
  attributes: {
    intelligence: 0,
    strength: 0,
    magic: 0,
    dexterity: 0,
    health: 100
  },
});

export let myCharacter = createCharacter();
myCharacter = stateControl(myCharacter(""));
myCharacter = stateControl(addIntelligence);
myCharacter = stateControl(addStrength);
myCharacter = stateControl(addMagic);
myCharacter = stateControl(addDexterity);
myCharacter = stateControl(addHealth);
