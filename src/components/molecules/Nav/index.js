import React from 'react';
import { useSelector } from 'react-redux';
import { userActions } from '@redux/actions';
import NavLink from './NavLink';

import { StyledNav, StyledList } from './index.styles';

const Nav = () => {
  const favoritesCount = useSelector(({ favorites }) => favorites.length);

  return (
    <StyledNav>
      <StyledList>
        <NavLink href="/people">People</NavLink>

        <NavLink href="/favorites">Favorites ({favoritesCount})</NavLink>
      </StyledList>

      <button onClick={userActions.logout}>Logout</button>
    </StyledNav>
  );
};

export default Nav;
