import styled from 'styled-components';
import { Button } from '@components';

export const Wrapper = styled.article`
  background-color: #272635;
  border-radius: 1.2rem;
  padding: 1.5rem 2.5rem;
  position: relative;
`;

export const PersonDetails = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const PersonName = styled.h1`
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 1rem;
`;

export const FavoriteButtonWrapper = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 1.5rem;
`;

export const GoBackButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 3.8rem;
  margin-top: 3rem;
  width: 11.5rem;
`;
