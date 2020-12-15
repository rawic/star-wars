import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '@layout/Default';
import { PersonList } from '@components';
import { auth } from 'services';

const Favorites = () => {
  const favoritePeople = useSelector((state) => state.favorites);

  return (
    <Layout>
      <PersonList favorites={favoritePeople} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  return auth(ctx);
}

export default Favorites;
