import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';
import { addCake } from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num. of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(addCake())}>Add Cake to Store</button>
    </div>
  );
};

export default HooksCakeContainer;
