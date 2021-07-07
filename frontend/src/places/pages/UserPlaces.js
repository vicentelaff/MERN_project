import React from 'react';
import { useParams, userParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Eiffel Tower',
    description: 'The most famous wonder in the world!',
    imageUrl: 'https://images.pexels.com/photos/1780838/pexels-photo-1780838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris',
    location: {
      lat: 48.8583701,
      lng: 2.2922926
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Christ the Redeemer',
    description: 'One of the biggest statues in the world!',
    imageUrl: 'https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address: 'Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil',
    location: {
      lat: -22.9465124,
      lng: -43.2091805
    },
    creator: 'u2',
  },

]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;