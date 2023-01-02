import { ADD_ICECREAM, BUY_ICECREAM } from './iceCreamTypes';

export const buyIceCream = (numBuyIceCream = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: Number(numBuyIceCream),
  };
};

export const addIceCream = (numAddIceCream = 1) => {
  return {
    type: ADD_ICECREAM,
    payload: Number(numAddIceCream),
  };
};
