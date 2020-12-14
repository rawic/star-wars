import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '@layout/Default';
import { PersonList } from '@components';

const Favorites = () => {
  const favoritePeople = useSelector((state) => state.favorites);

  return (
    <Layout>
      <PersonList favorites={favoritePeople} />
    </Layout>
  );
};

export default Favorites;
