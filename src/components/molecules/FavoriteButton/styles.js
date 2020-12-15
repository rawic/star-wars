import styled, { css } from 'styled-components';
import _HeartIcon from '@assets/heart.svg';

export const FavoriteButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;
  height: 2rem;

  &:focus {
    outline: none;
  }
`;

export const HeartIcon = styled(_HeartIcon)`
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: 0;
  position: relative;
  z-index: 1;
  &:hover {
    path:nth-child(1) {
      fill: ${({ theme }) => theme.highlight};
    }
  }
  path:nth-child(1) {
    fill: transparent;
  }
  path:nth-child(2) {
    fill: ${({ theme }) => theme.highlight};
  }
  ${({ $active }) =>
    $active &&
    css`
      path:nth-child(1) {
        fill: ${({ theme }) => theme.highlight};
      }
    `}
`;
