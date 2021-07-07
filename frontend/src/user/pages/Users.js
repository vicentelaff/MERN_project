import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Vicente Laffargue',
      image: 'https://images.pexels.com/photos/235674/pexels-photo-235674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      places: 3
    }
  ];

  return <UsersList items={USERS}/>;
}

export default Users;