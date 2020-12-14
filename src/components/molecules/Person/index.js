import React from 'react';
import Link from 'next/link';
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
        <S.FavoriteButton onClick={() => removeFavorite(person)}>
          <S.HeartIcon $active />
        </S.FavoriteButton>
      ) : (
        <S.FavoriteButton onClick={() => addFavorite(person)}>
          <S.HeartIcon />
        </S.FavoriteButton>
      )}
    </S.Person>
  );
};

export default Person;
