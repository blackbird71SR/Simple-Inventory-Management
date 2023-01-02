import { ADD_CAKE, BUY_CAKE } from './cakeTypes';

export const buyCake = (numBuyCakes = 1) => {
  return {
    type: BUY_CAKE,
    payload: Number(numBuyCakes),
  };
};

export const addCake = (numAddCakes = 1) => {
  return {
    type: ADD_CAKE,
    payload: Number(numAddCakes),
  };
};
