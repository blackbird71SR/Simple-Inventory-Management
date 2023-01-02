import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { buyCake, addCake } from '../redux';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const [numBuyCakes, setNumBuyCakes] = useState(1);
  const [numAddCakes, setNumAddCakes] = useState(1);

  return (
    <div>
      <h2>Num. of Cakes - {numOfCakes}</h2>
      <input
        type='text'
        value={numBuyCakes}
        onChange={(e) => setNumBuyCakes(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(numBuyCakes))}>
        Buy {numBuyCakes} Cakes
      </button>
      <br />
      <br />
      <input
        type='text'
        value={numAddCakes}
        onChange={(e) => setNumAddCakes(e.target.value)}
      />
      <button onClick={() => dispatch(addCake(numAddCakes))}>
        Add {numAddCakes} Cakes to Store
      </button>
    </div>
  );
};

export default HooksCakeContainer;
