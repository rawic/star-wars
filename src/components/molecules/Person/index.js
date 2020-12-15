import React from 'react';
import Link from 'next/link';
import { FavoriteButton } from '@components';
import * as S from './styles';

//TODO:
const Person = ({ person, isFavorite, addFavorite, removeFavorite }) => {
  const id = person.url.split('people/')[1].replace(/\/$/, '');

  return (
    <S.Person>
      <Link href={`/people/${id}`} passHref>
        <S.Link>{person.name}</S.Link>
      </Link>
      {isFavorite ? (
        <FavoriteButton onClick={() => removeFavorite(person)} $active />
      ) : (
        <FavoriteButton onClick={() => addFavorite(person)} />
      )}
    </S.Person>
  );
};

export default Person;
