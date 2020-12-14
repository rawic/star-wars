import styled, { css } from 'styled-components';
import _HeartIcon from '@assets/heart.svg';

export const Person = styled.article`
  background-color: #272635;
  margin-bottom: 2rem;
  border-radius: 1.2rem;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background-color: #21202d;
  }
`;

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

export const Link = styled.a`
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;
