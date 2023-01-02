import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux';

const HooksUserContainer = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return userData.loading ? (
    <div>
      <h2>Loading</h2>
    </div>
  ) : userData.error ? (
    <div>
      <h2>{userData.error}</h2>
    </div>
  ) : (
    <div>
      <h2>Users List</h2>
      {userData &&
        userData.users &&
        userData.users.map((user) => <li key={user.id}>{user.name}</li>)}
    </div>
  );
};

export default HooksUserContainer;
