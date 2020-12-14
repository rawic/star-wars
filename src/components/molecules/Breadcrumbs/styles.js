import styled from 'styled-components';

export const Breadcrumbs = styled.ul`
  display: flex;
  margin-top: 1.6rem;
  margin-bottom: 2.4rem;
  text-transform: capitalize;
  color: #9593b2;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const Link = styled.a`
  color: #9593b2;
`;
