import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake, addCake, buyIceCream, addIceCream } from '../redux';

const HooksItemContainer = (props) => {
  const [numBuyItem, setNumBuyItem] = useState(1);
  const [numAddItem, setNumAddItem] = useState(1);

  const numOfItems = useSelector((state) =>
    props.item === 'cake'
      ? state.cake.numOfCakes
      : state.iceCream.numOfIceCreams,
  );
  const dispatch = useDispatch();

  const buyItem = props.item === 'cake' ? buyCake : buyIceCream;
  const addItem = props.item === 'cake' ? addCake : addIceCream;

  return (
    <div>
      <h2>
        Num. of {props.item} - {numOfItems}
      </h2>
      <input
        type='text'
        value={numBuyItem}
        onChange={(e) => setNumBuyItem(e.target.value)}
      />
      <button onClick={() => dispatch(buyItem(numBuyItem))}>
        Buy {numBuyItem} {props.item}
      </button>
      <br />
      <br />
      <input
        type='text'
        value={numAddItem}
        onChange={(e) => setNumAddItem(e.target.value)}
      />
      <button onClick={() => dispatch(addItem(numAddItem))}>
        Add {numAddItem} {props.item} to Store
      </button>
    </div>
  );
};

export default HooksItemContainer;
