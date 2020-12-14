import styled, { css } from 'styled-components';

export const StyledLinkWrapper = styled.a`
  color: ${({ theme }) => theme.highlight};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 0.6rem 3.1rem;
  border-radius: 0.8rem;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.highlight};
      color: #fff;
    `}
`;
