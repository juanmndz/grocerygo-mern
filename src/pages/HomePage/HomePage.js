import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUsers } from '../../modules/users/usersSideEffect';

export default function HomePage() {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.users);
  const { loading, error, users } = usersData;


  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <>loading</>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
            { users && users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
        </>
      )}

    </div>
  );
}
