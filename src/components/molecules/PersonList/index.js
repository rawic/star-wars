import React from 'react';
import { Person } from '@components';
import { StyledPersonList } from './index.styles';
import { favoritesActions } from 'redux/actions';

const addFavorite = (person, id) => {
  favoritesActions.add(person, id);
};

const removeFavorite = (person) => {
  favoritesActions.remove(person);
};

// TODO:
const renderPeople = (data, favorites) => {
  return data.map((group, i) => (
    <React.Fragment key={i}>
      {group.results.map((person) => (
        <Person
          key={person.name}
          person={person}
          isFavorite={favorites.some(
            (favorite) => favorite.name === person.name
          )}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      ))}
    </React.Fragment>
  ));
};

const renderFavorites = (favorites) => {
  return favorites.map((person) => (
    <Person
      key={person.name}
      person={person}
      isFavorite={favorites.some((favorite) => favorite.name === person.name)}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
    />
  ));
};

const PersonList = ({ data, favorites }) => (
  <StyledPersonList>
    {data ? renderPeople(data, favorites) : renderFavorites(favorites)}
  </StyledPersonList>
);

export default PersonList;
